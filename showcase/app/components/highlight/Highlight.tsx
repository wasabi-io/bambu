import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Stateless from 'wasabi-ui/lib/Stateless';
import { Button } from 'rebul/lib/elements/button';
import { Size } from 'rebul/lib/base/css';
import './highlight.css'
const hljs = require('highlight.js');

export default class Highlight extends Stateless<{}> {
  codeId = Math.random().toString(36);

  componentDidMount() {
    this.highlightCode();
  }

  componentDidUpdate() {
      this.highlightCode();
  }

  highlightCode() {
      const domNode = ReactDOM.findDOMNode(this);
      const nodes = domNode.querySelectorAll('pre code');
      for (let i = 0; i < nodes.length; i++) {
          hljs.highlightBlock(nodes[i]);
      }
  }

  copyToClipboard = () => {
    const { props: { children }, codeId } = this;
    const range = document.createRange();
    range.selectNode(document.getElementById(codeId));
    
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    try {
        document.execCommand("copy");
    } catch (err) {
        console.log("Oops, unable to copy");
    }
  }

  public render(): JSX.Element {
    const { props: { children }, copyToClipboard, codeId } = this;
    return (
      <pre
          className="hljs-pre"
        >
        <Button 
            tagName="button"
            size={Size.small}
            className="snppt-copy"
            onClick={copyToClipboard}
          >
            copy
        </Button>
        <code
          id={codeId}
          className="language-html"
        >
          {children}
        </code>
      </pre>
    );
  }
}
