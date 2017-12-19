var mongoose= require('mongoose');


const bcrypt=require('bcrypt-nodejs');

const Schema = mongoose.Schema;

// we first define the model and schema for it mainly

// define the model mainly


// check the uniquness of the string mainly



const userSchema=new Schema({

   email:{ type:String, unique:true , lowercase:true },

   password:String



});




// before saving the model the model is


userSchema.pre('save',function (next) {


   // user model in this
   const user =this;
// gensalt and then it run the cb
   bcrypt.genSalt('10',function (err,salt) {

      if(err) throw err;

      // speficic password // salt is used to

       // cb hash the encrypting password
      bcrypt.hash(user.password,salt,null,function (err,hash) {

         user.password=hash;
         next();
// go head and save the model mainly

      })


   })


})



// it will be availabe to all the users who tried to logging and user indentity
userSchema.methods.comparepassword=function (candidatepassword,callback) {


   // bcrypt takes the cndid password and do the encryption mainly
   bcrypt.compare(candidatepassword,this.password,function (err,ismatch) {

      callback(null,ismatch);


   })




};


































// we define the model class as the config for all


const ModelClass = mongoose.model('user', userSchema);

// Export the model
module.exports = ModelClass;















