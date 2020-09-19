require("dotenv").config();
const { Sequelize } = require('sequelize');
const fs = require("fs");
const path = require("path");
const Address = require("./models/Location");

const { DB_USER, DB_PASSWORD, DB_HOST, } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/bankapp`, {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
    .filter(
        (file) =>
            file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    )
    .forEach((file) => {
        modelDefiners.push(require(path.join(__dirname, "/models", file)));
    });

// Inyectamos la conexión (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
    entry[0][0].toUpperCase() + entry[0].slice(1),
    entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { User, Wallet, Account, Location, Transaction } = sequelize.models;

//-----------------------^^^^^^^^^^^^^^^^^^^^^^-------------------------------//
//-----------------------||||||||||||||||||||||-------------------------------//
//-----------------------||--DECLARACIONES--|||-------------------------------//
//-----------------------||||||||||||||||||||||-------------------------------//
//-----------------------|||--RELACIONES--|||||-------------------------------//
//-----------------------||||||||||||||||||||||-------------------------------//
//-----------------------vvvvvvvvvvvvvvvvvvvvvv-------------------------------//

// un usuario tiene una billetera
// una billetera tiene un usuario
User.hasOne(Wallet) // busca userId en wallet
Wallet.belongsTo(User) // crea userId

// un usuario tiene una cuenta
// una cuenta tiene un usuario
User.hasOne(Account) // busca userId en Address
Account.belongsTo(User) // crea userId

// un usuario tiene una direccion
// una direccion tiene un usuario
User.hasOne(Location) // busca userId en Address
Location.belongsTo(User) // crea userId

// un usuario tiene muchos usuarios (contactos)
User.belongsToMany(User, { as: "friend", foreignKey: "friended", through: "contacts" })
User.belongsToMany(User, { as: "friended", foreignKey: "friend", through: "contacts" })


// un usuario tiene muchas transacciones 
Account.belongsToMany(Account, { as: "debit", foreignKey: "deposit", through: "transaction" })
Account.belongsToMany(Account, { as: "deposit", foreignKey: "debit", through: "transaction" })


//----------------------------------------------------------------------------//
module.exports = {
    ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
    conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};