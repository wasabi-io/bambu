import * as React from 'react';
import NotFound from './modules/NotFound';

export default function asyncComponent(getComponent: Function) {
  return class AsyncComponent extends React.Component {
    static Component: any = null;
    state = {
      Component: AsyncComponent.Component
    };

    componentWillMount() {
      if (!this.state.Component) {
        getComponent().then((Component: any) => {
          AsyncComponent.Component = Component
          this.setState({ Component })
        }).catch((error: Error) => {
          console.log(error);
          this.setState({ Component: NotFound })
        });
      }
    }
    render() {
      const { Component } = this.state;
      if (Component) {
        return <Component {...this.props} />
      }
      return null
    }
  }
}