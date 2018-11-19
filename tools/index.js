const Update = require('./Update')
const Start = require('./Start')
const Cmd = require('./Cmd')

const Gateway = require('./Gateway')

const gateway = new Gateway([
    Update,
    Start,
    Cmd
])

module.exports = {gateway}