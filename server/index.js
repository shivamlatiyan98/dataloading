// import express from 'express';
//
//
// import http from 'http';
//
// import  bodyparser from 'body-parser';
//
// import  morgan from 'morgan';



var express =require('express');

var bodyparser=require('body-parser');

var morgan =require('morgan');


const app=express();


var mongoose=require('mongoose');

var url='mongodb://<shivam98lat>:<shivam98>@ds115493.mlab.com:15493/todolist';

mongoose.connect('mongodb://localhost:auth/auth');



var corse=require('cors');


app.use(corse());
//commen6t

app.use(morgan('combined'));

app.use(bodyparser.json({type:'*/*' }));


var router=require('./router');

router(app);

var port=process.env.port||7090;


app.listen(port,function () {
    console.log('listening',port);

});







