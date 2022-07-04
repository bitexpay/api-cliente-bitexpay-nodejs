const qs = require('qs');
const Config = require('./config');
const Signature = require('./signature');

const fetch = require('node-fetch');

module.exports = function(app) {

    //Crear una orden básica
    app.post('/api/order/create', (req, res) => {

        const { usd, coin, tipo, monetizar, enviarCorreo } = req.body;
        const body = Signature({ usd, coin, tipo, monetizar, enviarCorreo });
        console.log(body);

        const url =  Config.URL + '/api/receive/order/create';

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
            json: true
        })
        .then(res => res.json())
        .then(text => {
            console.log(text)
            res.send(text);
        });
    });

    //Crear una orden completa
    app.post('/api/order/create/full', (req, res) => {

        const { usd, coin, tipo, monetizar, descripcion, tipo_fee_monetizar, correo, enviarCorreo } = req.body;
        const body = Signature({ usd, coin, tipo, monetizar, descripcion, tipo_fee_monetizar, correo, enviarCorreo });
        console.log(body);

        const url =  Config.URL + '/api/v1/receive/order/create';

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

    //Cancelar una orden
    app.delete('/api/order/cancel', (req, res) => {

        const { id } = req.body;
        const body = Signature({ id });

        const url = Config.URL + '/api/v1/receive/order/cancel'; 
        console.log(body);
        
        fetch(url, {
            method: 'DELETE',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(text => { 
            console.log(text);
            res.send(text);
        });
    });

    //Obtener informacion de una orden del un usuario
    app.get('/api/order/get', (req, res) => {
        const body = Signature(req.query);
        const url =  Config.URL + '/api/v1/receive/order/get?' + qs.stringify(body);

        fetch(url, {
        })
        .then(res => res.json())
        .then(text => {
            console.log(text)
            res.send(text);
        });
    });
 
    //Obtener ordenes por estado de un usuario
    app.get('/api/order/status', (req, res) => {

        const body = Signature(req.query);
        const url =  Config.URL + '/api/v1/receive/order/status?' + qs.stringify(body);

        fetch(url, {
        })
        .then(res => res.json())
        .then(text => {
            console.log(text)
            res.send(text);
        });
    });

    //Obtener las ordenes publicas para
    app.get('/api/order/public', (req, res) => {
        const body = Signature(req.query);
        const url =  Config.URL + '/api/v1/receive/order/public?' + qs.stringify(body);

        fetch(url, {
        })
        .then(res => res.json())
        .then(text => {
            console.log(text)
            res.send(text);
        });
    });

    //Pagar una orden 
    app.put('/api/order/pay', (req, res) => {
        
        const { coin, codeBitexpay, amount } = req.body;
        const body = Signature({ codeBitexpay, coin, amount });

        const url = Config.URL + '/api/v1/receive/order/pay'; 
        console.log(body);

        fetch(url, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify(body)
        })
        .then(res => res.json())
        .then(text => {
            console.log(text);
            res.send(text);
        });
    });

    app.get('/api/my/balance',(req, res) => {
        
        const body = Signature(req.query);
        const url =  Config.URL + '/api/v1/receive/my/balance?' + qs.stringify(body);

        fetch(url, {
        })
        .then(res => res.json())
        .then(text => {
            console.log(text)
            res.send(text);
        });
    });
}