'use strict';

function average_to_letter(collection) {

    //在这里写入代码
    var sum = 0;
    var result = 0;

    for (var i in collection) {
        sum += collection[i];
        result = String.fromCharCode(Math.ceil(sum / collection.length) + 96);
    }
    return result;
}

module.exports = average_to_letter;