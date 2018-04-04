import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';

import HTMLComponent, {HTMLDivProps} from '../../base/html/HTML';
import FormStyle from './FormStyle';

/**
 * Refers Html Props and Additional Props.
 */
export interface ControlProps extends HTMLDivProps {
    hasIconsLeft?: boolean;
    hasIconsRight?: boolean;
    isExpanded?: boolean;
    isLoading?: boolean;
}

const Control: React.SFC<ControlProps> = (props: ControlProps) => {

    const {
        isExpanded,
        hasIconsLeft,
        hasIconsRight,
        isLoading,
        className,
        ...inputProps
    } = props;

    const classNames = ClassNames(
        FormStyle.control,
        {
            [`${FormStyle.isExpanded}`]: isExpanded,
            [`${FormStyle.hasIconsLeft}`]: hasIconsLeft,
            [`${FormStyle.hasIconsRight}`]: hasIconsRight,
            [`${FormStyle.isLoading}`]: isLoading,
        },
        className
    );

    return (
        <div className={classNames} {...inputProps} >
            {props.children}
        </div>
    );
};

Control.propTypes = {
    ...HTMLComponent.propTypes,
    hasIconsLeft: PropTypes.bool,
    hasIconsRight: PropTypes.bool,
    isExpanded: PropTypes.bool,
};

Control.defaultProps = {
    ...HTMLComponent.defaultProps,
    hasIconsLeft: false,
    hasIconsRight: false,
    isExpanded: false,
    isLoading: false,
};

Control.displayName = 'Control';

export default Control;
