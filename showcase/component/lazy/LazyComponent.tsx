import * as React from 'react';
import {Props} from "wasabi-common";
import Loading from "../layout/loading/Loading";
import MessageView from "../layout/message/MessageView";

export interface GetComponent {
    (props: Props<any>): Promise<React.ComponentClass<Props<any>> | JSX.Element>;
}

interface asyncComponentState {
    Component: React.ComponentClass<Props<any>> | Error;
}

export function lazyComponent(getComponent: GetComponent, props: Props<any>) {
    class AsyncComponent extends React.Component<Props<any>, asyncComponentState> {
        public static Component: React.ComponentClass<Props<any>> | Error = null;

        public constructor(props: Props<any>) {
            super(props);
            this.state = {Component: AsyncComponent.Component};
        }

        public componentDidMount() {
            if (!this.state.Component) {
                getComponent(props)
                    .then((Component) => {
                        AsyncComponent.Component = Component;
                        this.setState({Component});
                    });
            }
        }

        public render() {
            const {Component} = this.state;
            if (!Component) {
                return <Loading/>;
            }
            if (Component instanceof Error) {
                return (
                    <MessageView>
                        {Component.message}
                    </MessageView>
                );
            }
            return <Component {...props} />;
        }
    }

    return AsyncComponent;
}

export interface GetComponent<P = Props<any>> {
    (props: P): Promise<React.ComponentClass<P>>;
}

export interface LazyComponentProps extends Props<any> {
    getComponent: GetComponent;
}

const LazyComponent: React.SFC<LazyComponentProps> = (props: LazyComponentProps) => {
    const {getComponent, ...componentProps} = props;
    const Component = lazyComponent(getComponent, componentProps);
    return <Component/>;
};

export default LazyComponent;
