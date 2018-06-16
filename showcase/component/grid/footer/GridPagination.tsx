import * as PropTypes from "prop-types";
import * as ClassNames from "classnames";
import * as React from "react";
import Stateless from "wasabi-ui/lib/Stateless";
import gridStyle from "../gridStyle";
import PaginationView, {PaginationViewOptions} from "../../layout/pagination/PaginationView";
import GridStore from "../GridStore";
import {observer} from "mobx-react";

export interface GridPaginationProps extends PaginationViewOptions {
    store: GridStore<any>;
    offset: (offset: number) => any;
}

@observer
export default class GridPagination extends Stateless<GridPaginationProps> {
    public static propTypes = {
        ...PaginationView.propTypes,
        store: PropTypes.object,
        offset: PropTypes.func
    };

    public static defaultProps = {};

    public render() {

        const {store, offset: callback, className, ...props} = this.props;

        const {offset, limit, total} = store;

        const totalPage = Math.floor((total / limit) + 1) || 1;

        const currentPage = Math.floor((offset / limit) + 1) || 1;

        const classNames = ClassNames(gridStyle.bGridPagination, className);

        return (
            <div className={classNames}>
                <PaginationView
                    current={currentPage}
                    total={totalPage}
                    onPage={(page: number) => callback((page - 1) * limit)}
                    {...props}
                />
            </div>
        );
    }
}
