const S = require('sequelize').DataTypes 

module.exports = (sequelize) => {
    sequelize.define( 'wallet',
        {
            type: {
                type: S.ENUM(
                    "cuenta corriente", 
                    "cuenta de ahorro", 
                    "linea de credito",
                ),
                defaultValue: "cuenta corriente",
            },
            balance: {
                type: S.DECIMAL(1000, 2),
                defaultValue: 0.0,
                validate: { min: 0 }
            },
            currency: {
                type: S.ENUM(
                    "Dolar",
                    "Peso",
                    "Euro"
                ),
                defaultValue: "Peso"
            }
        },
    );
};