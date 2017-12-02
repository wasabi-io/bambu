import * as React from "react";
import HeroSample from "./HeroSample";
import HeroSample2 from "./HeroSample2";

export default {
    name: "Hero Sample",
    subs: [
        {
            name: "Sample",
            description: "Hero sample 1",
            element: <HeroSample />
        },
        {
            name: "Sample",
            description: "Hero sample 2",
            element: <HeroSample2 />
        }
    ]
};

