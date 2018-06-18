import * as PropTypes from "prop-types";
import * as React from "react";
import {Props} from "wasabi-common";
import PagesProps from "../../documentation/PagesProps";
import pageStyle from "../../../css/pageStyle";
import {toJS} from "mobx";
import PageReferenceIcon from "./PageReferenceIcon";

export interface PageReferenceProps {
    childMap: Props<PagesProps>;
    breads: string[];
}

const PageReference: React.SFC<PageReferenceProps> = ((props: PageReferenceProps) => {
    const {childMap, breads} = props;
    const elements: JSX.Element[] = [];
    for (const key in childMap) {
        if (childMap.hasOwnProperty(key)) {
            const child = childMap[key];
            const {name, title, subTitle, module, children, icon, ...props} = child;
            const paths = breads.slice(0);
            paths.push(name);
            const href = paths.join("/");
            const iconProps: any = icon ? toJS(icon) : {};
            elements.push(
                <a key={href} className={pageStyle.bdLink} href={`#/${href}`}>
                    <h2 key={`page-reference-h2-${href}`} className={pageStyle.bdLinkName}>
                        <PageReferenceIcon key={`page-reference-${href}`} {...iconProps}/>
                        {title(`page-reference-h2-title-${href}`)}
                    </h2>
                    {subTitle && (
                        <p key={`page-reference-p-${href}`} className={pageStyle.bdLinkSubtitle}>
                            {subTitle(`page-reference-subtitle-${href}`)}
                        </p>
                    )}
                </a>
            );
        }
    }
    return (
        <>{elements}</>
    );
});

PageReference.propTypes = {
    childMap: PropTypes.object.isRequired,
    breads: PropTypes.arrayOf(PropTypes.string).isRequired
};

PageReference.defaultProps = {};

export default PageReference;
