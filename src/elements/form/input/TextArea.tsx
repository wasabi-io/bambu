import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Color, colorValues, Size, SizeValues, State, StateValues} from '../../../base/css';

import HTMLComponent, {HTMLTextareaProps} from '../../../base/html/HTML';
import FormStyle from '../FormStyle';

/**
 * Refers Html Props and Additional Props.
 */
export interface TextAreaProps extends HTMLTextareaProps {
    color?: string | Color;
    size?: string | Size;
    state?: string | State;
}

const TextArea: React.SFC<TextAreaProps> = (props: TextAreaProps) => {

    const {
        color,
        size,
        state,
        className,
        ...inputProps
    } = props;

    const classNames = ClassNames(
        FormStyle.textarea,
        FormStyle[color],
        FormStyle[size],
        FormStyle[state],
        className
    );

    return (
        <textarea className={classNames} {...inputProps} >
      {props.children}
    </textarea>
    );
};

TextArea.propTypes = {
    ...HTMLComponent.propTypes,
    color: PropTypes.oneOf(colorValues),
    size: PropTypes.oneOf(SizeValues),
    state: PropTypes.oneOf(StateValues),
};

TextArea.defaultProps = HTMLComponent.defaultProps;

TextArea.displayName = 'TextArea';

export default TextArea;
