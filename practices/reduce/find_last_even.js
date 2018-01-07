'use strict';

function find_last_even(collection) {
    //在这里写入代码
    for (let i in collection) {
        if (collection[i] % 2 === 0) {
            var arr = [];
            arr.push(i);
            var result = arr[arr.length - 1];
        }
    }
    return parseInt(result);
}

module.exports = find_last_even;