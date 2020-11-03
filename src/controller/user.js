const { sequelize } = require("../models/db.js");
const md5 = require("md5");

function Main(app) {
  app.get("/user", async function (request, response) {
    const users = await sequelize.models.users.findAll({});
    response.status(200).send(users);
  });

  app.get("/user/:id", async function (request, response) {
    const { id } = request.params;
    const user = await sequelize.models.users.findOne({where:{ id }});
    response.send({ user });
  });

  app.delete("/user/:id", async function (request, response) {
    const { id } = request.params;
    const user = await sequelize.models.users.findOne({where:{ id }});
    const dest = await user.destroy();
    response.send({ dest });
  });

  app.post("/user", async function (request, response) {
    const { body } = request;
    const { firstName, lastName, email, password } = body;

   const createdUser = await sequelize.models.users.create({
      firstName,
      lastName,
      email,
      password: md5(password),
    });

  const { password: mdPassword, ...sanitizedUser } = JSON.parse(
      JSON.stringify(createdUser)
    );
    response.status(201).send(sanitizedUser);
  

  });

  app.put("/user/:id", async function (request, response) {
    const { id } = request.params;
    const user = await sequelize.models.users.findOne({where:{ id }});

    const { body } = request;
    const { firstName, lastName, email, password } = body;

    user.firstName = firstName ? firstName : user.firstName;
    user.lastName = lastName ? lastName : user.lastName;
    user.email = email ? email : user.email;
    
    await user.save();

    const { password: mdPassword, ...sanitizedUser } = JSON.parse(
      JSON.stringify(user)
    );

    response.status(200).send(sanitizedUser);
  });
}

module.exports = {
  Main,
};
