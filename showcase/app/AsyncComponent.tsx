import * as React from 'react';

import NotFound from './modules/NotFound';

export default function asyncComponent(getComponent: Function) {
  return class AsyncComponent extends React.Component {
    static COMPONENT: any = null;
    state = {
      COMPONENT: AsyncComponent.COMPONENT
    };

    componentWillMount() {
      if (!this.state.COMPONENT) {
        getComponent().then((COMPONENT: any) => {
          AsyncComponent.COMPONENT = COMPONENT;
          this.setState({ COMPONENT });
        }).catch((error: Error) => {
          console.log(error);
          this.setState({ Component: NotFound });
        });
      }
    }
    render() {
      const { COMPONENT } = this.state;
      if (COMPONENT) {
        return <COMPONENT {...this.props} />;
      }
      return null;
    }
  };
}
