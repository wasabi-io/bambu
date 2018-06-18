import * as ClassNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import Stateless from "component/Stateless";
import {Cell, CellProps} from "bambu/lib/elements/table";
import {has, Props} from "wasabi-common";
import GridField, {GridRowCellRenderer} from "../GridField";
import gridStyle from "../gridStyle";
import {observer} from "mobx-react";
import {HTMLComponent} from "bambu";
import {toJS} from "mobx";

export interface GridRowCellProps extends CellProps {
    name: string;
    item: Props<any>;
    index: number;
    field: GridField;
    renderer?: GridRowCellRenderer;
}

@observer
export default class GridRowCell extends Stateless<GridRowCellProps> {
    public static propTypes = {
        ...HTMLComponent.propTypes,
        name: PropTypes.string,
        item: PropTypes.object,
        index: PropTypes.number,
        field: PropTypes.object,
        renderer: PropTypes.func
    };

    public static defaultProps = {
        renderer: GridRowCell.renderCell
    };

    public render() {
        const {name, item, index, field, renderer, className, children, ...props} = this.props;
        const classNames = ClassNames(
            gridStyle.bGridRowCell,
            className
        );

        const cellRenderer = field.renderer || renderer;

        return (
            <Cell key={`grid-row-cell-${name}`} className={classNames} {...toJS(field.cell)} {...props}>
                {`${cellRenderer(name, item, index, field)}`}
            </Cell>
        );
    }

    public static renderCell(name: string, item?: Props<any>, index?: number, field?: GridField): React.ReactChild {
        const alias = field.alias || name;
        const names = alias.split("\.");
        if (names.length === 1) {
            return item[alias];
        }
        let result: any = item;

        for (const name of names) {
            result = result[name];
            if (!has(result)) {
                return null;
            }
        }
        return result;
    }
}
