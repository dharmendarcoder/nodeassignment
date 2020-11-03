const { DataTypes } = require("sequelize");

module.exports = function (sequelize) {
  return sequelize.define(
    "blogs",
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      blog: {
        defaultValue: "name",
        allowNull: false,
        type: DataTypes.STRING(255),
      },
    },
    { timestamps: false }
  );
};
