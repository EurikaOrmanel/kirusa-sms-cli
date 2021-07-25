const createCsVWriter = require('csv-writer').createObjectCsvWriter;

module.exports.csvWriter = createCsVWriter({
    path: 'auth.csv',
    header: [
        { id: 'auth_key', title: 'auth_key' },
        { id: 'account_id', title: 'account_id' }
    ]
});