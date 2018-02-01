import { Action, createHashHistory, History, Location, UnregisterCallback } from 'history';
import { IObservableValue, observable } from 'mobx';
import { asEs6Module } from 'wasabi-common';
import Binder from 'wasabi-common/lib/lang/Binder';
import { Props } from 'wasabi-common/lib/types/Objects';

export interface SelectorStoreProps {
  import: <T>(path: string, options: Props) => Promise<T>;
}

export default class SelectorStore extends Binder {
  private history: History;
  private unRegister: UnregisterCallback;

  @observable
  public path: string;

  @observable
  public component: React.ComponentClass = null;

  @observable
  public action: Action;

  private props: SelectorStoreProps;

  public constructor(props: SelectorStoreProps) {
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
    this.props
      .import(this.path, {})
      .then((module) => {
        this.component = asEs6Module(module);
      });
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
