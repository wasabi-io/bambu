import Application from './Application';
import transformer from "./component/editor/transform/tsx/transformer";
import * as modules from "./modules";
import {bulma} from "bambu";

bulma.$putAll(require('bulma/css/bulma.css'));

transformer.addModules(modules);

const options = JSON.parse(JSON.stringify(process.env.options as any));

const application = new Application(options);
application.render();
