const path = require('path');

module.exports = {
    entry: './Homework03/script.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'Homework15/webpack-hw'),
    },
};