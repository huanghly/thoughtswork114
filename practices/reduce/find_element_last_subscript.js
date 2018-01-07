'use strict';

function calculate_elements_sum(collection, element) {
    //在这里写入代码
    for (let i in collection) {
        if (element === collection[i]) {
            var arr = [];
            arr.push(i);
            var result = arr[arr.length - 1];
        }
    }
    return parseInt(result);
}

module.exports = calculate_elements_sum;