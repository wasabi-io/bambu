import * as ClassNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import {Props} from "wasabi-common";
import {observer} from "mobx-react";
import Stateless from "component/Stateless";
import {Table} from "bambu/lib/elements/table";
import gridStyle from "./gridStyle";
import {HTMLComponent, HTMLSectionProps, Vertical} from "bambu";
import {GridBody} from "./body";
import {GridHeader} from "./header";
import GridStore from "./GridStore";
import {GridHeaderCellRenderer, GridHeaderRenderer, GridRowCellRenderer, GridRowRenderer} from "./GridField";
import GridPagination from "./footer/GridPagination";
import GridAction from "./GridAction";

export interface GridProps extends HTMLSectionProps {
    action: GridAction;
    store: GridStore<Props<any>>;
    headerRowRenderer?: GridHeaderRenderer;
    headerCellRenderer?: GridHeaderCellRenderer;
    rowRenderer?: GridRowRenderer;
    cellRenderer?: GridRowCellRenderer;
    childrenAlign?: string | Vertical;
    headerClassName?: string;
}

@observer
export default class Grid extends Stateless<GridProps> {
    public static propTypes = {
        ...GridBody.propTypes,
        ...GridHeader.propTypes,
        headerClassName: PropTypes.string
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps
    };

    public render(): JSX.Element {
        const {action, store, headerRowRenderer, headerCellRenderer, rowRenderer, cellRenderer, className, childrenAlign, children, ...props} = this.props;

        const classNames = ClassNames(gridStyle.bGridContainer, className);

        return (
            <section className={classNames}>
                {childrenAlign === Vertical.top && children}
                <Table className={gridStyle.bGridTable}>
                    <GridHeader action={action.search} store={store} headerRowRenderer={headerRowRenderer} headerCellRenderer={headerCellRenderer}/>
                    <GridBody store={store} rowRenderer={rowRenderer} cellRenderer={cellRenderer}/>
                </Table>
                <GridPagination store={store} offset={action.search.offset}/>
                {childrenAlign === Vertical.bottom && children}
            </section>
        );
    }
}
