const fs = require('fs');

const data = 'cat\ndog\nrat\nCat\n  monkey\n cat\ndog\nlion';

fs.writeFile(__dirname + '/myfile.txt',data, function(err) {
    try {
       if (err) throw err; 
       console.log('data is written');
    }
    catch (err) {
        console.log('there was some error');
    }
})