'use strict';
var collection_a = [1, 1, 1, 2, 3];
var collection_b = [1, 1, 2, 3];
var collection_c = [1, 4, 6, 2, 3, 10, 9, 8, 11, 20, 19, 30];
var result = 0;

function compute_median(collection) {
    //在这里写入代码
    collection = collection.sort(function(a, b) {
        return a - b;
    });
    if (collection.length % 2 != 0) {
        let m = Math.floor(collection_a.length / 2);
        result = collection[m];
    } else if (collection.length % 2 === 0) {
        let mb = Math.floor(collection.length / 2);
        result = (collection[mb] + collection[mb - 1]) / 2;
    }
    return result;
}
compute_median(collection_a);
compute_median(collection_b);
compute_median(collection_c);
module.exports = compute_median;