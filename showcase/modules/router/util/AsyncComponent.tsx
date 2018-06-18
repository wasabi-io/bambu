import * as React from 'react';
import NotFound from '../../../view/NotFound';

export default function asyncComponent(getComponent: Function) {
    return class AsyncComponent extends React.Component {
        static COMPONENT: any = null;
        state = {
            isMounted: false,
            Component: AsyncComponent.COMPONENT
        };

        componentDidMount() {
            if (!this.state.Component) {
                getComponent().then((Component: any) => {
                    AsyncComponent.COMPONENT = Component;
                    this.setState({
                        Component,
                        isMounted: true,
                    });
                }).catch((error: Error) => {
                    console.log(error);
                    this.setState({
                        Component: NotFound,
                        isMounted: true
                    });
                });
            }
        }

        componentWillUnmount() {
            this.setState({
                isMounted: false
            });
        }

        render() {
            const {Component} = this.state;
            if (Component) {
                return <Component {...this.props} />;
            }
            return <div>Loading...</div>;
        }
    };
}
