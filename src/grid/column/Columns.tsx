import * as ClassNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import Objects from "wasabi-common/lib/types/Objects";
import {Responsive} from "../../base/css";
import HTMLComponent, {HTMLDivProps} from "../../base/html/HTML";
import ColumnsStyle from "./ColumnStyle";

/**
 * Refers Html Props and Additional Props.
 */
export interface ColumnsProps extends HTMLDivProps {
    multiline?: boolean;
    gapless?: boolean;
    responsive?: string | Responsive;
}

const Columns: React.SFC<ColumnsProps> = (props: ColumnsProps) => {

    const {responsive, multiline, gapless, className, ...inputProps} = props;

    const classNames = ClassNames([
        ColumnsStyle.columns,
        ColumnsStyle[responsive],
        multiline ? ColumnsStyle.isMultiline : undefined,
        gapless ? ColumnsStyle.isGapless : undefined,
        className,
    ]);

    return (
        <div className={classNames} {...inputProps} >
            {props.children}
        </div>
    );
};

Columns.propTypes = {
    ...HTMLComponent.propTypes,
    gapless: PropTypes.bool,
    multiline: PropTypes.bool,
    responsive: PropTypes.oneOf(Objects.values(Responsive)),
};

Columns.defaultProps = {
    ...HTMLComponent.defaultProps,
    gapless: false,
    multiline: false,
};

Columns.displayName = "Columns";

export default Columns;
