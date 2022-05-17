const Request = require('request');
const qs = require('qs');
const Config = require('./config');
const Signature = require('./signature');

module.exports = function(app) {
    app.get('/api/test', (req, res) => {
        
        Request({
            url: Config.URL + '/api/test',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            json: true,
        }, function (error, response, body) {
            console.log(body);
            res.send(body);
        });
    });

    app.get('/api/signature', (req, res) => {
        const body = Signature(req.query);
        console.log(body);
        // console.log( Config.URL + '/api/test/signature?' + qs.stringify(body));

        Request({
            url: Config.URL + '/api/test/signature?' + qs.stringify(body),
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            json: true,
        }, function (error, response, body) {
            res.send({ d: body });
            console.log(body);
        });
    });
}