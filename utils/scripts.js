var spawn = require('child_process').spawn


const npm = function ( cmd ){

    return new Promise(function (resolve, reject) {
        var child = spawn('npm', [
            'run',
            cmd
        ]);
        
        child.stdout.on('data', function (data) {
            resolve(data)
        });
        
        child.stderr.on('data', function (data) {
            reject(data);
        });
        
        child.on('exit', function (data) {
            resolve(data)
        });
    })
}


module.exports = { npm }