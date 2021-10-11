const fs = require('fs');

fs.readFile(__dirname + '/myfile.txt', function(err,data) {
    try {
        if (err) {
            throw err;
        } else {
            const str = data.toString();
            const arr = str.split('\n');
            console.log(getFrequency(arr));
        }
    }
    catch (err) {
        console.log(err);
    }
});

function getFrequency(arr) {
    const map = {};
        arr.forEach(str => {
        const item = getItem(str);
        if(map[item]){
             map[item]++;
            }else{
                map[item] = 1;
            }
        });
    return map;
}

function getItem(str) {
    const s = str.toLowerCase();
    item = '';
    [...s].forEach((char) => {
        if(char !== ' ') {
            item += char;
        }
    });
    return item;
}