import * as React from 'react';
import * as PropTypes from 'prop-types';

const Styled = require("react-styleguidist/lib/rsg-components/Styled").default;
const logo = require('./logo.svg');

interface StylesProps {
    fontFamily: any;
    color: any;
    space: string;
}

const styles = ({fontFamily, color}: StylesProps) => ({
    logo: {
        display: 'flex',
        alignItems: 'center',
        margin: 0,
        fontFamily: fontFamily.base,
        fontSize: 18,
        fontWeight: 'normal',
        color: color.baseBackground,
    },
    image: {
        width: '2.5em',
        marginLeft: '-0.5em',
    },
});

export interface LogoRendererProps {
    classes: any;
    children: any;
}

export const LogoRenderer: React.SFC<LogoRendererProps> = ({classes, children}: LogoRendererProps) => {
    return (
        <h1 className={classes.logo}>
            <img className={classes.image} src={logo}/>
            {children}
        </h1>
    );
};

LogoRenderer.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.node,
};

export default Styled(styles)(LogoRenderer);
