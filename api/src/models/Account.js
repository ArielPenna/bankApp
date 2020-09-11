const S = require('sequelize').DataTypes 
const seedrandom = require("seedrandom")


module.exports = (sequelize) => {
    sequelize.define( 'account',
    {
        id: {
            type: S.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cvu: {
            type: S.BIGINT
        },
        numCard: {
            type: S.BIGINT
        },
    },
    { // HOOKS
        hooks: {
            afterCreate: (account) => {
                GenCVU(account);
                GenCard(account);
            }
        }
    })
};

const GenCVU = (account) => {
    /* const cvu = seedrandom(account.getDataValue('id')); */
    /* const cript = cvu.double().toString().split('.')[1].substring(0,16) */
    // captura la parte decimal y la limita a 16 caracteres
    /* account.cvu = Number(cript) * (9999999999999999 - 1000000000000000) + 1000000000000000 */
    account.cvu = Math.random() * (9999999999999999 - 1000000000000000) + 1000000000000000
}

const GenCard = (account) => {
    /* const numCard = seedrandom(account.getDataValue('id')); */
    /* const cript = numCard.double().toString().split('.')[1].substring(0,16) */
    // captura la parte decimal y la limita a 16 caracteres
    /* account.numCard = Number(cript) * (999999999999999999 - 100000000000000000) + 100000000000000000 */
    // convierte el numero que llegue a 18 caracteres
    account.numCard = Math.random() * (999999999999999999 - 100000000000000000) + 100000000000000000
}