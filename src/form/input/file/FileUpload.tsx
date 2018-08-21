import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Alignment, alignmentValues, bulma as FormStyle, Size, sizeValues} from '../../../index';
import {FaIcon, FaIconProps} from "../../../elements/icon";
import Input, {InputProps} from "../Input";

export interface FileUploadProps extends InputProps {
    label?: string;
    icon?: string | FaIconProps;
    iconSize?: string | Size;
    hasName?: boolean;
    isFullwidth?: boolean;
    isBoxed?: boolean;
    alignment?: string | Alignment;
    labelStyle?: React.CSSProperties;
}

const FileUpload: any = (props: FileUploadProps) => {
    const {
        id,
        value,
        color,
        bSize,
        className,
        icon,
        iconSize,
        label,
        hasName,
        isFullwidth,
        isBoxed,
        alignment,
        placeholder,
        labelStyle,
        elementRef,
        ...fileUploadProps
    } = props;

    const classNames = ClassNames(
        FormStyle.file,
        FormStyle[color],
        FormStyle[bSize],
        FormStyle[alignment],
        className,
        {
            [`${FormStyle.hasName}`]: hasName,
            [`${FormStyle.isFullwidth}`]: isFullwidth,
            [`${FormStyle.isBoxed}`]: isBoxed,
        });

    return (
        <div className={classNames}>
            <label style={labelStyle} className={FormStyle.fileLabel}>
                <input
                    id={id}
                    hidden
                    value={value}
                    className={FormStyle.fileInput}
                    {...fileUploadProps}
                    type="file"
                    ref={elementRef}
                />
                {
                    (icon || label) && (
                        <span className={FormStyle.fileCta}>
                            {icon && (
                                <span className={FormStyle.fileIcon}>
                                    {typeof icon === "string" ? <FaIcon name={icon}/> : <FaIcon {...icon} bSize={iconSize}/>}
                                </span>)
                            }
                            <span className={FormStyle.fileLabel}>{label}</span>
                        </span>
                    )
                }
                {value && (
                    <span className={FormStyle.fileName}>
                        {value}
                    </span>
                )}
                {!value && (
                    <span className={FormStyle.fileName}>
                        {placeholder}
                    </span>
                )}
            </label>
        </div>
    );
};

FileUpload.propTypes = {
    ...Input.propTypes,
    label: PropTypes.string,
    icon: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    iconSize: PropTypes.oneOf(sizeValues),
    hasName: PropTypes.bool,
    isFullwidth: PropTypes.bool,
    isBoxed: PropTypes.bool,
    alignment: PropTypes.oneOf(alignmentValues),
    labelStyle: PropTypes.object
};

FileUpload.defaultProps = {
    ...Input.defaultProps,
    hasName: false,
    isFullwidth: true
};

FileUpload.displayName = 'FileUpload';

export default FileUpload;
