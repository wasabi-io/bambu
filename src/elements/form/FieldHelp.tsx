import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Color, colorValues} from '../../base/css';

import HTMLComponent, {HTMLPProps} from '../../base/html/HTML';
import FormStyle from '../../bulma';

/**
 * Refers Html Props and Additional Props.
 */
export interface FieldHelpProps extends HTMLPProps {
    color?: string | Color;
}

const FieldHelp: React.SFC<FieldHelpProps> = (props: FieldHelpProps) => {

    const {
        color,
        className,
        ...fieldHelpProps
    } = props;

    const classNames = ClassNames([
        FormStyle.help,
        FormStyle[color],
        className
    ]);

    return (
        <p className={classNames} {...fieldHelpProps} >
            {props.children}
        </p>
    );
};

FieldHelp.propTypes = {
    ...HTMLComponent.propTypes,
    color: PropTypes.oneOf(colorValues),
};

FieldHelp.defaultProps = HTMLComponent.defaultProps;

FieldHelp.displayName = 'FieldHelp';

export default FieldHelp;
