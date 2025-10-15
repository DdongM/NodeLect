/*
!객체리터럴
var sayNode = (() => {
    console.log('Node');
});
var es = 'ES';
var oldObject = {
    sayJS: function() {
        console.log('JS');
    },
    sayNode:sayNode,
};
oldObject[es+6] = 'Fantastic';
oldObject.sayNode();
oldObject.sayJS();
console.log(oldObject.ES6);*/


/*
!중첨 forEach
var relationship1 = {
    names: ['zero','dong'],
    friends: ['nero', 'hero', 'xero'],
    adds: ['한누리관', '송백관'],
    logFriends(){
        this.adds.forEach(add => {
            this.friends.forEach(friend =>{
                this.names.forEach(name =>{
                    console.log(name,friend, add)
            })
        });
    });
    },
};
relationship1.logFriends();*/


/*
!구조분해 할당(전단계)
var candyMachine = {
    status: {
        name: 'node',
        count: 5,
},
getCandy: function() {
    this.status.count--;
    return this.status.count;
},
};

var getCandy = candyMachine.getCandy;
var count = candyMachine.status.count;


!구조분해 할당(후단계)
const {getCandy, status: {count}} = candyMachine;


!배열 구조분해 할당
var array = ['nodejs', {}, 10, true];
var node = array[0];
var obj = array[1];
var bool = array[3];
//-----------------
//위에거 바꾸기 가능
const array = ['nodejs', {}, 10, true];
const [nodem obj, , bool] = array;*/

//!프로미스(기본)
/*const condition = true;
const promise = new Promise((resolve, reject) =>{
    if(condition) {
        resolve('성공');
    }else {
        reject('실패');
    }
});
promise
    .then((message) =>{
        console.log(message);
    })
    .catch((error) =>{
        console.error(error);
    })
    .finally(() => {
        console.log('무조건');
    });*/

//프로미스 (체이닝)
/*
const condition = true;
const promise = new Promise((resolve, reject) =>{
    if(condition) {
        resolve('성공');
    }else {
        reject('실패');
    }
});
promise
    .then((message) =>{
        return new Promise((resolve, reject) =>{
            resolve(message);
        });
    })
    .then((message2) =>{
        console.log(message2);
        return new Promise((resolve, reject) => {
            resolve(message2);
        });
    })
    .then((message3) => {
        console.log(message3)
    })
    .catch((error) => {
        console.error(error);
    });*/
    

    //콜백패턴을 프로미스로 바꾸기
    /*
    function findAndSaveUser(User) {
        User.findOne({}, (err, user) => {
            if (err) {
                return console.error(err);
            }
            user.name = 'zero';
            user.save((err) => {
                if (err) {
                    return console.error(err);
                }
                User.findOne({gender: 'm'}, (err, user) => [

                ]);
            });
        });
    }*/


//콜백헬을 프로미스 체이닝으로 바꾸기
/*
function findAndSaveUser(User) {
        User.findOne({})
            .then((user) => {
                user.name = 'zero';
                return user.save();
            })
            .then((user) => {
                return User.findOne({gender: 'm'});
            })
            .then((user) => {

            })
            .catch(err => {
                console.error(err);
            });
    }*/


//프로미스를 배열을 통해 두개를 실행(Promise.all 사용)
/*
const promise1 = Promise.resolve('성공');
const promise2 = Promise.resolve('성공');
Promise.all([promise1,promise2])
    ,then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    })*/

//async/await로 축약
/*
async function findAndSaveUser(User) {
    try{
        let user = await findOne({})
        user.name = 'zero';
        user = await user.save();
        user = await User.findOne({gender: 'm'},(err,user))
    }
    catch(error){
        console.error(err);
    }
}*/


//화살표함수를 사용한 async/await
/*
const findAndSaveUser = async (User) => {
    try{
        let user = await findOne({})
        user.name = 'zero';
        user = await user.save();
        user = await User.findOne({gender: 'm'},(err,user))
    }
    catch(error){
        console.error(err);
    }
}*/


//AJAX 서버로 요청을 보내기