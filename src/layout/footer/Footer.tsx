import * as ClassNames from 'classnames';
import * as React from 'react';
import HTMLComponent, {HTMLFooterProps} from '../../base/html/HTML';
import FooterStyle from '../../bulma';

export type FooterProps = HTMLFooterProps;

const Footer: React.SFC<FooterProps> = (props: FooterProps) => {

    const {className, ...inputProps} = props;

    const classNames = ClassNames([FooterStyle.footer, className]);

    return (
        <footer className={classNames} {...inputProps} >
            {props.children}
        </footer>
    );
};

Footer.propTypes = HTMLComponent.propTypes;

Footer.defaultProps = HTMLComponent.defaultProps;

Footer.displayName = 'Footer';

export default Footer;
