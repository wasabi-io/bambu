import * as ClassNames from 'classnames';
import * as React from 'react';
import {bulma as PanelStyle, HTMLComponent, HTMLPProps} from '../../';

export type PanelHeadingProps = HTMLPProps;

const PanelHeading: React.SFC<PanelHeadingProps> = (props: PanelHeadingProps) => {

    const {className, ...inputProps} = props;

    const classNames = ClassNames([
        PanelStyle.panelHeading,
        className
    ]);

    return (
        <p className={classNames} {...inputProps}>
            {props.children}
        </p>
    );
};

PanelHeading.propTypes = HTMLComponent.propTypes;

PanelHeading.defaultProps = HTMLComponent.defaultProps;

PanelHeading.displayName = 'PanelHeading';

export default PanelHeading;
