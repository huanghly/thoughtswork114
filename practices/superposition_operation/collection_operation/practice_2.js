'use strict';

function hybrid_operation_to_uneven(collection) {

    //在这里写入代码
    var result = [];
    var arr = [];
    for (let i in collection) {
        if (collection[i] % 　2 != 0) {
            arr.push(collection[i]);
        }
    }
    for (let j in arr) {
        arr[j] = arr[j] * 3 + 2;
    }
    result = arr;
    return result;

}

module.exports = hybrid_operation_to_uneven;