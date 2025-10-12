const express = require('express')
const path = require('path');
const morgan = require('morgan');
const userRouter = require('./routes/user');
const indexRouter = require('./routes');
//const dotenv = require('dotenv');


//dotenv.config();

const app1 = express();
app1.set('port', process.env.PORT || 8080);

app1.use(morgan('dev'));

app1.use((req, res, next) => {
    console.log('실행');
    next();
});

app1.use('/', indexRouter);
app1.use('/user', userRouter);

app1.use((req, res, next) => {
    res.status(404).send('Not Found');
})

app1.use((err, req, res, next)=> {
    console.error(err);
    res.status(500).send(err.message);
})
//app1.get('/', (req, res) => {
//    res.sendFile(path.join(__dirname,'./index1.html'))
//});

app1.listen(app1.get('port'),() => {
    console.log(app1.get('port'), '빈 포트에서 대기 중');
});