import * as React from 'react';
import Stateless from 'wasabi-ui/lib/Stateless';
import Highlight from '../highlight';
import './snippet.css';
const jsxToString =  require('jsx-to-string');

export default class Snippet extends Stateless<{}> {
  public render(): JSX.Element {
    const { props: { children } } = this;
    return (
      <div className="snppt">
        <div className="snppt-preview">
            {children}
        </div>
        <Highlight>
          {jsxToString(children, {
              shortBooleanSyntax: true,
          })}
        </Highlight>
      </div>
    );
  }
}
