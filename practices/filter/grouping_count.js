'use strict';

function grouping_count(collection) {

    //在这里写入代码

    /* function sortNumber(a, b) {
         collection = [ 1,1,1,1,1,1,2,2,2,3,3,3,3,4,4]
         return a - b;
     }*/
    var result = [];
    for (var i = 0; i < collection.length; i++) {
        if (result[collection[i]]) {
            result[collection[i]] += 1;
        } else {
            result[collection[i]] = 1;
        }
    }
    return result;
}

module.exports = grouping_count;