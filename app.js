#!/usr/bin/env node
'use strict';
const inquirer = require('inquirer');
const { sendSMS } = require('./lib/sender');
const { query_for_new_login_details, query_for_existing_data } = require('./lib/query');
const Configstore = require('configstore');
const pkg = require('./package.json');
const conf = new Configstore(pkg.name);

if (conf.has('auth_key') == true && conf.has('auth_id')) {
    inquirer.prompt([{
        type: 'confirm',
        name: 'old',
        message: "Do you want to use the previous authentication details?",
        default: false,
    }]).then(res => {
        if (res.old === true) {
            inquirer.prompt(query_for_existing_data).then(res => sendSMS(res.body, "[" + res.recievers.trim() + "]", res.priority));
        } else {
            inquirer.prompt(query_for_new_login_details).then(res => {
                conf.set('account_id', res.account_id);
                conf.set('auth_key', res.auth_key);
                sendSMS(res.body, "[" + res.recievers.trim() + "]", res.priority);
            });

        }
    });
} else {
    inquirer.prompt([query_for_new_login_details[0], query_for_new_login_details[1]]).then(res => {
        conf.set('account_id', res.account_id);
        conf.set('auth_key', res.auth_key);
    });
}
