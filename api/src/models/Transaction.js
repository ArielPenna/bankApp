const S = require("sequelize").DataTypes;

module.exports = (sequelize) => {
    sequelize.define( 'transaction',
        {
            id: {
                type: S.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            debit: {
                type: S.TEXT
            },
            deposit: {
                type: S.TEXT
            },
            value: {
                type: S.DECIMAL(1000, 2),
                defaultValue: 0.0,
                validate: { min: 0 }
            },
            transactions_type: {
                type: S.ENUM([
                    "transferencia a usuario",
                    "pago comercio",
                    "transferencia bancaria",
                    "recarga billetera",
                ]),
                defaultValue: "transferencia a usuario"
            },
        }
    );
};
