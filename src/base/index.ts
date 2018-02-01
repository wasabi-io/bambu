import { StatelessComponent } from 'react';
import { Props } from 'wasabi-common/lib/types/Objects';

export interface ThemeStatelessComponent<P, S extends Props = Props> extends StatelessComponent<P> {
  styles?: S;
}

export type bSFC<P = {}> = ThemeStatelessComponent<P>;
