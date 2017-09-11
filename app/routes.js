var path = require('path');
var publicDir = path.join(__dirname, 'public');

module.exports = function(app) {

        // server routes ===========================================================
        // handle things like api calls
        // authentication routes


        // frontend routes =========================================================
        // route to handle all angular requests
        app.get('/', function(req, res) {
            res.sendFile(path.join(publicDir, './index.html')); // load our public/index.html file
        });
        app.get('/education', function(req, res) {
            res.sendFile(path.join(publicDir, './pages/education.html')); // load our public/index.html file
        });
        app.get('/politics', function(req, res) {
            res.sendFile(path.join(publicDir, './pages/politics.html')); // load our public/index.html file
        });
        app.get('/health', function(req, res) {
            res.sendFile(path.join(publicDir, './pages/health.html')); // load our public/index.html file
        });
        app.get('/filmtv', function(req, res) {
            res.sendFile(path.join(publicDir, './pages/filmTv.html')); // load our public/index.html file
        });
        app.get('/sport', function(req, res) {
            res.sendFile(path.join(publicDir, './pages/sport.html')); // load our public/index.html file
        });
        app.get('/*', function(req, res) {
            res.sendFile(path.join(publicDir, './index.html')); // load our public/index.html file
        });
    };
