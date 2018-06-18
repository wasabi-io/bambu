import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma, HTMLInputProps} from '../../../index';
import HTMLComponent from '../../../base/html/HTML';

export interface RadioProps extends HTMLInputProps {
    elementRef?: (ref: any) => any;
}

const Radio: React.SFC<RadioProps> = (props: RadioProps) => {
    const {className, children, ...inputProps} = props;

    const classNames = ClassNames(bulma.checkbox, className);

    return (
        <label className={classNames}>
            <input type="radio" {...inputProps}/>
            {children}
        </label>
    );
};

Radio.propTypes = {
    ...HTMLComponent.propTypes,
    elementRef: PropTypes.func
};

Radio.defaultProps = {
    ...HTMLComponent.defaultProps,
    checked: false
};

Radio.displayName = 'Radio';

export default Radio;
