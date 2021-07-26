const query_for_new_login_details = [
    {
        type: 'input',
        name: 'account_id',
        message: 'Please input your account ID provided by Kirusa here:'
    },
    {
        type: 'password',
        name: 'auth_key',
        message: 'Please input your auth_key provided by Kirusa here:'
    },
    {
        type: 'input',
        name: 'body',
        message: 'Compose sms here:'
    },
    {
        type: 'input',
        message: 'Phone number of sms recievers: \n (leave comma (,) after every each phone number)',
        name: 'recievers',
    },
    {
        name: 'priority',
        type: 'list',
        message: 'SmS Priority(default set to normal):',
        default: 'normal',
        choices: ['high', 'normal']
    }
];
const query_for_existing_data = [{
    type: 'input',
    name: 'body',
    message: 'Compose sms here:'
},
{
    type: 'input',
    message: 'Phone number of sms recievers: \n (leave comma (,) after every each phone number)',
    name: 'recievers',
},
{
    name: 'priority',
    type: 'list',
    message: 'SmS Priority(default set to normal):',
    default: 'normal',
    choices: ['high', 'normal']
}];
 


module.exports = {
    query_for_new_login_details: query_for_new_login_details,
    query_for_existing_data: query_for_existing_data
}