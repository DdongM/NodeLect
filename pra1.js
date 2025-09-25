console.log("김태석");

var sayNode = function() {
    console.log("NODE");
}
var es = 'ES';
var oldObj = {
    sayJS :() => {
        console.log('JS');
    },
    sayNode : sayNode,
};
oldObj[es + 6] = 'Fantastic';
oldObj.sayNode();
oldObj.sayJS();
console.log(oldObj.ES6);

var relationship1 = {
    name : '서동민',
    friends : ['김승현', '김태석', '박제학'],
    add : ['한누리관', '송백관'],
    logFriends: function() {
        var that = this;
        this.add.forEach( (addlist) => {
            this.friends.forEach( (friend) => {
                console.log(that.name, friend, addlist);
        });
    })
    },
};
relationship1.logFriends();

var candyMachine = {
    status: {
    name: 'node',
    count: 5,
},
getCandy() {
    this.status.count--;
    return this.status.count;
},
};
var getCandy = candyMachine.getCandy;
var count = candyMachine.status.count;

//candyMachine.getCandy();
var result = candyMachine.getCandy();
console.log(result);

const condition = false
const promise = new Promise((resolve, reject) => {
    if (condition) {
        resolve('성공');
    }else {
        reject('실패');
    }
    });

    promise
        .then((message) => {
         console.log(message);
        })
        .catch((error) => {
         console.log(error);
        })
        .finally(() => {
         console.log('무조건');
        });

        async function findAndSaveUser(User) {
            try {
            let user = await User.findOne({})
            user.name = 'zero';
             user = await user.save();
             user = await User.findOne({gender: 'm'})
            } catch(err) {
                console.error(err);
             }
        }