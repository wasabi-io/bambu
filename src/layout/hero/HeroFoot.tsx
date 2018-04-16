import * as ClassNames from 'classnames';
import * as React from 'react';

import HTMLComponent, {HTMLSectionProps} from '../../base/html/HTML';
import HeroStyle from '../../base/css/bulma';

export type HeroFootProps = HTMLSectionProps;

const HeroFoot: React.SFC<HeroFootProps> = (props: HeroFootProps) => {

    const {className, ...heroFootProps} = props;

    const classNames = ClassNames(HeroStyle.heroFoot, className);

    return (
        <section className={classNames} {...heroFootProps} >
            {props.children}
        </section>
    );
};

HeroFoot.propTypes = HTMLComponent.propTypes;

HeroFoot.defaultProps = HTMLComponent.defaultProps;

HeroFoot.displayName = 'HeroFoot';

export default HeroFoot;
