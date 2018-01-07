'use strict';

function rank_by_two_large_one_small(collection) {
    //这里写代码。。。

    /**
     *
     var collection = [2, 8, 1, 9, 6, 4, 3, 10];
     collection.sort(function (a, b) {
       return a - b;
     });
     console.log(collection);
     var a = collection.splice(0, 1);
     console.log('a: ' + a);
     collection.splice(2, 0, a);
     console.log(collection);
     var b = collection.splice(3, 1);
     collection.splice(5, 0, b);
     console.log(collection);
     var result = [];
     result = collection;
     console.log(result);

     */
    var collection = [2, 8, 1, 9, 6, 4, 3, 10];
    collection.sort(function(a, b) {
        return a - b;
    });
    /*var a = collection.splice(0, 1);
    // console.log('a: ' + a);
    collection.splice(2, 0, a);
    var b = collection.splice(3, 1);
    collection.splice(5, 0, b);
    // console.log(collection);
    var result = [];
    result = collection;
    return result;
    //  console.log(result);
    collection.sort(function(a, b) {
        return a - b;

    });
*/
    for (var i = 0; i < collection.length; i++) {
        if ((i + 1) % 3 === 0) {
            var a = collection[i - 2];
            collection[i - 2] = collection[i - 1];
            collection[i - 1] = collection[i];
            collection[i] = a;
        }
    }
    return collection;


}
module.exports = rank_by_two_large_one_small;