import { Action, createHashHistory, History, Location, UnregisterCallback } from 'history';
import { observable } from 'mobx';
import Binder from 'wasabi-common/lib/lang/Binder';
import { Props } from 'wasabi-common/lib/types/Objects';

export interface Route {
  name: string;
  description: string;
  page: boolean;
  routes?: Props<Route>;
}
export interface RouteStoreProps {
  loader: <T>(path: string, options?: Props) => Promise<T>;
  routes: Props<Route>;
}

export class RouteStore extends Binder {
  private history: History;
  private unRegister: UnregisterCallback;

  private props: RouteStoreProps;

  @observable
  public path: string;
  @observable
  public action: Action;

  public constructor(props: RouteStoreProps) {
    super();
    this.props = props;
    this.history = createHashHistory({
      basename: '',             // The base URL of the app (see below)
      // A function to use to confirm navigation with the user (see below)
      getUserConfirmation: (message, callback) => {
        return callback(window.confirm(message));
      },
      hashType: 'slash'
    });
  }

  public listen() {
    this.unRegister = this.history.listen(this.onListen);
  }

  public onListen(location: Location, action: Action) {
    this.path = location.pathname;
    this.action = action;
    console.log(action, location.pathname, location.state);
  }

  public unListen() {
    if (this.unRegister) {
      this.unRegister();
      this.unRegister = null;
    }
  }
}

export default RouteStore;
