import * as ClassNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import Stateless from "component/Stateless";
import {Row, RowProps} from "bambu/lib/elements/table";
import gridStyle from "../gridStyle";
import {has, Props} from "wasabi-common";
import GridField, {GridRowCellRenderer, GridRowRenderer} from "../GridField";
import GridRowCell from "./GridRowCell";
import {HTMLComponent} from "bambu";
import {observer} from "mobx-react";

export interface GridRowProps extends RowProps {
    fields: Props<GridField>;
    item: Props<any>;
    index: number;
    renderer?: GridRowRenderer;
    cellRenderer?: GridRowCellRenderer;
}

@observer
export default class GridRow extends Stateless<GridRowProps> {
    public static propTypes = {
        ...HTMLComponent.propTypes,
        fields: PropTypes.object,
        item: PropTypes.object,
        index: PropTypes.number,
        renderer: PropTypes.func,
        cellRenderer: PropTypes.func
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        renderer: GridRow.renderRow
    };

    public render() {
        const {fields, item, index, cellRenderer, className, children, renderer, ...props} = this.props;

        const classNames = ClassNames(
            gridStyle.bGridRow,
            gridStyle[`b-grid-row-${ index % 2 === 0 ? "single" : "pair"}`],
            className);

        return (
            <Row key={`grid-header-${this.id}`} className={classNames} {...props}>
                {has(fields) ?
                    renderer(fields, item, index, cellRenderer) :
                    children
                }
            </Row>
        );
    }

    public static renderRow(fields: Props<GridField>, item: Props<any>, index: number, cellRender: GridRowCellRenderer) {
        const elements: JSX.Element[] = [];
        for (const key in fields) {
            elements.push(<GridRowCell
                    key={`grid-row-cell-${key}`}
                    name={key}
                    index={index}
                    field={fields[key]}
                    item={item}
                    renderer={cellRender}
                />
            );
        }
        return elements;
    }
}
