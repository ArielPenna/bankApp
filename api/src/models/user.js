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
            allowNull: false
        },
        documentType: {
            type: S.ENUM('DNI', 'Pasaporte'),
            allowNull: false
        },
        documentNumber: {
            type: S.INTEGER,
            allowNull: false
        },
        birthDate: {
            type: S.DATEONLY,
            allowNull: true,
            validate: {
                isDate: true,
                dateValidator(value) {
                    let ageCheck = new Date();
                    ageCheck.setFullYear(ageCheck.getFullYear() - 16);
                    let birthDate = new Date(value);
                    if (ageCheck < birthDate) {
                        throw new Error("No esta permitido registrar a Usuarios menores de 16 años");
                    }
                }
            },
        },
        phoneNumber: {
            type: S.TEXT, // S.INTEGER(11).UNSIGNED | numero de telefono sin +54
            allowNull: false
        },
        password: {
            type: S.STRING,
            allowNull: false,
        },
        access: {
            type: S.ENUM('User', 'Admin'),
            defaultValue: 'User'
        }
    }, );
};