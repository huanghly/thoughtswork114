function create_updated_collection(collection_a, object_b) {
    //在这里写入代码
    var count = 1;
    let object = {}; // {} 表示对象
    let result = [];

    for (var i = 1; i < collection_a.length; i++) {
        while (collection_a[i] === collection_a[i - 1]) { //当前面一位与后一位元素相同时，
            count++;
            i++;
        }
        object.key = collection_a[i - 1]; // 获得collectionA数组中的元素及个数，以[key:a,count:3]形式显示
        object.count = count;
        // console.log(object);
        result.push(object);
        count = 1;
        object = {};

    }
    for (var j = 0; j < object_b.value.length; j++) {
        for (var k = 0; k < result.length; k++) {
            if (result[k].key === object_b.value[j]) {
                var n = parseInt(result[k].count / 3);
                result[k].count = result[k].count - n;
            }
        }
    }
    // console.log(result);
    return result;
}

module.exports = create_updated_collection;