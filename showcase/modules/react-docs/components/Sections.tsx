import * as React from 'react';
import * as PropTypes from 'prop-types';

const Styled = require("react-styleguidist/lib/rsg-components/Styled").default;
const Heading = require("react-styleguidist/lib/rsg-components/Heading").default;

const DefaultSections = require("react-styleguidist/lib/rsg-components/Sections/SectionsRenderer").default;

interface StylesProps {
    fontFamily: any;
    color: any;
    space: any;
}

const styles = ({fontFamily, color, space}: StylesProps) => ({
    headingSpacer: {
        marginBottom: space[2],
    },
    descriptionText: {
        marginTop: space[0],
        fontFamily: fontFamily.base,
    },
});

export interface SectionsRendererProps {
    classes: any;
    children: any;
}

export const SectionsRenderer: React.SFC<SectionsRendererProps> = ({classes, children}: SectionsRendererProps) => {
    return (
        <div>
            <div className={classes.headingSpacer}>
                <Heading level={1}>Example Components</Heading>
                <p className={classes.descriptionText}>These are the greatest components</p>
            </div>
            <DefaultSections>{children}</DefaultSections>
        </div>
    );
};

SectionsRenderer.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.node,
};

export default Styled(styles)(SectionsRenderer);
