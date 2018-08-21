import CssModule from "bambu/lib/base/css/CssModule";

const checkStyle = CssModule.exportModuleAsCamelCase(require('./style.css'));

export default checkStyle;
