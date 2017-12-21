import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Alignment, AlignmentValues, Color, Size } from 'rebul/lib/base/css';
import { Icon, IconOptions } from 'rebul/lib/elements/icon';
import { has } from 'wasabi-common/lib';
import Strings from 'wasabi-common/lib/types/Strings';

import HTMLComponent, { HTMLInputProps } from '../../../../base/html/HTML';
import ControlLabel from '../../ControlLabel';
import FormStyle from '../../FormStyle';

/**
 * Refers Html Props and Additional Props.
 */
export interface FileUploadProps extends HTMLInputProps {
    color?: string | Color;
    iSize?: string | Size;
    label?: string;
    icon?: IconOptions;
    iconSize?: string | Size;
    hasName?: boolean;
    isFullwidth?: boolean;
    isBoxed?: boolean;
    alignment?: string | Alignment;
}

const FileUpload: React.SFC<FileUploadProps> = (props: FileUploadProps) => {

    const {
        color,
        iSize,
        className,
        icon,
        iconSize,
        label,
        hasName,
        isFullwidth,
        isBoxed,
        alignment,
        placeholder,
        ...inputProps
    } = props;

    const classNames = ClassNames([
        FormStyle.file,
        FormStyle[color],
        FormStyle[iSize],
        FormStyle[alignment],
        className],
        { [`${FormStyle.hasName}`]: hasName },
        { [`${FormStyle.isFullwidth}`]: isFullwidth },
        { [`${FormStyle.isBoxed}`]: isBoxed });

    const hasIcon = has(icon);
    const hasLabel = Strings.has(label);

    return (
        <div className={classNames}>
            <ControlLabel className={FormStyle.fileLabel}>
                <input className={FormStyle.fileInput} {...inputProps} type="file" />
                {(hasIcon || hasLabel) && <span className={FormStyle.fileCta}>
                    {hasIcon && <span className={FormStyle.fileIcon} ><Icon icon={icon} size={iconSize} /></span>}
                    {hasLabel && <span className={FormStyle.fileLabel}> {label}</span>}
                </span>}
                {hasName && Strings.has(placeholder) && <span className={FormStyle.fileName}>{placeholder}</span>}
            </ControlLabel>
        </div>
    );
};

FileUpload.propTypes = {
    ...HTMLComponent.propTypes,
    alignment: PropTypes.oneOf(AlignmentValues),
};

FileUpload.defaultProps = {
    ...HTMLComponent.defaultProps,
    hasName: false
};

FileUpload.displayName = "FileUpload";

export default FileUpload;
