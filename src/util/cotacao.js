const request = require('request')
const api_token = 'jKL7PbfqE429bRqtwsCRA6mgPx1Kc5YfZA8HKXJfNshXbuI5u8vogOJLY4A6';

const cotacao = (symbol, callback) => {

   const url = `https://api.worldtradingdata.com/api/v1/stock?symbol=${symbol}&api_token=${api_token}`;

  request({url: url, json: true}, (err, response) =>{

        if (err){
            callback({
                    message: `Algo deu errado.`,
                    code: 500
                }, undefined);
        }
        else if (response.body === undefined || response.body.data === undefined){
            callback({
                message: `Dados não encontrados.`,
                code: 404
            }, undefined);
        }
        else
        {
            const parsedJSON = response.body.data[0];
            const {symbol, price_open, price, day_high, day_low, name} = parsedJSON;
            // const data = {symbol, price_open, price, day_high, day_low};

            callback(undefined, {symbol, price_open, price, day_high, day_low, name});
        }
  })

}

module.exports = cotacao;