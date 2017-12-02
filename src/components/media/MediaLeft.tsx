import * as ClassNames from "classnames";
import * as React from "react";
import HTMLComponent, {HTMLFigureProps} from "../../base/html/HTML";
import MediaStyle from "./MediaStyle";

export type MediaLeftProps = HTMLFigureProps;

const MediaLeft: React.SFC<MediaLeftProps> = (props: MediaLeftProps) => {

    const {className, ...inputProps} = props;

    const classNames = ClassNames([
        MediaStyle.mediaLeft,
        className
    ]);

    return (
        <figure {...inputProps} className={classNames}>
            {props.children}
        </figure>
    );
};

MediaLeft.propTypes = HTMLComponent.propTypes;

MediaLeft.defaultProps = HTMLComponent.defaultProps;

MediaLeft.displayName = "MediaContent";

export default MediaLeft;
