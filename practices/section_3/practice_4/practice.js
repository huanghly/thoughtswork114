function create_updated_collection(collection_a, object_b) {
    //在这里写入代码
    var result = [];
    var n = 0;
    var count = 1;

    for (var i = 0; i < collection_a.length; i++) {
        if (collection_a[i].length > 1) {
            result[n] = { key: collection_a[i].slice(0, 1), count: Number(collection_a[i].slice(-1)) };
            n++;
        } else { // collectionA[i].length = 1;
            while (collection_a[i] === collection_a[i + 1]) {
                count++;
                i++;
            }
            result[n] = { key: collection_a[i], count: count };
            n++;
        }
        count = 1;
    }
    for (var i = 0; i < object_b.value.length; i++) {
        for (var j = 0; j < result.length; j++) {
            if (result[j].key === object_b.value[i]) {
                var k = parseInt(result[j].count / 3);
                result[j].count = result[j].count - k;
            }
        }
    }
    // console.log(result);
    return result;
}

module.exports = create_updated_collection;