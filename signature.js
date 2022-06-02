const Config = require('./config');
const Crypto = require('crypto');

module.exports = function (params) {
    const object = {
        ...params,
        accesskey: Config.ACCESSKEY,
        nonce: Date.now(),
    }

    const tempArray = [];
    for(let va in object){
        tempArray.push(va + '=' + object[va]);   
    }
    tempArray.sort();
    
    const stringTempArray = tempArray.join('&');
    const hmac = Crypto.createHmac('sha256', Config.SECRETKEY);

    //console.log(stringTempArray);
    const signature = hmac.update(stringTempArray).digest('hex');
    object.signature = signature;

    return object;
}