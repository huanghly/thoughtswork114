'use strict';

function collect_all_even(collection) {
    var result = [];
    for (var i = 0; i < collection.length; i++) {
        if (collection[i] % 2 === 0) {
            //console.log(collection[i]);
            result.push(collection[i]);
        }
    }
    return result;
    //在这里写入代码
}

module.exports = collect_all_even;
/*jasmine node_modules / jasmine - node / lib / jasmine - 1.3 .1.js specs / collect
ionOperator / collect_all_even_spec.js  */