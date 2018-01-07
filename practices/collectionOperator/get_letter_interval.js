'use strict';

function get_letter_interval(number_a, number_b) {
    //在这里写入代码
    var result = [];
    var collection_a = ['a', 'b', 'c', 'd', 'e'];
    var collection_b = ['e', 'd', 'c', 'b', 'a'];
    if (number_a < number_b) {
        result = collection_a;
    } else if (　number_a > number_b) {
        result = collection_b;
    } else {
        result = [collection_a[collection_a.length - 1]];
    }

    return result;
}

module.exports = get_letter_interval;