import * as ClassNames from 'classnames';
import * as React from 'react';
import PanelStyle from '../../bulma';
import HTMLComponent, {HTMLPProps} from '../../base/html/HTML';

export type PanelTabsProps = HTMLPProps;

const PanelTabs: React.SFC<PanelTabsProps> = (props: PanelTabsProps) => {

    const {className, ...inputProps} = props;

    const classNames = ClassNames([
        PanelStyle.panelTabs,
        className
    ]);

    return (
        <p className={classNames} {...inputProps}>
            {props.children}
        </p>
    );
};

PanelTabs.propTypes = HTMLComponent.propTypes;

PanelTabs.defaultProps = HTMLComponent.defaultProps;

PanelTabs.displayName = 'PanelTabs';

export default PanelTabs;
