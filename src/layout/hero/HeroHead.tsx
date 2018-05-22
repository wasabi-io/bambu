import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from "wasabi-common";
import {bulma as HeroStyle, HTMLComponent, HTMLHeaderProps} from '../../';

export interface HeroHeadProps extends HTMLHeaderProps {
    elementRef?: (ref: any) => any;
}

export default class HeroHead extends React.Component<HeroHeadProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = HTMLComponent.propTypes;

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, children, elementRef, ...inputProps} = this.props;

        const classNames = ClassNames([HeroStyle.heroHead, className]);

        return (
            <header className={classNames} {...inputProps} ref={elementRef} >
                {children}
            </header>
        );
    }
}

