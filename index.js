const execSync = require('child_process').execSync
module.exports = (url) => execSync('curl ' + url).toString()