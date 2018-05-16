import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from "wasabi-common";
import {bulma as HeroStyle, HTMLComponent, HTMLFooterProps} from '../../';

export interface HeroFootProps extends HTMLFooterProps {
}

export default class HeroFoot extends React.Component<HeroFootProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = HTMLComponent.propTypes;

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, children, ...heroFootProps} = this.props;

        const classNames = ClassNames(HeroStyle.heroFoot, className);

        return (
            <footer className={classNames} {...heroFootProps} >
                {children}
            </footer>
        );
    }
}
