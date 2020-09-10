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
    const cvu = seedrandom(account.getDataValue('id'));
    account.cvu = cvu.int32()
}

const GenCard = (account) => {
    const numCard = seedrandom(account.getDataValue('id'));
    account.numCard = numCard.int32()
}