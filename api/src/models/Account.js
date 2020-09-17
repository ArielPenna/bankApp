const S = require('sequelize').DataTypes
/* const passport = require('passport'); */
const seedrandom = require("seedrandom")


module.exports = (sequelize) => {
    sequelize.define('account', {
        accountId: {
            type: S.TEXT,
            primaryKey: true,
        },
        cvu: {
            type: S.TEXT,
        },
        numCard: {
            type: S.TEXT,
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
    let code = seedrandom(account.dataValues.accountId)
    code = Math.floor(code() * (99999999999999999999 - 10000000000000000000) + 10000000000000000000);
    account.dataValues.cvu = code
}

const GenCard = (account) => {
    let code = seedrandom(account.dataValues.accountId)
    code = '5547' + Math.floor(code() * (999999999999 - 100000000000) + 100000000000);
    account.dataValues.numCard = code
}