const PackageUtil = require("./PackageUtil");
const Spawn = require("./Spawn");

const colors = [
    "black",
    "red",
    "green",
    "yellow",
    "blue",
    "magenta",
    "cyan",
    "white",
    "gray",
    "grey"
];

function getRandomColor() {
    const min = Math.ceil(0);
    const max = Math.floor(colors.length - 1);
    const rand = Math.floor(Math.random() * (max - min)) + min;
    return colors[rand];
}

const spawn = function (task, taskConf) {
        if (task.interval) {
            setTimeout(function () {
                    Spawn(taskConf.command,
                        taskConf.parameters,
                        task
                    )
                    ;
                },
                task.interval
            )
            ;
        } else {
            Spawn(
                taskConf.command,
                taskConf.parameters,
                task
            )
        }
    }
;

const PipeTasks = function (tasks) {
    const spawns = [];
    for (var i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        const taskConf = PackageUtil.getSpawnParameters(task.command);
        task.pColor = task.pColor || getRandomColor();
        spawns.push(function (props) {
            spawn(task, taskConf)
        })
    }

    return {
        execute: function (props) {
            for (var i = 0; i < spawns.length; i++) {
                spawns[i](props);
            }
        }
    }
};

module.exports = PipeTasks;
