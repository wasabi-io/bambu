import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';

import HTMLComponent, {HTMLTrProps} from '../../base/html/HTML';
import TableStyle from '../../base/css/bulma';

export interface RowProps extends HTMLTrProps {
    isSelected?: boolean
}

const Row: React.SFC<RowProps> = (props: RowProps) => {

    const {className, isSelected, ...rowProps} = props;

    const classNames = ClassNames(
        TableStyle.tr,
        className,
        {[`${TableStyle.isSelected}`]: isSelected},
    );

    return (
        <tr className={classNames} {...rowProps} >
            {props.children}
        </tr>
    );
};


Row.propTypes = {
    ...HTMLComponent.propTypes,
    isSelected: PropTypes.bool
};

Row.defaultProps = {
    ...HTMLComponent.defaultProps,
    isSelected: false
};

Row.displayName = 'Row';

export default Row;
