const colors = require('colors');
const Objects = require("./util/Objects");

module.exports = function (cmd, parameters, task) {
    const spawn = require('child_process').spawn;

    var options = task.env ? (task.env.options || {}) : {};
    if (process.env.options) {
        options = Objects.merge(JSON.parse(process.env.options), options);
    }

    var processEnv = Object.create(process.env);
    processEnv.options = JSON.stringify(options);
    if (task.stdio && task.stdio === 'inherit') {
        spawn(cmd, parameters, {
            env: processEnv
        });
        return;
    }
    const command = spawn(cmd, parameters, {
        env: processEnv
    });
    task.tag = task.tag || task.command;
    command.stdout.on('data', function (data) {
        var dataStr = data.toString();
        if (dataStr.indexOf("error TS") !== -1) {
            dataStr = dataStr.red;
        }
        console.log(task.tag[task.pColor] + " : " + dataStr);
    });
    command.stderr.on('data', function (data) {
        console.error(task.tag[task.pColor] + ": " + data.toString().red);
    });
    command.on('close', function (code) {
        console.log(task.tag[task.pColor] + ": child process exited with code  " + code);
        if (task.main) {
            process.exit(code);
        }
    });
};