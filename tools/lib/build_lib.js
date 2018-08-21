const PipeTasks = require("../common/PipeTasks");
process.env.NODE_ENV = "production";
PipeTasks(
    [
        {command: "build:lib", env: {}},
        {command: "copy:lib", env: {}}
    ]
).execute();
