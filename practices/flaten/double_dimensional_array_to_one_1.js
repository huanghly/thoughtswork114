'use strict';

function double_to_one(collection) {

    //在这里写入代码
    /**
     * /如果数组元素不包含字符“，”：
var a = [1,3,4,5,[6,7,9],[2],[5]];
a = a.join(",").split(",");


ar arr = [1,[2,[[3,4],5],6]];
function unid(arr){
        var arr1 = (arr + '').split(',');//将数组转字符串后再以逗号分隔转为数组
        var arr2 = arr1.map(function(x){
            return Number(x);
        });
        return arr2;
}
console.log(unid(arra));


法四：递归

var arr = [1,[2,[[3,4],5],6]];
var newArr = [];
    
function fun(arr){
        for(var i=0;i<arr.length;i++){
            if(Array.isArray(arr[i])){
                fun(arr[i]);
            }else{
                newArr.push(arr[i]);
            }
        }
    }
fun(arr);
console.log(newArr);//[1, 2, 3, 4, 5, 6]

function unidimensionalArray (arr) {
　　return (arr + '').split(',').map(x => Number(x));
}
 
     */
    var collection = [1, [2],
        [3, 4]
    ];
    var result = [];
    result = (collection + ' ').split(',').map(x => Number(x));

    return result;
}


module.exports = double_to_one;