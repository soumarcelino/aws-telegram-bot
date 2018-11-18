const git = require('simple-git');

const pull = () => {
    git().pull('origin', 'master')
}

module.exports = { pull }