'use strict';

function hybrid_operation_to_uneven(collection) {

    //在这里写入代码
    var result = 0;
    var arr = [];
    for (let i in collection) {
        if (collection[i] % 　2 != 0) {
            arr.push(collection[i]);
        }
    }
    for (let j in arr) {
        arr[j] = arr[j] * 3 + 5;
        result += arr[j];
    }

    return result;
}

module.exports = hybrid_operation_to_uneven;