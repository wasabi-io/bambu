import * as React from "react";
import ShowSample from "../../ShowSample";
import MenuSample from "./MenuSample";

const group = {
    name: "Box Sample",
    subs: [
        {
            description: "MenuSample sample 1",
            element: <MenuSample />,
            name: "Sample 1"
        }
    ]
};

const MenuSamples: React.SFC<{}> = (props: {}) => {
    return (
        <ShowSample key={group.name} {...group} />
    );
};

export default MenuSamples;
