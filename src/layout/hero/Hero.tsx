import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
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
    bSize?: string | HeroSize;
}

const Hero: React.SFC<HeroProps> = (props: HeroProps) => {

    const {bSize, color, isBold, className, ...heroProps} = props;

    const classNames = ClassNames(
        HeroStyle.hero,
        HeroStyle[bSize],
        HeroStyle[color],
        {
            [`${HeroStyle.isBold}`]: isBold
        },
        className,
    );

    return (
        <section className={classNames} {...heroProps} >
            {props.children}
        </section>
    );
};

Hero.propTypes = {
    ...HTMLComponent.propTypes,
    color: PropTypes.oneOf(colorValues),
    isBold: PropTypes.bool,
    bSize: PropTypes.oneOf(Objects.values(HeroSize)),
};

Hero.defaultProps = {
    ...HTMLComponent.defaultProps,
    isBold: false,
};

Hero.displayName = 'Hero';

export default Hero;
