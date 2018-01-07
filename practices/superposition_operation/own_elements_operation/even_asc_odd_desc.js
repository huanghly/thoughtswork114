'use strict';
var even_asc_odd_desc = function(collection) {
    var arr_even = [];
    var arr_odd = [];
    var result = [];

    for (let i in collection) {
        if (collection[i] % 2 === 0) {
            arr_even.push(collection[i]);
        } else {
            arr_odd.push(collection[i]);
        }
    }
    arr_even = arr_even.sort(function(a, b) {
        return a - b;
    });
    arr_odd = arr_odd.sort(function(a, b) {
        return a - b;
    });
    let arr = arr_odd.reverse();
    result = arr_even.concat(arr);
    return result;
};
module.exports = even_asc_odd_desc