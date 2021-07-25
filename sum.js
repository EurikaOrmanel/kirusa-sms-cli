const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'list',
            name: 'reptiles',
            message: 'Which reptiles do you love?',
            choices: [
                'Alligators', 'Snakes', 'Turtles', 'Lizards',
            ],
        },
    ])
    .then(answers => {
        console.info('Answer:', answers.reptiles);
    });