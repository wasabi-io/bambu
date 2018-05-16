import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from "wasabi-common";
import {bulma as LevelStyle, HTMLComponent, HTMLElementProps, Responsive, responsiveValues} from '../../';

/**
 * Refers Html Props and Additional Props.
 */
export interface LevelProps extends HTMLElementProps {
    responsive?: Responsive;
}

export default class Level extends React.Component<LevelProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = {
        ...HTMLComponent.propTypes,
        responsive: PropTypes.oneOf(responsiveValues),
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {responsive, className, children, ...levelProps} = this.props;

        const classNames = ClassNames(
            LevelStyle.level,
            LevelStyle[responsive],
            className
        );

        return (
            <nav className={classNames} {...levelProps} >
                {children}
            </nav>
        );
    }
}

