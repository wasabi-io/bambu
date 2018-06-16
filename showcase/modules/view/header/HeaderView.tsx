import * as PropTypes from "prop-types";
import * as React from "react";
import {Size6} from "bambu";
import {Title} from "bambu/lib/elements/title";
import pageStyle from "css/pageStyle";
import BreadCrumbView from "../breadcrumb/BreadCrumbView";

export interface HeaderViewProps {
    breads: string[];
    children?: any;
}

const HeaderView: React.SFC<HeaderViewProps> = (props: HeaderViewProps) => {
    return (
        <header className={pageStyle.bdHeader}>
            <div className={pageStyle.bdHeaderTitles}>
                <Title key={"title"} bSize={Size6.is1}>
                    <BreadCrumbView breads={props.breads}/>
                </Title>
                {props.children}
            </div>
        </header>
    );
};

HeaderView.propTypes = {
    breads: PropTypes.arrayOf(PropTypes.string).isRequired
};

HeaderView.defaultProps = {};

export default HeaderView;
