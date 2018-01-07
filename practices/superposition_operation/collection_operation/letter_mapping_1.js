'use strict';

function even_to_letter(collection) {

    //在这里写入代
    var result = [];
    var collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (let i in collection) {
        if (collection[i] % 2 === 0) {
            result.push(String.fromCharCode(collection[i] + 96));
        }
    }
    return result;

}
module.exports = even_to_letter;