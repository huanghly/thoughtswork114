'use strict';

function get_intersection(collection_a, collection_b) {
    //在这里写入代码



    /**var a=[1,2,3,4,5];
var b=[2,3,4,5];
var astr=a.toString();// 为 1,2,3,4,5
var bstr=b.toString();//为 2,3,4,5
var samearr=[];
for(var i=0;i<a.length;i++)
{
    if(b.indexOf(a[i])>-1)
    {
       samearr.push(a[i]);
    }
}
console.log(samearr); 
function arrayIntersection ( a, b )
{
    var ai=0, bi=0;
    var result = new Array();
    while ( ai < a.length && bi < b.length )
    {
        if      ( a[ai] < b[bi] ) { ai++; }
        else if ( a[ai] > b[bi] ) { bi++; }
        else   //they're equal 
    {
        result.push(a[ai]);
        ai++;
        bi++;
    }
}
return result;
}
console.log(arrayIntersection([1, 2, 3], [2, 3, 4, 5, 6])); //[2,3]
*/
    var result = [];

    for (var i = 0; i < collection_b.length; i++) {
        for (var j = 0; j < collection_a.length; j++) {
            if (collection_a[j] === collection_b[i]) {
                result.push(collection_b[i]);
            }
        }
    }
    return result;
}

module.exports = get_intersection;