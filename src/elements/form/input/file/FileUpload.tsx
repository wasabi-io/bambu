import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Alignment, alignmentValues, bulma as FormStyle, Color, colorValues, HTMLComponent, HTMLInputProps, Size, sizeValues} from '../../../../';
import {Icon, IconOptions} from '../../../icon';
import {has} from 'wasabi-common/lib';
import Strings from 'wasabi-common/lib/types/Strings';
import ControlLabel from '../../ControlLabel';

export interface FileUploadProps extends HTMLInputProps {
    color?: string | Color;
    bSize?: string | Size;
    label?: string;
    icon?: IconOptions;
    iconSize?: string | Size;
    hasName?: boolean;
    isFullwidth?: boolean;
    isBoxed?: boolean;
    alignment?: string | Alignment;
    elementRef?: (ref: any) => any;
}

const FileUpload: React.SFC<FileUploadProps> = (props: FileUploadProps) => {
    const {
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
            [`${FormStyle.isFullwidth}`]: isFullwidth,
        });

    const hasIcon = has(icon);
    const hasLabel = Strings.has(label);

    return (
        <div className={classNames}>
            <ControlLabel className={FormStyle.fileLabel}>
                <input className={FormStyle.fileInput} {...fileUploadProps} type="file"/>
                {(hasIcon || hasLabel) && <span className={FormStyle.fileCta}>
          {hasIcon && <span className={FormStyle.fileIcon}><Icon icon={icon} bSize={iconSize}/></span>}
                    {hasLabel && <span className={FormStyle.fileLabel}> {label}</span>}
        </span>}
                {hasName && Strings.has(placeholder) && <span className={FormStyle.fileName}>{placeholder}</span>}
            </ControlLabel>
        </div>
    );
};

FileUpload.propTypes = {
    ...HTMLComponent.propTypes,
    color: PropTypes.oneOf(colorValues),
    bSize: PropTypes.oneOf(sizeValues),
    label: PropTypes.string,
    icon: PropTypes.object,
    iconSize: PropTypes.oneOf(sizeValues),
    hasName: PropTypes.bool,
    isFullwidth: PropTypes.bool,
    isBoxed: PropTypes.bool,
    alignment: PropTypes.oneOf(alignmentValues)
};
FileUpload.defaultProps = {
    ...HTMLComponent.defaultProps,
    hasName: false
};
FileUpload.displayName = 'FileUpload';

export default FileUpload;
