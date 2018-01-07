'use strict';

function collect_max_number(collection) {
    //在这里写入代码
    var collection = [1, 2, 3, 4, 5];
    /*   window.onload = function() {
           var a = [1, 2, 3, 4, 5];
           var sum = a.reduce(function(x, y) {
               return x > y ? x : y
           });
           console.log(sum); //返回5
       }*/
    let result = collection.reduce(function(x, y) {
        return x > y ? x : y;
    });
    return result;
    /* var a = [1, 2, 3, 5];
     alert(Math.max.apply(null, a)); //最大值
     alert(Math.min.apply(null, a)); //最小值
    let result = Math.max.apply(null, collection);
    return result;*/
}

module.exports = collect_max_number;