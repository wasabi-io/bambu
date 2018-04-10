/// <reference types="react" />
import * as PropTypes from 'prop-types';
import Stateless from 'wasabi-ui/lib/Stateless';
import { MenuLabelProps } from './MenuLabel';
import { MenuLinkGenParent, MenuLinkGenProps } from './MenuLinkGen';
export interface MenuLinkGenRoot extends MenuLabelProps, MenuLinkGenParent {
    label: string;
    routes?: MenuLinkGenProps[];
}
export interface MenuGenProps extends MenuLinkGenParent {
    prefix?: string;
    routes: MenuLinkGenRoot[];
}
export default class MenuGen extends Stateless<MenuGenProps> {
    static propTypes: {
        hierarchical: PropTypes.Requireable<any>;
        prefix: PropTypes.Requireable<any>;
        routes: PropTypes.Validator<any>;
    };
    static defaultProps: {
        hierarchical: boolean;
        prefix: string;
    };
    render(): JSX.Element[];
}
