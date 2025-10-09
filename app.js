const express = require('express');
const path = require('path');
const morgan = require('morgan');
const dotenv = require('dotenv');
const indexRouter = require('./routes');
const userRouter = require('./routes/user');


dotenv.config();

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use((req,res,next)=> {
    console.log('모든 요청에 다 실행됩니다.')
    next();
})

app.use('/',indexRouter);
app.use('/user',userRouter);

app.use((req,res,next)=>{
    res.status(404).send('Not Found');
})

app.use((err,req,res,next) =>{
    console.error(err);
    res.status(500).send(err.message);
})

app.listen(app.get('port'),() => {
    console.log(app.get('port'),'번 포트에서 대기 중');
})
