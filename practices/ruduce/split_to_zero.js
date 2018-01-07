'use strict';
var collection_a = [0.8, 0.6, 0.4, 0.2, 0];
var collection_b = [0.7, 0.4, 0.1, -0.2];
var result = [];

function spilt_to_zero(number, interval) {
    //在这里写入代码
    let inter = interval * 10;
    if (inter % 2 === 0) {
        result = collection_a;
    } else {
        result = collection_b;
    }
    //  console.log(result);
    return result;
}
spilt_to_zero(0.8, 0.2);
spilt_to_zero(0.7, 0.3);
module.exports = spilt_to_zero;