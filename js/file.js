const fs = require('fs');

fs.writeFile('greating.txt', 'Hello Bhargavi, have a nice day', err => {
    if (err) {

    console.log('Error occured');
    }
});