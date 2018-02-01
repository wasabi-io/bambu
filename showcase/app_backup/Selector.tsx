import * as React from 'react';
import { Props } from 'wasabi-common/lib/types/Objects';
import { MenuLinkGenRoot } from 'rebul/lib/components/menu';
import Stateless from 'wasabi-ui/lib/Stateless';
import SelectorStore from './store/SelectorStore';
import Workspace from './Workspace';

export interface ISelector {
  import: <T>(path: string, options: Props) => Promise<T>;
}

const selectorStore = new SelectorStore({
  import: (path: string) => {
    return System.import('./samples' + path);
  }
});

const menuGenRootProps: MenuLinkGenRoot[] = require('./routes.json');

export default class Selector extends Stateless<ISelector> {

  public render(): JSX.Element {
    return (
      <div>
        <Workspace initial={'/components'} routes={menuGenRootProps} store={selectorStore} />
      </div>
    );
  }

  public componentDidMount() {
    selectorStore.listen();
  }

  public componentWillUnmount() {
    selectorStore.unListen();
  }
}
