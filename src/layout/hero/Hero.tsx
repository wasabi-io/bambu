import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from "wasabi-common";
import Objects from 'wasabi-common/lib/types/Objects';
import {bulma as HeroStyle, Color, colorValues, HTMLComponent, HTMLSectionProps} from '../../';

export enum HeroSize {
    isSmall = 'isSmall',
    isMedium = 'isMedium',
    isLarge = 'isLarge',
    isFullheight = 'isFullheight',
}

/**
 * Refers Html Props and Additional Props.
 */
export interface HeroProps extends HTMLSectionProps {
    color?: string | Color;
    isBold?: boolean;
    isMedium?: boolean;
    bSize?: string | HeroSize;
    elementRef?: any;
}

export default class Hero extends React.Component<HeroProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = {
        ...HTMLComponent.propTypes,
        color: PropTypes.oneOf(colorValues),
        isBold: PropTypes.bool,
        isMedium: PropTypes.bool,
        bSize: PropTypes.oneOf(Objects.values(HeroSize)),
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        isBold: false,
        isMedium: false,
    };

    public render(): JSX.Element {
        const {bSize, color, isBold, isMedium, className, children, elementRef, ...heroProps} = this.props;

        const classNames = ClassNames(
            HeroStyle.hero,
            HeroStyle[bSize],
            HeroStyle[color],
            {
                [`${HeroStyle.isBold}`]: isBold,
                [`${HeroStyle.isMedium}`]: isMedium
            },
            className,
        );

        return (
            <section className={classNames} {...heroProps} ref={elementRef} >
                {children}
            </section>
        );
    }
}
