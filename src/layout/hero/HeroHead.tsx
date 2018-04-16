import * as ClassNames from 'classnames';
import * as React from 'react';
import HTMLComponent, {HTMLSectionProps} from '../../base/html/HTML';
import HeroStyle from '../../base/css/bulma';

export type HeroHeadProps = HTMLSectionProps;

const HeroHead: React.SFC<HeroHeadProps> = (props: HeroHeadProps) => {

    const {className, ...inputProps} = props;

    const classNames = ClassNames([HeroStyle.heroHead, className]);

    return (
        <section className={classNames} {...inputProps} >
            {props.children}
        </section>
    );
};

HeroHead.propTypes = HTMLComponent.propTypes;

HeroHead.defaultProps = HTMLComponent.defaultProps;

HeroHead.displayName = 'HeroHead';

export default HeroHead;
