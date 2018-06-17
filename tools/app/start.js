const PipeTasks = require("../common/PipeTasks");
process.env.NODE_ENV = "development";
PipeTasks(
    [
        {
            command: "start:app",
            env: {
                options: {
                    mountId: "app_container",
                    api: "http://localhost:3000"
                }
            }
        },
        {
            command: "watch:file"
        }
    ]
).execute();
