const unirest = require('unirest');
const { results } = require('./data')
module.exports.sendSMS = (body, recievers, priority) => {
    unirest.post(`https://konnect.dotgo.com/api/v1/Accounts/${results[0].account_id}/Messages`)
        .headers({ 'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': results[0].auth_key })
        .send({ "id": results[0].account_id, "to": recievers, "body": body, "callback_url": "http://myapp.com/notify", "priority": priority })
        .then(res => {
            console.log(res.body);
        });
}