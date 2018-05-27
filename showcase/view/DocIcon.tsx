import * as React from "react";
import Stateless from "wasabi-ui/lib/Stateless";
import {FaIcon, FaIconSize, FaIconStyle, Icon} from "bambu/lib/elements/icon";
import {Size} from "bambu";

export interface DocIconProps {
    name: string;
    bSize: Size;
    className?: string;
    iconSize: FaIconSize;
    iconStyle?: FaIconStyle;
    iconClassName?: string;
}

export default class DocIcon extends Stateless<DocIconProps> {
    public render() {
        return (
            <figure className={this.props.className}>
                <Icon className={this.props.iconClassName} bSize={this.props.bSize}>
                    <FaIcon iconStyle={this.props.iconStyle} name={this.props.name} bSize={this.props.iconSize}/>
                </Icon>
            </figure>
        );
    }
}
