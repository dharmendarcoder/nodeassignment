
const { Sequelize } = require("sequelize");
const env=require('dotenv').config()

const sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  port:process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database:  process.env.DB_NAME,
  sync: true,
});

const blogs = require("./blog")(sequelize);
const users = require("./user")(sequelize);

const init = async function () {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
  } catch (error) {
    console.log(`Error=${error}`);
  }
};

module.exports = {
  init,
  users,
  blogs,
  sequelize,
};
