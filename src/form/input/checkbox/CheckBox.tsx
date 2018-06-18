import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma, HTMLInputProps} from '../../../index';
import HTMLComponent from '../../../base/html/HTML';

export interface CheckBoxProps extends HTMLInputProps {
    elementRef?: (ref: any) => any;
}

const CheckBox: React.SFC<CheckBoxProps> = (props: CheckBoxProps) => {
    const {className, children, ...inputProps} = props;

    const classNames = ClassNames(bulma.checkbox, className);

    return (
        <label className={classNames}>
            <input type="checkbox" {...inputProps} />
            {children}
        </label>
    );
};

CheckBox.propTypes = {
    ...HTMLComponent.propTypes,
    elementRef: PropTypes.func
};

CheckBox.defaultProps = {
    ...HTMLComponent.defaultProps,
    checked: false
};


CheckBox.displayName = 'CheckBox';

export default CheckBox;
