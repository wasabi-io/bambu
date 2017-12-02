import * as React from "react";
import Icon from "rebul/lib/elements/icon/Icon";
import {Size} from "rebul/lib/base/css";
import {IconSize} from "rebul/lib/elements/icon/FaIcon";

const IconSample2: React.SFC<{}> = (props: {}) => {
    return (
        <div>
            <Icon icon="home" />
            <Icon icon={{ name: "home", size: IconSize.lg }} size={Size.small}/>
            <Icon icon={{ name: "home", size: IconSize.lg }} size={Size.medium}/>
            <Icon icon={{ name: "home", size: IconSize.lg }} size={Size.large}/>
        </div>

    )
};

export default IconSample2;
