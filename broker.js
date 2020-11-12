const request = require("request");

module.exports = async function getLastPrice() {
    const options = {
        url: "https://blockchain.info/tobtc?currency=USD&value=1",
        method: 'GET',
    };

    return new Promise(function (resolve, reject) {
        request.get(options, function (err, resp, body) {
            if (err) {
                reject(err);
            } else {
                resolve(convertToPrice(body));
            }
        })
    })
}

function convertToPrice(value) {
    return 1/value;
}