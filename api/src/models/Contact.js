const S = require('sequelize').DataTypes 

module.exports = (sequelize) => {
    sequelize.define( 'contact',
    {
        id: {
            type: S.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        friend: {
            type: S.INTEGER,
            allowNull: false
        },
        friended: {
            type: S.INTEGER,
            allowNull: false
        },
        nickName: {
            type: S.TEXT,
            unique: true
        },
        email: {
            type: S.TEXT,
            unique: true
        }
    })
};