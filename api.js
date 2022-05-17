const Request = require('request');
const qs = require('qs');
const Config = require('./config');
const Signature = require('./signature');

import fetch from 'node-fetch';

module.exports = function(app) {
    app.get('/api/test', (req, res) => {
        const url =  Config.URL + '/api/test';
        console.log(url);

        fetch(url)
        .then(res => res.text())
        .then(text => console.log(text));
    });

    app.get('/api/signature', (req, res) => {
        const body = Signature(req.query);
        const url =  Config.URL + '/api/test/signature?' + qs.stringify(body)

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