'use strict';
var collection = [1, 11, 27, 20, 4, 9, 15, 4, 1, 11];
var element = 4;

function calculate_elements_sum(collection, element) {
    //在这里写入代码
    for (let i in collection) {
        if (element === collection[i]) {
            var result = i;
            break;
        }
    }
    return parseInt(result);
}
calculate_elements_sum(collection, element);

module.exports = calculate_elements_sum;