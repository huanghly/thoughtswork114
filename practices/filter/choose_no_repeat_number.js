'use strict';

function choose_no_repeat_number(collection) {

    //在这里写入代码
    var result = [];
    var n = 0;
    for (var i = 0; i < collection.length; i++) {
        if (collection[i] != collection[i + 1]) {
            result[n] = collection[i];
            n++;
        }
    }
    return result;
}

module.exports = choose_no_repeat_number;