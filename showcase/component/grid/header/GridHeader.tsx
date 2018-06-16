import * as ClassNames from "classnames";
import * as React from "react";
import Stateless from "wasabi-ui/lib/Stateless";
import {Row, THead, THeadProps} from "bambu/lib/elements/table";
import {Props} from "wasabi-common";
import GridField, {GridHeaderCellRenderer, GridHeaderRenderer} from "../GridField";
import gridStyle from "../gridStyle";
import GridHeaderCell from "./GridHeaderCell";
import GridStore from "../GridStore";
import {HTMLComponent, Vertical, verticalValues} from "bambu";
import * as PropTypes from "prop-types";
import Objects from "wasabi-common/lib/types/Objects";
import GridSearchQuery from "../search/GridSearchQuery";

export interface GridHeaderProps extends THeadProps {
    store: GridStore<any>;
    action: GridSearchQuery;
    headerRowRenderer?: GridHeaderRenderer;
    headerCellRenderer?: GridHeaderCellRenderer;
    childrenAlign?: string | Vertical;
}

export default class GridHeader extends Stateless<GridHeaderProps> {
    public static propTypes = {
        ...HTMLComponent.propTypes,
        store: PropTypes.object,
        action: PropTypes.object,
        headerRowRenderer: PropTypes.func,
        headerCellRenderer: PropTypes.func,
        childrenAlign: PropTypes.oneOf(verticalValues),
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        headerRowRenderer: GridHeader.renderRow,
        childrenAlign: Vertical.bottom
    };

    public render() {
        const {action, store, headerRowRenderer, headerCellRenderer, childrenAlign, className, children, ...props} = this.props;

        const classNames = ClassNames(gridStyle.bGridHeader, className);

        return (
            <THead key={`grid-header-${this.id}`} className={classNames} {...props}>
            {childrenAlign === Vertical.top && children}
            <Row key={`grid-header-row-${this.id}`}>
                {headerRowRenderer(store.fields, headerCellRenderer, action)}
            </Row>
            {childrenAlign === Vertical.bottom && children}
            </THead>
        );
    }

    public static renderRow(fields: Props<GridField>, cellRenderer: GridHeaderCellRenderer, action?: GridSearchQuery) {
        const elements: JSX.Element[] = [];
        let i = 0;
        const fieldCount = Objects.getLength(fields);
        for (const key in fields) {
            elements.push(
                <GridHeaderCell
                    action={action}
                    key={`grid-header-row-cell-${key}`}
                    name={key}
                    field={fields[key]}
                    renderer={cellRenderer}
                    totalField={fieldCount}
                    index={i}
                />
            );
            i = i + 1;
        }
        return elements;
    }
}
