/// <reference types="react" />
import Stateless from 'wasabi-ui/lib/Stateless';
import { HTMLDivProps } from '../../base/html/HTML';
/**
 * Refers Html Props and Additional Props.
 */
export interface DropdownProps extends HTMLDivProps {
    isActive?: boolean;
    isHoverable?: boolean;
    isRight?: boolean;
    isUp?: boolean;
}
export default class Dropdown extends Stateless<DropdownProps> {
    dropdownRef: HTMLDivElement;
    constructor(props: DropdownProps);
    onDropDown(e: any): void;
    render(): JSX.Element;
}
