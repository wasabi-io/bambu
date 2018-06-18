import * as PropTypes from "prop-types";
import * as React from "react";
import {PagesIconProps} from "../../documentation/PagesProps";
import pageStyle from "../../../css/pageStyle";
import * as ClassNames from "classnames";
import {FaIcon, Icon} from "bambu/lib/elements/icon";

export interface PageReferenceIconProps extends PagesIconProps {

}

const PageReferenceIcon: React.SFC<PageReferenceIconProps> = ((props: PageReferenceIconProps) => {

    const {name, iconClassName, ...inputProps} = props;
    if (!name) {
        return null;
    }
    const iconClassNames = ClassNames(pageStyle.bdLinkIcon, iconClassName);

    let icon;
    if (name !== "linkCounter") {
        icon = (
            <span className={iconClassNames}>
                <Icon><FaIcon name={name} {...inputProps} /></Icon>
           </span>
        );
    } else {
        icon = <span className={pageStyle.bdLinkCounter}/>;
    }

    return (
        <figure className={pageStyle.bdLinkFigure}>
            {icon}
        </figure>
    );
});

PageReferenceIcon.propTypes = {
    ...FaIcon.propTypes,
    iconClassName: PropTypes.string
};

PageReferenceIcon.defaultProps = {};

export default PageReferenceIcon;
