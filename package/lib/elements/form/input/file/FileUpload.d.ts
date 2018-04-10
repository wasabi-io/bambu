/// <reference types="react" />
import * as React from 'react';
import { Alignment, Color, Size } from '../../../../base/css';
import { IconOptions } from '../../../icon';
import { HTMLInputProps } from '../../../../base/html/HTML';
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
declare const FileUpload: React.SFC<FileUploadProps>;
export default FileUpload;
