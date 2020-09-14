const S = require("sequelize").DataTypes;

module.exports = (sequelize) => {
  sequelize.define("transaction", {
    value: {
      type: S.DECIMAL(1000, 2),
      allowNull: false,
    },
    transactions_type: {
      type: S.ENUM(["transferencia a usuario", "pago comercio", "transferencia bancaria", "recarga billetera"]),
      allowNull: true,
    },
  });
};
