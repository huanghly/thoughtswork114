'use strict';

function collect_last_element(collection) {
    //在这里写入代码
    for (var i = 0; i < collection.length; i++) {

        var result = collection[collection.length - 1];
    }
    return result;
}

module.exports = collect_last_element;