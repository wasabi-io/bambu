import * as PropTypes from "prop-types";
import * as React from "react";
import Stateless from "component/Stateless";
import {Box} from "bambu/lib/elements/box";
import layerStyle from "./LayerStyle";
import ReactUtil from "modules/router/util/ReactUtil";
import {Content} from "bambu/lib/elements/content";
import {BoxProps} from "bambu/lib/elements/box/Box";
import classNames = require("classnames");

export interface LayerProps extends BoxProps {
    isSeparate?: boolean;
    separatorRenderer?: (key?: string) => JSX.Element;
}

export default class Layer extends Stateless<LayerProps> {
    public static propTypes = {
        isSeparate: PropTypes.bool,
        separatorRenderer: PropTypes.func
    };
    public static defaultProps = {
        isSeparate: true,
    };

    public render() {
        const {isSeparate, separatorRenderer, className, ...props} = this.props;
        const separator = separatorRenderer || Layer.separatorRenderer;
        const classnames = classNames(
            layerStyle.messagePreview,
            className
        );
        return (
            <Box className={classnames} {...props}>
                {
                    ReactUtil.join(
                        this.props.children,
                        isSeparate ? separator : null,
                        (child: JSX.Element, key: string) => <Content key={key}>{child}</Content>
                    )
                }
            </Box>
        );
    }

    public static separatorRenderer = (key: any) => <hr key={key} style={{marginBottom: 0}}/>;

}
