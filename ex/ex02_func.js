const {odd, even} = require('./ex02_var');

function checkOddOrEven(num) {
    if (num % 2) {
        return odd;
    }
    return even;
}
module.exports = checkOddOrEven;