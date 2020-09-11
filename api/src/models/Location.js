const S = require('sequelize').DataTypes 

module.exports = (sequelize) => {
    sequelize.define( 'location',
    {
        address: {
            type: S.STRING,
            allowNull: false
        },
        street: {
            type: S.STRING,
            allowNull: false
        },
        num: {
            type: S.INTEGER,
            allowNull: false
        }
    })
};