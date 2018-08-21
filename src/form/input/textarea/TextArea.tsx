import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as FormStyle, Color, colorValues, HTMLTextareaProps, Size, sizeValues, State, stateValues} from '../../../index';
import Input from "../Input";
import {InputFieldChange} from "../InputField";

/**
 * Refers Html Props and Additional Props.
 */
export interface TextAreaProps extends HTMLTextareaProps {
    name: string;
    value?: any;
    color?: string | Color;
    bSize?: string | Size;
    onChange?: InputFieldChange;
    state?: string | State;
    elementRef?: (ref: any) => any;
}

const TextArea: React.SFC<TextAreaProps> = (props: TextAreaProps) => {

    const {
        color,
        bSize,
        state,
        className,
        elementRef,
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
        <textarea ref={elementRef} className={classNames} {...inputProps} >
            {props.children}
        </textarea>
    );
};

TextArea.propTypes = {
    ...Input.propTypes,
    color: PropTypes.oneOf(colorValues),
    bSize: PropTypes.oneOf(sizeValues),
    state: PropTypes.oneOf(stateValues),
} as any;

TextArea.defaultProps = Input.defaultProps;

TextArea.displayName = 'TextArea';

export default TextArea;
