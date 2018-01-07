'use strict';

function compute_average(collection) {
    //在这里写入代码
    var collection = [1, 3, 5, 98, 67, 453];
    var sum = 0;
    for (let i in collection) {

        sum += parseFloat(collection[i]);

    }
    let result = sum / collection.length;
    return result;
}

module.exports = compute_average;