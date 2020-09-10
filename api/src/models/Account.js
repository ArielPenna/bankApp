const S = require('sequelize').DataTypes
const seedrandom = require("seedrandom")
const { User } = require('../db')


module.exports = (sequelize) => {
    sequelize.define('account', {
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
    }, { // HOOKS
        hooks: {
            afterValidate: (account) => {
                console.log(User)
                const cvu = new seedrandom(1);
                const numCard = new seedrandom(1);
                account.cvu = cvu.int32()
                account.numCard = numCard.int32()
                    /* account.cvu = Math.floor(Math.random() * ( 10000000000 - 1000000000 ) + 1000000000);
                    account.numCard = Math.floor(Math.random() * ( 10000000000 - 1000000000 ) + 1000000000); */
            }
        }
    })
};