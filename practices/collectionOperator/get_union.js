'use strict';

function get_union(collection_a, collection_b) {
    //在这里写入代码

    /* var arr1 = [];
     var arr1 = ['a', 'b'];
     var arr2 = ['a', 'c', 'd'];
     var arr3 = [1, 'd', undefined, true, null];

     //合并两个数组，去重  
     var concat_ = function(arr1, arr2) {
         //不要直接使用var arr = arr1，这样arr只是arr1的一个引用，两者的修改会互相影响  
         var arr = arr1.concat();
         //或者使用slice()复制，var arr = arr1.slice(0)  
         for (var i = 0; i < arr2.length; i++) {
             arr.indexOf(arr2[i]) === -1 ? arr.push(arr2[i]) : 0;
         }
         return arr;
     }*/
    /**方法三： es6中set函数：Set对象可以用来给数组去重，
     * Set也能用来保存NaN和undefined， 如果有重复的NaN，
     Set会认为就一个NaN(实际上NaN != NaN）




     *
     let set = new Set([1, 2, 3, 4, 4, 4, 4, 4]);
     console.log(Array.from(set)); //输出：[ 1, 2, 3, 4 ]

     */
    var result = [];
    let set = new Set(collection_a.concat(collection_b));
    result = Array.from(set);
    return result;

}
module.exports = get_union;