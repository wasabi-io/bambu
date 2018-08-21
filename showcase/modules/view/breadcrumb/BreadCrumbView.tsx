import * as PropTypes from "prop-types";
import * as React from "react";
import Strings from "wasabi-common/lib/types/Strings";
import {BreadCrumb, BreadCrumbItem} from "bambu/lib/components/breadcrumb";
import {HTMLDivProps, Size} from "bambu";

export interface BreadCrumbViewProps extends HTMLDivProps {
    breads: string[];
    prefix?: string;
}

const BreadCrumbView: React.SFC<BreadCrumbViewProps> = (props: BreadCrumbViewProps) => {
    const {breads, prefix, ...containerProps} = props;
    if (!breads || breads.length === 0) return null;
    return (
        <div {...containerProps}>
            <BreadCrumb bSize={Size.large}>
                {
                    props.breads.map((item: string, index: number) => (
                        <BreadCrumbItem href={`${prefix}${breads.slice(0, index + 1).join("/")}`} key={item} isActive={breads.length - 1 === index}>
                            {Strings.capitalizeFirstLetter(item)}
                        </BreadCrumbItem>
                    ))
                }
            </BreadCrumb>
        </div>
    );
};

BreadCrumbView.propTypes = {
    breads: PropTypes.arrayOf(PropTypes.string).isRequired,
    prefix: PropTypes.string
} as any;

BreadCrumbView.defaultProps = {
    prefix: "#/"
};

export default BreadCrumbView;
