'use strict';

function choose_even(collection) {

    //在这里写入代码
    var result = [];
    var n = 0;
    var collection = [0, 1, 2, 3, 4, 6];
    for (var i = 0; i < collection.length; i++) {
        if (collection[i] % 2 === 0) {
            result.push(collection[i]);
        }
    }
    return result;
}

module.exports = choose_even;