import Application from './Application';
import transformer from "./component/code/transform/transformer";
import * as modules from "./modules";

transformer.addModules(modules);
const options = JSON.parse(JSON.stringify(process.env.options as any));

const application = new Application(options);
application.render();
