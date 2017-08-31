var express = require('express');
var app = express();

var PORT = process.env.port || 3000;

app.get('/', function (req, res) {
    res.send({message: 'Hooray! welcome to sweet-react!'});
});

app.listen(PORT, function () {
    console.log('Im here -> 127.0.0.1:' + PORT);
});

function fetchPosts() {
    Axios.defaults.headers['user-token'] = 'EA4323C2-42FF-3D68-FF03-FFB0EB110E00';
    Axios.defaults.headers['Content-Type'] = 'application/json';
    var url = 'https://api.backendless.com/2D7E4E23-B24F-3D66-FF0C-D44240473800/89E9EF38-4160-3FF5-FFD5-6CD6CD1B9B00/data/Post';
    Axios.get(url)
        .then(function (response) {
        })
        .catch(function (error) {
            console.log(error);
        });
}