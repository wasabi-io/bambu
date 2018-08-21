import * as PropTypes from 'prop-types';
import * as React from 'react';
import HTMLComponent, {HTMLOptionProps} from '../../../base/html/HTML';

export interface SelectItemProps extends HTMLOptionProps {
    elementRef?: (ref: any) => any;
}

const SelectItem: React.SFC<SelectItemProps> = (props: SelectItemProps) => {
    return (
        <option {...props}>{props.children}</option>
    );
};

SelectItem.propTypes = {
    ...HTMLComponent.propTypes,
    elementRef: PropTypes.func
} as any;

SelectItem.defaultProps = HTMLComponent.defaultProps;

SelectItem.displayName = 'SelectItem';

export default SelectItem;
