module.exports = function(app) {

        // server routes ===========================================================
        // handle things like api calls
        // authentication routes


        // frontend routes =========================================================
        // route to handle all angular requests
        app.get('*', function(req, res) {
            res.sendfile('./app/index.html'); // load our public/index.html file
        });

    };

