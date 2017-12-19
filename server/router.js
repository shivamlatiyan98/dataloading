module.exports=function (app) {


const passportServices=require('./services/passport');




const passport=require('passport');


    const requireauth=passport.authenticate('jwt',{session:false});


app.get('/',requireauth,function (req,res,next) {

    res.send({
        'message':"super key is there"

    });


});

    const authentication=require('./controllers/authentication');

const localverify=passport.authenticate('local',{session:false});


app.post('/signin',localverify,authentication.signin);





    app.post('/signup',authentication.signup);











}