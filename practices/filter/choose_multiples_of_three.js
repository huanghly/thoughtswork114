'use strict';

function choose_multiples_of_three(collection) {

    //在这里写入代码
    var result = [];
    var n = 0;
    var collection = [0, 1, 2, 3, 4, 5, 6, 9, 11];
    for (var i = 0; i < collection.length; i++) {
        if (collection[i] % 3 === 0) {
            result.push(collection[i]);
        }
    }
    return result;
}

module.exports = choose_multiples_of_three;