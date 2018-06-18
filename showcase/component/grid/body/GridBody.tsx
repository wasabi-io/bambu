import * as ClassNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import Stateless from "component/Stateless";
import {Props} from "wasabi-common";
import {HTMLComponent, Vertical, verticalValues} from "bambu";
import TBody, {TBodyProps} from "bambu/lib/elements/table/TBody";
import {GridRowCellRenderer, GridRowRenderer} from "../GridField";
import gridStyle from "../gridStyle";
import GridRow from "./GridRow";
import {observer} from "mobx-react";
import GridStore from "../GridStore";

export interface GridBodyProps extends TBodyProps {
    store: GridStore<Props<any>>;
    cellRenderer?: GridRowCellRenderer;
    rowRenderer?: GridRowRenderer;
    childrenAlign?: string | Vertical;
}

@observer
export default class GridBody extends Stateless<GridBodyProps> {
    public static propTypes = {
        ...HTMLComponent.propTypes,
        store: PropTypes.object,
        rowRenderer: PropTypes.func,
        cellRenderer: PropTypes.func,
        childrenAlign: PropTypes.oneOf(verticalValues)
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        childrenAlign: Vertical.bottom
    };

    public render() {
        const {store, childrenAlign, rowRenderer, cellRenderer, className, children, ...props} = this.props;

        const classNames = ClassNames(gridStyle.bGridBody, className);

        return (
            <TBody className={classNames} {...props}>
            {childrenAlign === Vertical.top && children}
            {GridBody.renderRows(store, rowRenderer, cellRenderer)}
            {childrenAlign === Vertical.bottom && children}
            </TBody>
        );
    }

    public static renderRows(store: GridStore<Props<any>>, rowRenderer?: GridRowRenderer, cellRenderer?: GridRowCellRenderer) {
        const elements: JSX.Element[] = [];
        for (let i = 0; i < store.items.length; i = i + 1) {
            const item = store.items[i];
            elements.push(
                <GridRow
                    key={`grid-row-${i}`}
                    fields={store.fields}
                    item={item}
                    index={i}
                    renderer={rowRenderer}
                    cellRenderer={cellRenderer}
                />
            );
        }
        return elements;
    }
}
