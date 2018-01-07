'use strict';

function get_integer_interval(number_a, number_b) {
    //在这里写入代码
    var result = [];
    var collection_a = [1, 2, 3, 4, 5];
    var collection_b = [5, 4, 3, 2, 1];
    if (number_a < number_b) {
        result = collection_a;
    } else if (number_a > number_b) {
        result = collection_b;
    } else if (number_a === number_b) {
        var arr = [number_a];
        result = arr;
    }
    return result;
}

module.exports = get_integer_interval;