import * as ClassNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import HTMLComponent, {HTMLDivProps} from "../../base/html/HTML";
import ColumnsStyle from "./ColumnStyle";

/**
 * Refers Html Props and Additional Props.
 */
export interface ColumnProps extends HTMLDivProps {
    multiline?: boolean;
    size?: string;
    offset?: string;
}

const Column: React.SFC<ColumnProps> = (props: ColumnProps) => {

    const {multiline, size, offset, className, ...inputProps} = props;

    const classNames = ClassNames([
        ColumnsStyle.column,
        ColumnsStyle[size],
        ColumnsStyle[offset],
        multiline ? ColumnsStyle.isMultiline : undefined,
        className,
    ]);

    return (
        <div className={classNames} {...inputProps} >
            {props.children}
        </div>
    );
};

Column.propTypes = {
    ...HTMLComponent.propTypes,
    multiline: PropTypes.bool,
    offset: PropTypes.string,
    size: PropTypes.string,
};

Column.defaultProps = {
    ...HTMLComponent.defaultProps,
    multiline: false,
};

Column.displayName = "Column";

export default Column;
