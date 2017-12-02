import * as ClassNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import HTMLComponent, {HTMLDivProps} from "../../base/html/HTML";
import ContainerStyle from "./ContainerStyle";

/**
 * Refers Html Props and Additional Props.
 */
export interface ContainerProps extends HTMLDivProps {
    fluid?: boolean;
    fullHd?: boolean;
    textCentered?: boolean;
    wideScreen?: boolean;
}

const Container: React.SFC<ContainerProps> = (props: ContainerProps) => {

    const {fluid, fullHd, wideScreen, textCentered, className, ...inputProps} = props;

    const classNames = ClassNames([
            ContainerStyle.container,
            fluid ? ContainerStyle.isFluid : undefined,
            fullHd ? ContainerStyle.isFullhd : undefined,
            wideScreen ? ContainerStyle.isWidescreen : undefined,
            textCentered ? ContainerStyle.isGapless : undefined,
            className
    ]);

    return (
        <div className={classNames} {...inputProps} >
            {props.children}
        </div>
    );
};

Container.propTypes = {
    ...HTMLComponent.propTypes,
    fluid: PropTypes.bool,
    fullHd: PropTypes.bool,
    textCentered: PropTypes.bool,
    wideScreen: PropTypes.bool,
};

Container.defaultProps = {
    ...HTMLComponent.defaultProps,
    fluid: false,
    fullHd: false,
    textCentered: false,
    wideScreen: false,
};

Container.displayName = "Container";

export default Container;
