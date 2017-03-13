/*
* The code below can be removed. It simply provides some examples of ES2015 syntax.
* */
module.exports = function({percent = 100, amount}){
    const percentOff = (percent / 100) * amount;
    return percentOff;
};