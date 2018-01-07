function collect_same_elements(collection_a, object_b) {
    //在这里写入代var result = [];
    result = [];
    var n = 0;
    for (var i = 0; i < collection_a.length; i++) {

        for (var j = 0; j < object_b.value.length; j++) {
            if (object_b.value[j] == collection_a[i]) {
                result[n] = object_b.value[j];
                n++;
            }
        }
    }
    return result;
}

module.exports = collect_same_elements;