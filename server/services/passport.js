
const passport=require('passport');
const config=require('../config');
const user=require('../mongoose/usermodel');

const Jwtstatergy=require('passport-jwt').Strategy;

const  extractjwt=require('passport-jwt').ExtractJwt;

const LocalStratergy=require('passport-local').Strategy;


// email
const localoptions={usernameField:'email'};

const localstatergy=new LocalStratergy(localoptions,function (email,password,done) {


// verify the email and the password in this category mainly


    user.findOne({email:email},function (err,user) {


        if(!user){

        return   done(null,false);

        }


        // comparisions for password


        user.comparepassword(password,function (err,ismatch) {

            if(ismatch){
              return  done(null,user);
            }

            else{
              return  done(null,false)
            }

        })



    });






})




// set up the jwt options


//to extract from the headers and within the authorisation property mainly

const jwtoptions={

    jwtFromRequest: extractjwt.fromHeader('authorization'),

    secretOrKey: config.secret


};







// create the jwtstatergy for configuaration


//payload is included with

//payload is the decoded jwt the actual
const jwtstratergy=new Jwtstatergy(jwtoptions,function (payload,done) {


    user.findById(payload.sub,function (err,user) {
        // throw the error mainly
        if(err){
           return done(err,false);

        }


       if(user){

        return done(null,user);

       }

       else{

         return done(null,false);

        }







    })






});






   passport.use(localstatergy);

   passport.use(jwtstratergy);


// allow the passpaort to use the jwt to be used





























