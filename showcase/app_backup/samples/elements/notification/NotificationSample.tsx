import * as React from "react";
import Notification from "rebul/lib/elements/notification/Notification";
import { Color } from "rebul/lib/base/css";
import Collection from "wasabi-common/lib/collection/Collection";


const renderNotification = (color: any) => {
    return (
        <Notification
            closeButton={{ onClick: () => console.log('clicked') }}
            closeable
            color={color}
            style={{ margin: "20px" }}
        >
            lorem ipsum dolor sit amet, consectetur
            adipiscing elit lorem ipsum dolor sit amet,
            consectetur adipiscing elit
        </Notification>
    )
};

const NotificationSample: React.SFC<{}> = (props: {}) => {
    return (
        <div>
            { Collection.mapObject(Color as any, (color) => renderNotification(color)) }
        </div>
    )
};

export default NotificationSample;
