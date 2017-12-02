import * as React from "react";
import ColumnSample1 from "./ColumnSample1";
import ColumnSample2 from "./ColumnSample2";
import ColumnSample3 from "./ColumnSample3";
import ColumnSample4 from "./ColumnSample4";


export default {
    name: "Columns Sample",
    subs: [
        {
            name: "Sample 1",
            description: "Column sample 1",
            element: <ColumnSample1 />
        },
        {
            name: "Sample 2",
            description: "Column sample 2",
            element: <ColumnSample2 />
        },
        {
            name: "Sample 3",
            description: "Column sample 3",
            element: <ColumnSample3 />
        },
        {
            name: "Sample 4",
            description: "Column sample 4",
            element: <ColumnSample4 />
        }
    ]
};
