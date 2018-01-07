'use strict';

function get_integer_interval_2(number_a, number_b) {
    //在这里写入代码
    var result = [];
    var collection_a = [2, 4, 6, 8, 10];
    var collection_b = [10, 8, 6, 4, 2];
    if (number_a < number_b) {
        result = collection_a;
    } else if (number_a > number_b) {
        result = collection_b;
    } else if (number_a == number_b && number_a % 2 === 0 && number_b % 2 === 0) {
        var arr = [number_a];
        result = arr;
    } else if (number_a === number_b && number_a % 2 != 0) {
        result = [];
    }
    return result;
}

module.exports = get_integer_interval_2;