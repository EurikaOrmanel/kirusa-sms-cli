const inquirer = require('inquirer');
const { sendSMS } = require('./lib/sender');
const { query_for_new_login_details, query_for_existing_data } = require('./lib/query')
const { csvWriter }= require('./lib/csv-writer');
inquirer.prompt([{
    type: 'confirm',
    name: 'old',
    message: "Do you want to use the previous authentication detials?",
    default: false,
}
]).then(res => {
    if (res.old === true) {
        inquirer.prompt(query_for_existing_data).then(res => sendSMS(res.body, "[" + res.recievers.trim() + "]", res.priority))
    } else {
        inquirer.prompt(query_for_new_login_details).then(res => {
            var info = [{
                account_id: res.account_id,
                auth_key: res.auth_key
            }];
            sendSMS(res.body, "[" + res.recievers.trim() + "]", res.priority);
            csvWriter.writeRecords(info).then(() => {
                console.log('Previous auth details has been mutated');
            })
        });

    }
});
