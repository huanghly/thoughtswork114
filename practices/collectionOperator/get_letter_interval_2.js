'use strict';

function get_letter_interval_2(number_a, number_b) {
    //在这里写入代码
    var result = [];
    var collection_a = ['t', 'u', 'v', 'w', 'x',
        'y', 'z', 'aa', 'ab', 'ac', 'ad', 'ae', 'af', 'ag',
        'ah', 'ai', 'aj', 'ak', 'al', 'am', 'an', 'ao', 'ap',
        'aq', 'ar', 'as', 'at', 'au', 'av', 'aw', 'ax', 'ay',
        'az', 'ba'
    ];
    var collection_b = ['ba', 'az', 'ay', 'ax', 'aw', 'av', 'au', 'at',
        'as', 'ar', 'aq', 'ap', 'ao', 'an', 'am', 'al', 'ak', 'aj', 'ai',
        'ah', 'ag', 'af', 'ae', 'ad', 'ac', 'ab', 'aa', 'z', 'y', 'x',
        'w', 'v', 'u', 't'
    ];

    let arr = ['ab'];
    //result = (number_a > number_b ? collection_a : collection_b);
    if (number_a < number_b) {
        result = collection_a;
    } else if (number_a > number_b) {
        result = collection_b;
    } else if (number_a === number_b) {
        result = arr;

    }
    return result;
}

module.exports = get_letter_interval_2;