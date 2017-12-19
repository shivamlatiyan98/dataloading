

const user=require('../mongoose/usermodel');

const jwt=require('jwt-simple');


const secretc=require('../config');




// sub also indiactes belonging mainly



// issuing time mainly




function accesstoken(user) {

    const timethen=new Date().getTime();

    return jwt.encode({sub:user.id,iat:timethen},secretc.secret)








}


// console.log(user);

exports.signup=function (req,res,next)

{




    const email=req.body.email;

    const password=req.body.password;


    if(!email||!password){
      return res.send('chutiya hai kya');

    }


    user.findOne({email:email},function (err,exisitinguser) {


        if(exisitinguser){



            return res.status(422).send({ error: 'Email is in use' });

        };






        const user1 =new user(


            {
                email:email,
                password:password


            }


        )

        user1.save(function (err) {

            if(!err){

                return res.json({user:accesstoken(user1)});
            }

        });












    });











};




// exports is used to send the data mainly
exports.signin=function (req,res,next) {


    // email an password is verified and needed acess token mainly


// sends the acess token to the authenticated user mainly




  res.send({token:accesstoken(req.user)});












};





























