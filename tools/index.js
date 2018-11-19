const Update = require('./Update')
const Start = require('./Start')

const Gateway = require('./Gateway')

const gateway = new Gateway([
    Update,
    Start
])

module.exports = {gateway}