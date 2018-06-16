import {Alignment, bulma, Color, Size} from 'bambu/lib/base/css';
import {Control, ControlLabel, ControlLabelProps, ControlProps, Field, FieldHelp, FieldProps,} from 'bambu/lib/elements/form';
import {Icon, IconOptions} from 'bambu/lib/elements/icon';
import * as React from 'react';
import {has} from 'wasabi-common/lib';
import Strings from 'wasabi-common/lib/types/Strings';
import Stateless from "wasabi-ui/lib/Stateless";
import FaIcon from "bambu/lib/elements/icon/FaIcon";
import {ComponentUtil} from "bambu";

export interface BaseInputProps extends FieldProps {
    label?: string;
    labelProps?: ControlLabelProps;
    controlProps?: ControlProps;
    leftIcon?: IconOptions;
    leftIconSize?: string | Size;
    rightIcon?: IconOptions;
    rightIconSize?: string | Size;
    help?: string;
    helpColor?: string | Color;
}


export default class BaseInput extends Stateless<BaseInputProps> {
    public render() {
        const {controlProps, leftIcon, leftIconSize, rightIcon, rightIconSize, label, labelProps, help, helpColor, children, ...fieldProps} = this.props;

        return (
            <Field {...fieldProps}>
                {Strings.has(label) && <ControlLabel {...labelProps}>{label}</ControlLabel>}
                <Control hasIconsLeft={has(leftIcon)} hasIconsRight={has(rightIcon)} {...controlProps} >
                    {children}
                    {BaseInput.renderIcon(Alignment.left, leftIconSize, leftIcon)}
                    {BaseInput.renderIcon(Alignment.right, rightIconSize, rightIcon)}
                </Control>
                {Strings.has(help) && <FieldHelp color={helpColor}>{help}</FieldHelp>}
            </Field>
        );
    }

    public static renderIcon(alignment: Alignment, iconSize: string | Size, icon: any) {
        if (!has(icon)) {
            return null;
        }
        let component = null;
        if (typeof icon === "string") {
            component = <FaIcon name={icon}/>;
        } else if (ComponentUtil.isElement(icon)) {
            component = icon;
        } else {
            component = <FaIcon {...icon} />;
        }
        return (
            <Icon className={bulma[alignment]} bSize={iconSize}>
                {component}
            </Icon>
        );
    }
}
