'use strict';

function double_to_one(collection) {

    //在这里写入代码
    var collection = [
        [1, 2, 3],
        [5, 2, 1, 4],
        [2, 1]
    ];
    //return (arr + '').split(',').map(x => Number(x));;
    var result = [];
    var arr = [];
    arr = (collection + ' ').split(',').map(x => Number(x));
    // arr.sort(); //1,1,1,2,2,2,3,4,5
    for (let i in arr) {
        if (result.indexOf(arr[i]) == -1) {
            result.push(arr[i]);
        }
    }
    return result;
}

module.exports = double_to_one;