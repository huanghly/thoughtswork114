'use strict';
var collection = [1, 2, 3, 4, 5];

function calculate_elements_sum(collection) {
    //在这里写入代码
    let result = 0;
    /*  for (let i in collection) {
          result += collection[i];

      }*/
    /* 比如， 有一个数组var arr = [1, 2, 3, 4, 5];
     现在要求这个数组每项的累加值， 这个时候就可以使用reduce方法了。
     var sum = arr.reduce((o, p) => o + p);
     (这里用到了es6中的箭头函数)*/
    result = collection.reduce((a, b) => a + b);
    return result;
}

module.exports = calculate_elements_sum;