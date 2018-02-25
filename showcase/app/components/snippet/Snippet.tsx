import * as React from 'react';
import * as ClassNames from 'classnames';
import Stateless from 'wasabi-ui/lib/Stateless';
import Highlight from '../highlight';
import './snippet.css';
const jsxToString =  require('jsx-to-string');

interface SnippetProps {
  borderless?: boolean;
  slices?: boolean;
}

export default class Snippet extends Stateless<SnippetProps> {
  public render(): JSX.Element {
    const { props: { children, borderless, slices } } = this;

    const snpptClassName = ClassNames('snppt', {
      'snppt-borderless': borderless,
      'snppt-slices': slices,
    });
    const highlightText = jsxToString(children, { shortBooleanSyntax: true });

    return (
      <div className={snpptClassName}>
        <div className="snppt-preview">
          {children}
        </div>
        <div className="snppt-highlight">
          <Highlight>
            {highlightText}
          </Highlight>
        </div>
      </div>
    );
  }
}
