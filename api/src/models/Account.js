const S = require('sequelize').DataTypes
const seedrandom = require("seedrandom")


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
            beforeCreate: (account) => {
                GenCVU(account);
                GenCard(account);
            }
        }
    })
};

const GenCVU = (account) => {
    account.dataValues.cvu = Math.random() * (9999999999999999 - 1000000000000000) + 1000000000000000
}

const GenCard = (account) => {
    account.dataValues.numCard = Math.random() * (999999999999999999 - 100000000000000000) + 100000000000000000
}