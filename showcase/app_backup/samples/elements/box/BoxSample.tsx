import * as React from "react";
import Box from "rebul/lib/elements/box/Box";

const BoxSample: React.SFC<{}> = (props: {}) => {
    const style = { padding: '10px' };

    return (
        <Box>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
        </Box>
    )
};

export default BoxSample;
