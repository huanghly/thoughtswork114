'use strict';

function amount_even(collection) {

    //在这里写入代码
    var arr = [];
    var result = 0;
    for (let i in collection) {
        if (collection[i] % 2 === 0) {
            arr.push(collection[i]);
        }
    }
    for (let j in arr) {
        result += arr[j];
    }
    return result;
}

module.exports = amount_even;