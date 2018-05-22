import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as FormStyle, Color, colorValues, HTMLComponent, HTMLTextareaProps, Size, sizeValues, State, stateValues} from '../../../';

/**
 * Refers Html Props and Additional Props.
 */
export interface TextAreaProps extends HTMLTextareaProps {
    color?: string | Color;
    bSize?: string | Size;
    state?: string | State;
    elementRef?: (ref: any) => any;
}

const TextArea: React.SFC<TextAreaProps> = (props: TextAreaProps) => {

    const {
        color,
        bSize,
        state,
        className,
        ...inputProps
    } = props;

    const classNames = ClassNames(
        FormStyle.textarea,
        FormStyle[color],
        FormStyle[bSize],
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
    bSize: PropTypes.oneOf(sizeValues),
    state: PropTypes.oneOf(stateValues),
};

TextArea.defaultProps = HTMLComponent.defaultProps;

TextArea.displayName = 'TextArea';

export default TextArea;
