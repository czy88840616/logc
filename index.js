var colors = require('colors');

module.exports = {
    info: function(message, args) {
        console.log('[info] '.cyan.bold +  message, args || '');
    },
    warn: function(message, args) {
        console.log('[warn] '.yellow.bold + message, args|| '');
    },
    debug: function(message, args) {
        console.log('[debug] '.grey.bold + message, args || '');
    },

    error: function(message, args) {
        console.log('[error] '.red.bold + message, args ||'');
    }
}