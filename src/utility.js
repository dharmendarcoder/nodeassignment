const jwt= require("jsonwebtoken");
const { json } = require("sequelize");
const signingKey="abcdsedgdfdfdfd";
function generateJWT(payload){
    return jwt.sign(payload, signingKey,{expiresIn: "2d"});
}
function sanitzeUser(user){
    const {password:mdPassword,...sanitzeUser}=JSON.parse(JSON.stringify(user)
    );
    return sanitzeUser;
}
module.exports={
    signingKey,
    generateJWT,
    sanitzeUser
};