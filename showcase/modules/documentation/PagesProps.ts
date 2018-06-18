import {Props} from "wasabi-common";
import {FaIconProps} from "bambu/lib/elements/icon";
import * as React from "react";

export interface PagesIconProps extends FaIconProps {
    iconClassName?: string;
}

interface PagesProps {
    title?: (key?: string) => React.ReactChild;
    subTitle?: (key?: string) => React.ReactChild;
    module?: string;
    name: string;
    icon?: PagesIconProps;
    children?: Props<PagesProps>;
    componentPath?: string;
    loadChildren?: (path: string) => Promise<any>;
}

export default PagesProps;
