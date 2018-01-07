'use strict';

function compute_chain_median(collection) {
    //在这里写入代码
    /*  var ary = chain.split('->').sort(function(a, b) {
            return a - b;
        });
        var lowMiddle = Math.floor((ary.length - 1) / 2);
        var highMiddle = Math.ceil((ary.length - 1) / 2);
        let result = (Number(ary[lowMiddle]) + Number(ary[highMiddle])) / 2;
        return result;
    }
*/
    var chain = '1->4->6->2->3->10->9->8->11->20->19->30';
    collection = chain;

    var arr = [];
    arr = collection.split('->').sort(function(a, b) {
        return a - b; //对数组进行排序1,2,3,4,6,8,9,10,11,19,20,30
    });
    let middle = arr.length / 2;
    let mid = parseFloat(Number(arr[middle]) + Number(arr[middle - 1]));
    let result = parseFloat(mid / 2);
    //console.log(result)
    return result;


}

module.exports = compute_chain_median;