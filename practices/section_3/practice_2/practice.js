function create_updated_collection(collection_a, object_b) {
    //在这里写入代码
    for (var i = 0; i < collection_a.length; i++) {
        //console.log(collectionA[i].count);
        for (var j = 0; j < object_b.value.length; j++) {
            if (collection_a[i].key == object_b.value[j]) {
                if (collection_a[i].count < 3) {
                    //console.log(parseInt(collectionA[i].count));
                } else if (collection_a[i].count < 6) {
                    collection_a[i].count = parseInt(collection_a[i].count - 1);
                    //console.log(collectionA[i].count);
                } else if (collection_a[i].count < 9) {
                    collection_a[i].count = parseInt(collection_a[i].count - 2);
                    //console.log(collectionA[i].count);
                } else if (collection_a[i].count >= 9) {
                    collection_a[i].count = parseInt(collection_a[i].count - 3);
                    //console.log(collectionA[i].count);
                }
            }
        }
        //console.log(collectionA[i].count);
    }
    return collection_a;
}

module.exports = create_updated_collection;