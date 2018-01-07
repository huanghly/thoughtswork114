'use strict';

function choose_common_elements(collection_a, collection_b) {

    //在这里写入代码
    var collection_a = ["a", "e", "h", "t", "f", "c", "g", "b", "d"];
    var collection_b = ["a", "d", "e", "f"];

    var result = [];
    var n = 0;
    for (var i in collection_a) {
        for (var j in collection_b) {
            if (collection_a[i] === collection_b[j]) {
                result[n] = (collection_a[i]);
                n++;
            }
        }
    }
    return result;

}

module.exports = choose_common_elements;