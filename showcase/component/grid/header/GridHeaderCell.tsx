import * as ClassNames from "classnames";
import * as React from "react";
import Stateless from "wasabi-ui/lib/Stateless";
import {HCell, HCellProps} from "bambu/lib/elements/table";
import GridField, {GridFieldSearchRenderer, GridHeaderCellRenderer} from "../GridField";
import gridStyle from "../gridStyle";
import {HTMLComponent, Size} from "bambu";
import * as PropTypes from "prop-types";
import {Dropdown, DropdownContent, DropdownDivider, DropdownItem, DropdownMenu} from "bambu/lib/components/dropdown";
import {Button} from "bambu/lib/elements/button";
import {FaIcon, Icon} from "bambu/lib/elements/icon";
import {observer} from "mobx-react";
import GridSearchQuery, {OrderType} from "../search/GridSearchQuery";
import {observable, toJS} from "mobx";
import {has} from "wasabi-common";
import {Control, Field} from "bambu/lib/elements/form";
import cellSettingsManager from "./cellSettingsManager";
import CellSettingItem from "./CellSettingItem";

export interface GridHeaderCellProps extends HCellProps {
    action: GridSearchQuery;
    name: string;
    field: GridField;
    renderer?: GridHeaderCellRenderer;
    fieldSearchRenderer?: GridFieldSearchRenderer;
    totalField?: number;
    index: number;
}

@observer
export default class GridHeaderCell extends Stateless<GridHeaderCellProps> {
    @observable
    private isActive: boolean = false;
    @observable
    private orderType: OrderType = null;

    public static propTypes = {
        ...HTMLComponent.propTypes,
        action: PropTypes.object,
        name: PropTypes.string,
        field: PropTypes.object,
        renderer: PropTypes.func,
        searchRenderer: PropTypes.func
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render() {
        const {action, name, field, renderer, fieldSearchRenderer, totalField, index, className, ...props} = this.props;

        const classNames = ClassNames(gridStyle.bGridHeaderCell, className);

        const cellRenderer = field.headerCellRenderer || renderer || this.renderCells;

        const searchRendererFn = field.fieldSearchRenderer || fieldSearchRenderer;

        return (
            <HCell key={`grid-row-cell-${name}`} className={classNames} {...props}>
                {cellRenderer(name, field, index, totalField, action, searchRendererFn)}
            </HCell>
        );
    }

    public renderCells(name: string, field?: GridField, index?: number, totalField?: number, action?: GridSearchQuery) {
        return (
            <Dropdown isHoverable className={gridStyle.bGridHeaderCellContainer}>
                <Field hasAddons>
                    <Control className={gridStyle.bGridHeaderCellName}>
                        <Button className={ClassNames(gridStyle.bGridHeaderCellButton, gridStyle.bGridHeaderCellName)}>
                            <span>{field.header}</span>
                        </Button>
                    </Control>
                    <Control>
                        {field.sortable && this.renderSortButton(name, action)}
                    </Control>
                    <Control>
                        <Button disabled={true} className={ClassNames(gridStyle.bGridHeaderCellButton, gridStyle.bGridHeaderCellRight)}>
                            <Icon bSize={Size.small}>
                                <FaIcon name="ellipsis-v"/>
                            </Icon>
                        </Button>
                    </Control>
                </Field>
                {field.settings && (
                    <DropdownMenu>
                        <DropdownContent>
                            {GridHeaderCell.renderCellSettings(name, field, action)}
                        </DropdownContent>
                    </DropdownMenu>
                )}
            </Dropdown>
        );
    }

    public renderSortButton(name: string, action?: GridSearchQuery) {
        const iconName = has(this.orderType) ? (OrderType.asc === this.orderType ? "angle-down" : "angle-up") : "sort";
        return (
            <Button className={gridStyle.bGridHeaderCellButton} onClick={() => this.orderType = action.sort(name, this.orderType === OrderType.asc ? OrderType.desc : OrderType.asc)}>
                <Icon bSize={Size.small}>
                    <FaIcon name={iconName}/>
                </Icon>
            </Button>
        );
    }

    public static renderCellSettings(name: string, field?: GridField, action?: GridSearchQuery) {
        const elements: JSX.Element[] = [];
        const settings = toJS(field.settings);
        for (const key in settings) {
            if (settings.hasOwnProperty(key)) {
                const otherProps = settings[key];
                const props: CellSettingItem = typeof otherProps === "boolean" ? {name, field, action} : {name, field, action, ...otherProps};
                const SettingsItem = cellSettingsManager.get(key);
                if (SettingsItem) {
                    elements.push(
                        <DropdownItem key={`grid-header-cell-${name}-${key}-${elements.length}`}>
                            <SettingsItem {...props} />
                        </DropdownItem>
                    );
                    elements.push(<DropdownDivider key={`grid-header-cell-${name}-divider`}/>);
                }
            }
        }
        elements.pop();
        return elements;
    }
}
