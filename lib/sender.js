const unirest = require('unirest');
const Configstore = require('configstore');
const pkg = require('./../package.json');
const conf = new Configstore(pkg.name);
module.exports.sendSMS = (body, recievers, priority) => {
    var account_id = conf.get('account_id');
    var auth_key = conf.get('auth_key');
    unirest.post(`https://konnect.dotgo.com/api/v1/Accounts/${account_id}/Messages`)
        .headers({ 'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': conf.get('details.auth_key') })
        .send({ "id": results[0].account_id, "to": recievers, "body": body, "callback_url": "http://myapp.com/notify", "priority": priority })
        .then(res => {
            console.log(res.body);
        });
}