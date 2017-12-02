import * as React from "react";
import { Container } from "rebul/lib/elements/container";
import { Notification } from "rebul/lib/elements/notification";
import {Color} from "rebul/lib/base/css";

const ContainerSample4: React.SFC<{}> = (props: {}) => {
    return (
        <Container wideScreen>
            <Notification>
                This container is <strong>wideScreen</strong> on desktop.
            </Notification>
        </Container>
    )
};

export default ContainerSample4;
