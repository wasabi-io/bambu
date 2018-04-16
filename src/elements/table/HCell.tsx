import * as ClassNames from 'classnames';
import * as React from 'react';

import HTMLComponent, {HTMLThProps} from '../../base/html/HTML';
import TableStyle from '../../base/css/bulma';

/**
 * Refers Html Props and Additional Props.
 */
export type HCellProps = HTMLThProps;

const HCell: React.SFC<HCellProps> = (props: HCellProps) => {

    const {className, ...hCellProps} = props;

    const classNames = ClassNames(
        TableStyle.th,
        className
    );

    return (
        <th className={classNames} {...hCellProps} >
            {props.children}
        </th>
    );
};

HCell.propTypes = HTMLComponent.propTypes;
HCell.defaultProps = HTMLComponent.defaultProps;
HCell.displayName = 'HCell';

export default HCell;
