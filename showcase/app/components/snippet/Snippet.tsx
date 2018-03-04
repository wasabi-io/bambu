import * as React from 'react';
import * as ClassNames from 'classnames';
import Stateless from 'wasabi-ui/lib/Stateless';
import Highlight from '../highlight';
import './snippet.css';
const jsxToString =  require('jsx-to-string');

interface SnippetProps {
  borderless?: boolean;
  slices?: boolean;
  scrolless?: boolean;
}

export default class Snippet extends Stateless<SnippetProps> {
  static defaultProps = {
    scrolless: false,
  }
  public render(): JSX.Element {
    const { props: { children, borderless, slices, scrolless } } = this;

    const snpptClassName = ClassNames('snppt', {
      'snppt-borderless': borderless,
      'snppt-slices': slices,
    });
    return (
      <div className={snpptClassName}>
        <div className="snppt-preview">
          {children}
        </div>
        <div className="snppt-highlight">
          <Highlight scrolless={scrolless}>
            {React.Children.map(children, child => `\n${jsxToString(child, { shortBooleanSyntax: true })}`)}
          </Highlight>
        </div>
      </div>
    );
  }
}
