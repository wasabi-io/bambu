/// <reference types="react" />
import * as React from 'react';
import { Size } from '../../base/css';
import { HTMLSectionProps } from '../../base/html/HTML';
export interface SectionProps extends HTMLSectionProps {
    size?: string | Size;
}
declare const Section: React.SFC<SectionProps>;
export default Section;
