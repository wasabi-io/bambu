import './highlight.css';

import * as ClassNames from 'classnames';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Size } from 'rebul/lib/base/css';
import { Button } from 'rebul/lib/elements/button';
import Stateful from 'wasabi-ui/lib/Stateful';

const hljs = require('highlight.js');

export default class Highlight extends Stateful<{ isScroll: boolean }, { isHovered: boolean }> {
  codeId = Math.random().toString(36);

  public constructor(props: any) {
    super(props);
    this.state = {
      isHovered: false
    };
  }

  componentDidMount() {
    this.highlightCode();
  }

  componentDidUpdate() {
    this.highlightCode();
  }

  highlightCode() {
    const domNode = ReactDOM.findDOMNode(this);
    const nodes = domNode.querySelectorAll('pre code');
    for (let i = 0; i < nodes.length; i = +1) {
      hljs.highlightBlock(nodes[i]);
    }
  }

  onMouseOvered() {
    this.setState({ isHovered: true });
  }

  onMouseOut() {
    this.setState({ isHovered: false });
  }

  copyToClipboard() {
    const range = document.createRange();
    range.selectNode(document.getElementById(this.codeId));

    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    try {
      document.execCommand('copy');
    } catch (err) {
      console.log('Oops, unable to copy');
    }
  }

  public render(): JSX.Element {
    const buttonClassName = ClassNames('hljs-copy', { 
      'hljs-copy-hovered': this.state.isHovered, 
    });
    const preClassName = ClassNames('hljs-pre', { 
      'hljs-pre-hovered': this.state.isHovered,
      'hljs-pre-scroll': this.props.isScroll,
    });
    return (
      <div className="hljs-content">
        <button
          className={buttonClassName}
          onMouseOver={this.onMouseOvered}
          onMouseOut={this.onMouseOut}
          onClick={this.copyToClipboard}>
          copy
        </button>
        <pre className={preClassName}>
          <code id={this.codeId} className="language-html">
            {this.props.children}
          </code>
        </pre>
      </div>
    );
  }
}
