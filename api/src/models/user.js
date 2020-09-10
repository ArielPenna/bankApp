const Users = (sequelize, S) => {
  const U = sequelize.define(
    {
      firstName: {
        type: S.STRING,
        allowNull: true,
      },
      lastName: {
        type: S.STRING,
        allowNull: true,
      },
      password: {
        type: S.STRING,
        allowNull: false,
      },
    },
  );
  return U;
};

module.exports = Users;
