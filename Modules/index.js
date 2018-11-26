const Update = require('./Update')
const Start = require('./Start')
const Cmd = require('./Cmd')
const Deploy = require('./Deploy')

const Gateway = require('./Gateway')

const gateway = new Gateway([
    Update,
    Start,
    Cmd,
    Deploy
])

module.exports = {gateway}