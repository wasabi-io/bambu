const PipeTasks = require("./common/PipeTasks");
process.env.NODE_ENV = "production";
PipeTasks(
    [
        {
            command: "showcase:build"
        },
        {
            command: "api-docs"
        }
    ]
).execute();
