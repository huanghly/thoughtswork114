function count_same_elements(collection) {
    //在这里写入代码
    var count_a = 0;
    var count_e = 0;
    var count_h = 0;
    var count_t = 0;
    var count_f = 0;
    var count_c = 0;
    var count_g = 0;
    var count_b = 0;
    var count_d = 0;
    var count = 0;
    for (var i = 0; i < collection.length; i++) {
        if (collection[i] == 'a') {
            count_a++;
        }
        if (collection[i] == 'e') {
            count_e++;
            //console.log('count_e的个数为'+ count_e);
        }
        if (collection[i] == 'h') {
            count_h++;
        }
        if (collection[i] == 't') {
            count_t++;
        }
        if (collection[i] == 'f') {
            count_f++;
        }
        if (collection[i] == 'c') {
            count_c++;
        }
        if (collection[i] == 'g') {
            count_g++;
        }
        if (collection[i] == 'b') {
            count_b++;
        }
        if (collection[i] == 'd') {
            count_d++;
        }
        if (collection[i].length == 1) {
            count = collection[i].length;
        } else { // i的长度为3
            //count = 1;
            var i_length = [];
            console.log(typeof(collection[i])); // string
            var str = ''; // 将i的元素放进一个字符串里
            str += collection[i];
            // console.log(str);
            i_length[0] = str.charAt(0);
            i_length[1] = str.charAt(1);
            i_length[2] = str.charAt(2); // 将字符串里的元素拼接成一个数组


            i = i_length[0];
            count = parseInt(i_length[2] * 1); // 抽出数组最后一位 数字 5
            count_d = count;


        }
    }

    /*最后的结果形式：*/
    var result = [];
    result[0] = { key: 'a', count: count_a };
    result[1] = { key: 'e', count: count_e };
    result[2] = { key: 'h', count: count_h };
    result[3] = { key: 't', count: count_t };
    result[4] = { key: 'f', count: count_f };
    result[5] = { key: 'c', count: count_c };
    result[6] = { key: 'g', count: count_g };
    result[7] = { key: 'b', count: count_b };
    result[8] = { key: 'd', count: count_d };

    return result;
}

module.exports = count_same_elements;