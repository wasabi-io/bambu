import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import Objects from 'wasabi-common/lib/types/Objects';

import {Color, colorValues} from '../../base/css';
import HTMLComponent, {HTMLSectionProps} from '../../base/html/HTML';
import HeroStyle from './HeroStyle';

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
    size?: string | HeroSize;
}

const Hero: React.SFC<HeroProps> = (props: HeroProps) => {

    const {size, color, isBold, className, ...heroProps} = props;

    const classNames = ClassNames(
        HeroStyle.hero,
        HeroStyle[size],
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
    size: PropTypes.oneOf(Objects.values(HeroSize)),
};

Hero.defaultProps = {
    ...HTMLComponent.defaultProps,
    isBold: false,
};

Hero.displayName = 'Hero';

export default Hero;
