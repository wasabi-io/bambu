import {Props} from "wasabi-common";
import {FaIconProps} from "bambu/lib/elements/icon";

export interface PagesIconProps extends FaIconProps {
    iconClassName?: string;
}

interface PagesProps {
    title?: string | JSX.Element;
    subTitle?: string | JSX.Element;
    module?: string;
    name: string;
    icon?: PagesIconProps;
    children?: Props<PagesProps>;
    componentPath?: string;
    loadChildren?: (path: string) => Promise<any>;
}

export default PagesProps;
