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
        const url =  Config.URL + '/api/test/signature?' + qs.stringify(body);

        fetch(url)
        .then(res => res.json())
        .then(text => {
            console.log(text)
            res.send(text);
        });
    });

    app.post('/api/order/create', (req, res) => {
        const { usd, coin } = req.body;
        const body = Signature({ usd, coin });
        console.log(body);

        const url =  Config.URL + '/api/receive/order/create';

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            },
            json: true
        })
        .then(res => res.json())
        .then(text => {
            console.log(text)
            res.send(text);
        });
    });
}