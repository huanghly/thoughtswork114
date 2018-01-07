'use strict';

function choose_no_common_elements(collection_a, collection_b) {

    //在这里写入代码
    var result = [];
    var n = 0;

    var collection_a = ["a", "e", "h", "t", "f", "c", "g", "b", "d"];
    var collection_b = ["a", "d", "e", "f"];
    /*
    var arr = ["关羽","woi","赵子龙","马zi超","黄忠"];  
var arr1= arr.filter(function(ele,index,array){  
    if(ele.length>2){  
        return true;  
    }  
    return false;  
})  
console.log(arr);  
console.log(arr1);  


    arr1 = [1, 12, 6, 2, 4, 556, 77, 89, 9];
    arr2 = [12, 12, 3, 4, 5, 6, 7, 87];

    var merge = arr1.concat(arr2).filter(function(v, i, arr) {
       return arr.indexOf(v) == arr.lastIndexOf(v); 
      });

    console.log(merge);
    */
    result = collection_a.concat(collection_b).filter(function(collection_b, i, collection_a) {
        return collection_a.indexOf(collection_b) === collection_a.lastIndexOf(collection_b);
    });
    /* for (var i = 0; i < collection_a.length; i++) {
         for (var j = 0; j < collection_b.length; j++) {
             if (collection_a[i] != collection_b[j]) {
                 result[n] = collection_a[i];
                 i++;
                 n++;
             }
         }

     }*/
    return result;
}

module.exports = choose_no_common_elements;