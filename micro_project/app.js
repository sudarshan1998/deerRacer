const https = require('https'); 

const token ='b4abb71802c71b';

const url = 'https://us1.locationiq.com/v1/search.php?key=' + token + '&q=Empire%20State%20Building&format=json'


https.get(url, (res) => {
    // let data = '';

    res.on('data', (chunk) => {
        // data += chunk;
        console.log(chunk.toString());
    });

    res.on('end', () => {
        // console.log(JSON.parse(data));
    });
});
