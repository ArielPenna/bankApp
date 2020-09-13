const S = require('sequelize').DataTypes 

module.exports = (sequelize) => {
    sequelize.define( 'location',
    {
        street1: {
            type: S.STRING,
            allowNull: false
        },
        street2: {
            type: S.STRING,
            allowNull: false
        },
        city: {
            type: S.STRING,
            allowNull: false
        },
        province: {
            type: S.STRING,
            allowNull: false
        },
        country: {
            type: S.STRING,
            allowNull: false
        },
        addressNumber: {
            type: S.INTEGER,
            allowNull: false
        },

    })
};