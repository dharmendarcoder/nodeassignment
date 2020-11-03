const { DataTypes } = require("sequelize");

module.exports = function (sequelize) {
  return sequelize.define(
    "users",
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      firstName: {
        defaultValue: "firstName",
        allowNull: false,
        type: DataTypes.STRING(100),
      },
      lastName: {
        defaultValue: "lastName",
        allowNull: false,
        type: DataTypes.STRING(100),
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING(100),
        unique: true,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING(100),
        
      },
    },
    { timestamps: false }
  );
};
