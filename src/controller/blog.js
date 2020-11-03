const { sequelize } = require("../models/db.js");
const passport = require('passport');

function Main(app) {

  app.post(
    "/blog",
    passport.authenticate("jwt", { session: false }),
    async function (request, response) {
      const { body } = request;
      const { data } = body;

      const createdBlog = await sequelize.models.blogs.create({
        data
      });
      response.status(201).send(createdBlog);
    }
  );



  app.get("/blog", async function (request, response) {
    const blogs = await sequelize.models.blogs.findAll({});
    response.status(200).send(blogs);
  });

  app.get("/blog/:id", async function (request, response) {
    const { id } = request.params;
    const blog= await sequelize.blogs.findOne({where:{ id }});
    response.send({ blog });
  });

  app.delete("/blog/:id", async function (request, response) {
    const { id } = request.params;
    const blog = await sequelize.models.blogs.findOne({where:{ id }});
    const del = await blog.destroy();
    response.send({ del});
  });



  app.put("/blog/:id", async function (request, response) {
    const { id } = request.params;
    const blog = await sequelize.models.blogs.findOne({where:{ id }});

    const { body } = request;
    const {data } = body;

    movie.data = data ? data: blog.data;
    
  await blog.save();

    response.status(200).send(blog);
  });
}

module.exports = {
  Main,
};
