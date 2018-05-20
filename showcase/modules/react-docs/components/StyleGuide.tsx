import * as PropTypes from 'prop-types';
import * as React from 'react';
import Logo from 'react-styleguidist/lib/rsg-components/Logo';
import Markdown from 'react-styleguidist/lib/rsg-components/Markdown';
import Styled from 'react-styleguidist/lib/rsg-components/Styled';
import Ribbon from 'react-styleguidist/lib/rsg-components/Ribbon';
import NavBar from "../../../view/NavBar";
import UrlUtil from "../../../util/UrlUtil";

const styles = ({color, fontFamily, fontSize, sidebarWidth, mq, space, maxWidth}: any) => ({
    root: {
        backgroundColor: color.baseBackground,
    },
    hasSidebar: {
        paddingLeft: sidebarWidth,
        [mq.small]: {
            paddingLeft: 0,
        },
    },
    content: {
        maxWidth,
        padding: [[space[2], space[4]]],
        margin: [[0, 'auto']],
        [mq.small]: {
            padding: space[2],
        },
        display: 'block',
    },
    sidebar: {
        backgroundColor: "white",
        border: [[color.border, 'solid']],
        borderWidth: [[1, 1, 0, 0]],
        position: "fixed",
        top: 53,
        left: 0,
        bottom: 0,
        width: sidebarWidth,
        overflow: 'auto',
        '-webkit-overflow-scrolling': 'touch',
        [mq.small]: {
            position: 'static',
            width: 'auto',
            borderWidth: [[1, 0, 0, 0]],
            paddingBottom: space[0],
        },
    },
    logo: {
        padding: space[2],
        borderBottom: [[1, color.border, 'solid']],
    },
    footer: {
        display: 'block',
        color: color.light,
        fontFamily: fontFamily.base,
        fontSize: fontSize.small,
    },
});

export interface StyleGuideRendererProps {
    classes: any;
    title: string;
    homepageUrl: string;
    components: any;
    toc: any;
    sidebar: any;
    hasSidebar: string;
    children: React.ReactNode;
}

export const StyleGuideRenderer: React.SFC<StyleGuideRendererProps> = ({classes, title, homepageUrl, children, toc, hasSidebar}) => {
    let basePath = UrlUtil.basePath;
    const index = basePath.indexOf("react-docs");
    if (index !== -1) {
        basePath = basePath.substring(0, index);
    }
    return (
        <div className={classes.root}>
            <NavBar basePath={basePath}/>
            {hasSidebar && (
                <div className={classes.sidebar}>
                    <div className={classes.logo}>
                        <Logo>{title}</Logo>
                    </div>
                    {toc}
                </div>
            )}
            <main className={classes.content}>
                {children}
                <footer className={classes.footer}>
                    <Markdown text={`Generated with [React Styleguidist](${homepageUrl})`}/>
                </footer>
            </main>
            <Ribbon/>
        </div>
    );

};

StyleGuideRenderer.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    homepageUrl: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    toc: PropTypes.node.isRequired,
    hasSidebar: PropTypes.bool,
};

export default Styled(styles)(StyleGuideRenderer);
