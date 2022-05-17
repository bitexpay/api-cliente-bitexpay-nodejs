const Request = require('request');
const qs = require('qs');
const Config = require('./config');
const Signature = require('./signature');

const fetch = require('node-fetch');

module.exports = function(app) {
    app.get('/api/test', (req, res) => {
        const url =  Config.URL + '/api/test';
        console.log(url);

        fetch(url)
        .then(res => res.json())
        .then(text => {
            console.log(text)
            res.send(text);
        });
    });

    app.get('/api/signature', (req, res) => {
        const body = Signature(req.query);
        const url =  Config.URL + '/api/test/signature?' + qs.stringify(body)
        console.log("firma", body.signature);

        fetch(url)
        .then(res => res.json())
        .then(text => {
            console.log(text)
            res.send(text);
        });
    });
}