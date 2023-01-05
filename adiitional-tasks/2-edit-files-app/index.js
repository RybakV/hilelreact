const fs = require('fs');

let database = fs.readFileSync('database.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
    }
    return;
});

fs.writeFile('output.txt', database, err => {
    if (err) {
        console.error(err);
    }
    console.log('File ' + file + ' written successfully');
});
