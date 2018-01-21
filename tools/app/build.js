const PipeTasks = require("../common/PipeTasks");
process.env.NODE_ENV = "production";
PipeTasks(
    [
        {
            command: "build:app",
            env: {
                options: {
                    mountId: "app_container",
                    api: "http://localhost:3000"
                }
            }
        }
    ]
).execute();
