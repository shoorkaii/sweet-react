var express = require('express');
var bodyParser = require('body-parser');
var Axios = require('axios');

var app = express();
app.use(bodyParser.urlencoded({extend: true}));
app.use(bodyParser.json());

var PORT = process.env.port || 3000;

var router = express.Router();

router.get('/', function (req, res) {
    res.send({message: 'Hooray! welcome to sweet-react!'});
});

router.route('/posts')
    .get(function (req, res) {
        fetchPosts();
    });

app.use('/api', router);

app.listen(PORT, function () {
    console.log('Im here -> 127.0.0.1:' + PORT);
});

function fetchPosts() {
    Axios.defaults.headers['user-token'] = 'EA4323C2-42FF-3D68-FF03-FFB0EB110E00';
    Axios.defaults.headers['Content-Type'] = 'application/json';
    var url = 'https://api.backendless.com/2D7E4E23-B24F-3D66-FF0C-D44240473800/89E9EF38-4160-3FF5-FFD5-6CD6CD1B9B00/data/Post';
    Axios.get(url)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}