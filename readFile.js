const fs = require('fs').promises;

fs.readFile('./readme.txt') //io과정/ 실행하자마자 백그라운드로 던져아함 (프로미스)
    .then((data)=>{
        console.log(data.toString());    
        return fs.writeFile('./readme.txt', '잘 읽었습니다.');
    })
    .then(() => {
        return fs.readFile('./readme.txt');
    })
    .then((data) =>{
        console.log(data.toString());
    })
    .catch((err) =>{
        console.error(err);
    
});