# nodeassignment

## Require depndecies

dotenv
express
jsonwebtoken
md5
passport
passport-jwt
pg"
pg-hstore
postgres,
sequelize"
## start command
node index.js (give start command in src folder)
## running 
localhost:3000

##  paths for user
get all the user=/user
get one user=user/id
post user=/user
give body like
body{
    firstName:"abc",
      lastName:"abc",
      email:"abc",
      password:"abc"}
delete user=/user/id
put user=/user/id
##  paths for auth

post auth=/auth/login
{
    email:"abc@gamil.com"
    password:"abcdef"
}
get auth =/auth/me

##  paths for blog
get all the blog=/blog
get one blog=blog/id
post blog=/blog
delete blog=/blog/id
put blog=/blog/id

