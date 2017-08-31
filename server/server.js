let express = require('express');

let app = express();
let path = require('path');

let PORT = process.env.port || 3000;

app.use('/static', express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, './index.html'));
});

app.listen(PORT, function () {
    console.log('Im here -> 127.0.0.1:' + PORT);
});