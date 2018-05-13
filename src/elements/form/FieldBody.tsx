import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as FormStyle, HTMLComponent, HTMLDivProps, Size, sizeValues} from '../../';

/**
 * Refers Html Props and Additional Props.
 */
export interface FieldBodyProps extends HTMLDivProps {
    bSize?: string | Size;
}

const FieldBody: React.SFC<FieldBodyProps> = (props: FieldBodyProps) => {

    const {
        bSize,
        className,
        ...inputProps
    } = props;

    const classNames = ClassNames([
        FormStyle.fieldBody,
        FormStyle[bSize],
        className
    ]);

    return (
        <div className={classNames} {...inputProps} >
            {props.children}
        </div>
    );
};

FieldBody.propTypes = {
    ...HTMLComponent.propTypes,
    bSize: PropTypes.oneOf(sizeValues),
};

FieldBody.defaultProps = HTMLComponent.defaultProps;

FieldBody.displayName = 'FieldBody';

export default FieldBody;
