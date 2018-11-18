const Update = require('./Update')

const Gateway = require('./Gateway')

const gateway = new Gateway([
    Update
])

module.exports = {gateway}