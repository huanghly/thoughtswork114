'use strict';

function hybrid_operation(collection) {

    //在这里写入代码
    var result = 0;
    for (let i in collection) {
        collection[i] = collection[i] * 　3 + 2;
        result += collection[i];
    }
    return result;

}

module.exports = hybrid_operation;