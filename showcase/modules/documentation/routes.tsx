import {Props} from "wasabi-common";

export interface DRoute {
    Children?: Props<DRoute>;
}

const routes: Props<DRoute> = {
    Documentation: {
        Children: {
            Columns: {},
            Components: {},
            Elements: {},
            Form: {},
            Layout: {},
            Modifiers: {},
            Overview: {}
        }
    }
};

export default routes;
