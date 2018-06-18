import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as HeroStyle, HTMLComponent, HTMLFooterProps} from '../../';

export interface HeroFootProps extends HTMLFooterProps {
    elementRef?: (ref: any) => any;
}

export default class HeroFoot extends React.Component<HeroFootProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        elementRef: PropTypes.func
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, children, elementRef, ...heroFootProps} = this.props;

        const classNames = ClassNames(HeroStyle.heroFoot, className);

        return (
            <footer className={classNames} {...heroFootProps} ref={elementRef}>
                {children}
            </footer>
        );
    }
}
