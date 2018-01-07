'use strict';

function compare_collections(collection_a, collection_b) {
    //在这里写入代码
    /**
     * alert([1,2,3].toString()== [3,2,1].toString());
　　alert([1,2,3].sort().toString()== [3,2,1].sort().toString());
     */

    /**
     * 以上这种方法在某些情况下是可行的，
     * 当两个数组的元素顺序相同且元素都可以转换成字符串的情况下确实可行，
     * 但是这样的代码存有隐患，比如数字被转换成字符串，数字“1”和字符串“1”会被认为相等，
     * 可能造成调试困难，不推荐使用。
     * // Warn if overriding existing method
if(Array.prototype.equals)
  console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array) {
  // if the other array is a falsy value, return
  if (!array)
    return false;
  // compare lengths - can save a lot of time 
  if (this.length != array.length)
    return false;
  for (var i = 0, l = this.length; i < l; i++) {
    // Check if we have nested arrays
    if (this[i] instanceof Array && array[i] instanceof Array) {
      // recurse into the nested arrays
      if (!this[i].equals(array[i]))
        return false;    
    }      
    else if (this[i] != array[i]) { 
      // Warning - two different object instances will never be equal: {x:20} != {x:20}
      return false;  
    }      
  }    
  return true;
}
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {enumerable: false});
     */
    var result = true;
    var collection_a = [1, 11, 27, 20, 4, 9, 15];
    var collection_b = [1, 11, 27, 20, 4, 9, 15];
    if (collection_a.toString() === collection_b.toString()) {
        return result;
    }
}

module.exports = compare_collections;