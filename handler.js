const middy = require('middy');
const {ssm} = require('middy/middlewares');
const config = require("./ssm.config.js");

const handler = async event => {
    let data = {};
    for (let i = 1; i <= 11; i++) {
        let key = "P" + i;
        data[key] = process.env["ENV_" + key];
    }
    const resp = {
        "statusCode": 200,
        "body": JSON.stringify(data),
        "isBase64Encoded": false
    };
    return resp;
};

module.exports.handler = middy(handler).use(ssm(config));
