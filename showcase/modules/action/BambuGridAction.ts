import GridAction from "../../component/grid/GridAction";
import BambuSearchAction from "./BambuSearchAction";

export interface BambuGridActionProps<E> {
    search: BambuSearchAction<E>;
}

export default class BambuGridAction<E> implements GridAction {
    search: BambuSearchAction<E>;

    public constructor(props: BambuGridActionProps<E>) {
        this.search = props.search;
    }
}
