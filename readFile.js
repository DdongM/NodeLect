const fs = require('fs').promises;

fs.writeFile('./writeme.txt', '저를 읽어주세요.')
    .then(() => {
        return fs.readFile('./writeme.txt');
    })
    .then(data => {
        console.log(data);
        console.log(data.toString());
    })
.catch(err => {
        console.err(err);
    
});
