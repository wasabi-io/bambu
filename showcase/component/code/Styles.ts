import CssModule from "bambu/lib/base/css/CssModule";

const bulma = CssModule.exportModuleAsCamelCase(require('./styles.scss'));

export default bulma;
