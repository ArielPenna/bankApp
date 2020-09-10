const S = require('sequelize').DataTypes

module.exports = (sequelize) => {
  sequelize.define( 'user',
    {
      firstName: {
        type: S.STRING,
        allowNull: false,
      },
      lastName: {
        type: S.STRING,
        allowNull: false,
      },
      email: {
        type: S.STRING,
        allowNull: false,
        unique: true
      },
      documentType: {
        type: S.ENUM('DNI', 'Pasaporte'),
        allowNull: false
      },
      documentNumber: {
        type: S.INTEGER,
        allowNull: false
      },
      birth: {
        type: S.DATE
      },
      phoneNumber: {
        type: S.TEXT,// S.INTEGER(11).UNSIGNED | numero de telefono sin +54
        allowNull: false
      },
      password: {
        type: S.STRING,
        allowNull: false,
      },
      address: {
        type: S.TEXT,
        allowNull: false
      },
      access: {
        type: S.ENUM('User', 'Admin'),
        defaultValue: 'User'
      }
    },
  );
};
