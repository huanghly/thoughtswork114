function create_updated_collection(collection_a, object_b) {
    //在这里写入代码

    for (var i = 0; i < collection_a.length; i++) {

        for (var j = 0; j < object_b.value.length; j++) {

            if (collection_a[i].key == object_b.value[j]) {
                // result_like[n] = collectionA[i].key;
                //n++; //获得数组result_like = [a,e,f,d]
                collection_a[i].count = collection_a[i].count - 1; //有相同元素后count-1
                // console.log('collectionA[i].count的值为：' + collectionA[i].count);

            }
        }

    }

    return collection_a;
}

module.exports = create_updated_collection;