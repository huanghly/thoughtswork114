'use strict';

function find_first_even(collection) {
    //在这里写入代码
    for (let i in collection) {
        if (collection[i] % 2 === 0) {
            var result = collection[i];
            break;
        }
    }
    return parseInt(result);
}

module.exports = find_first_even;