const { request } = require("express");
const express = require("express");
const passport = require("passport");
const blogController = require("./controller/blog");
const userController = require("./controller/user");
const authController = require("./controller/auth");
const db = require("./models/db.js");
const { signingKey, sanitizeUser } = require("./utility");

const JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = signingKey;

const PORT = 3000;
const app = express();

passport.use(
  new JwtStrategy(opts, async function (payload, done) {
    const user = await db.sequelize.models.users.findOne({ id: payload.id });

    if (!user) {
      done(null, false);
    }

    done(null, sanitizeUser(user));
  })
);

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(passport.initialize());

blogController.Main(app);
userController.Main(app);
authController.Main(app);

db.init().then(console.log).catch(console.log);

app.listen(PORT, function () {
  console.log(`Your app is running on PORT - ${PORT}`);
});
