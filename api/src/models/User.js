const S = require('sequelize').DataTypes

module.exports = (sequelize) => {
    sequelize.define('user', {
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
            type: S.DATE,
            allowNull: false,
            validate: {
                isDate: true,
                dateValidator(value) {
                    let ageCheck = new Date();
                    ageCheck.setFullYear(ageCheck.getFullYear() - 16);
                    let birthDate = new Date(value);
                    if (ageCheck < birthDate) {
                    throw new Error("Tenes que ser mayor de 16 años para registrarte");
                }}
            },
        },
        phoneNumber: {
            type: S.TEXT, // S.INTEGER(11).UNSIGNED | numero de telefono sin +54
            allowNull: false
        },
        password: {
            type: S.STRING,
            allowNull: false
        },
        address: {
            type: S.TEXT,
            allowNull: false
        },
        access: {
            type: S.ENUM('User', 'Admin'),
            defaultValue: 'User'
        }/* ,
        */
    }, );
};