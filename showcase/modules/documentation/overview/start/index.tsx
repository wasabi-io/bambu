import * as React from "react";
import {Stateless} from "wasabi-ui";

export default class Index extends Stateless <any> {
    public render() {
        return (
            <div>
                <div className="content">
                    <p>
                        There are several ways to <strong>get started</strong> with Bulma. You can either:
                    </p>
                    <ol>
                        <li>
                            use <strong>npm</strong> to install the Bulma package
                        </li>
                        <li>
                            use the cdnjs <strong>CDN</strong> to link to the Bulma stylesheet
                        </li>
                        <li>
                            use the <strong>GitHub repository</strong> to get the latest development version
                        </li>
                    </ol>
                </div>

                <article className="media is-large">
                    <div className="media-left">
                        <p className="title is-5">1</p>
                    </div>
                    <div className="media-content">
                        <p className="title is-5">
                            Use <strong>NPM</strong> <em>(recommended)</em>:
                        </p>
                        <figure className="highlight">
                            <pre><code className="language-bash" data-lang="bash">npm install bulma</code></pre>
                            <button className="button is-small bd-copy">Copy</button>
                        </figure>
                    </div>
                </article>

                <article className="media is-large">
                    <div className="media-left">
                        <p className="title is-5">2</p>
                    </div>
                    <div className="media-content">
                        <p className="title is-5">
                            Use the <a href="https://cdnjs.com/" target="_blank">cdnjs</a> <strong>CDN</strong>
                            <br/>
                            <a href="https://cdnjs.com/libraries/bulma">https://cdnjs.com/libraries/bulma</a>
                        </p>
                    </div>
                </article>

                <article className="media is-large">
                    <div className="media-left">
                        <p className="title is-5">3</p>
                    </div>
                    <div className="media-content">
                        <p className="title is-5">
                            Download from the <strong>repository</strong>
                            <br/>
                            <a href="https://github.com/jgthms/bulma/tree/master/css">https://github.com/jgthms/bulma/tree/master/css</a>
                        </p>
                    </div>
                </article>

                <hr/>

                <div className="message is-info">
                    <div className="message-header">
                        Font Awesome icons
                    </div>
                    <div className="message-body">
                        <p>If you want to use icons with Bulma, don't forget to include <a href="https://fontawesome.com">Font Awesome 5</a>:</p>
                        <figure className="highlight">
                            <pre><code className="language-html" data-lang="html"><span className="nt">&lt;script </span><span className="na">defer</span> <span className="na">src=</span><span className="s">"https://use.fontawesome.com/releases/v5.0.7/js/all.js"</span><span className="nt">&gt;&lt;/script&gt;</span></code></pre>
                            <button className="button is-small bd-copy">Copy</button>
                        </figure>
                    </div>
                </div>

                <hr className="hr" style={{
                    marginBottom: 0
                }}/>

                <h3 id="code-requirements" className="title is-4 is-spaced bd-anchor-title">
  <span className="bd-anchor-name">
    Code requirements
  </span>
                    <a className="bd-anchor-link" href="#code-requirements">
                        #
                    </a>
                </h3>
                <div className="content">
                    <p>
                        For Bulma to work correctly, you need to make your webpage <strong>responsive</strong>.
                    </p>
                </div>

                <article className="media is-large">
                    <div className="media-left">
                        <p className="title is-5">1</p>
                    </div>
                    <div className="media-content">
                        <p className="title is-5">
                            Use the <strong>HTML5 doctype</strong>
                        </p>
                        <figure className="highlight">
                            <pre><code className="language-html" data-lang="html"><span className="cp">&lt;!DOCTYPE html&gt;</span></code></pre>
                            <button className="button is-small bd-copy">Copy</button>
                        </figure>
                    </div>
                </article>

                <article className="media is-large">
                    <div className="media-left">
                        <p className="title is-5">2</p>
                    </div>
                    <div className="media-content">
                        <p className="title is-5">
                            Add the responsive <strong>viewport</strong> meta tag
                        </p>
                        <figure className="highlight">
                            <pre><code className="language-html" data-lang="html"><span className="nt">&lt;meta</span> <span className="na">name=</span><span className="s">"viewport"</span> <span className="na">content=</span><span className="s">"width=device-width, initial-scale=1"</span><span className="nt">&gt;</span></code></pre>
                            <button className="button is-small bd-copy">Copy</button>
                        </figure>
                    </div>
                </article>

                <hr className="hr" style={{
                    marginBottom: 0
                }}/>

                <h3 id="starter-template" className="title is-4 is-spaced bd-anchor-title">
  <span className="bd-anchor-name">
    Starter template
  </span>
                    <a className="bd-anchor-link" href="#starter-template">
                        #
                    </a>
                </h3>
                <div className="content">
                    <p>
                        If you want to get started <strong>right away</strong>, you can use this <strong>HTML starter template</strong>. Just copy/paste this code in a file and save it on your computer.
                    </p>
                </div>

                <div className="bd-example highlight-full">
                    <figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="cp">&lt;!DOCTYPE html&gt;</span>
<span className="nt">&lt;html&gt;</span>
  <span className="nt">&lt;head&gt;</span>
    <span className="nt">&lt;meta</span> <span className="na">charset=</span><span className="s">"utf-8"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;meta</span> <span className="na">name=</span><span className="s">"viewport"</span> <span className="na">content=</span><span className="s">"width=device-width, initial-scale=1"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;title&gt;</span>Hello Bulma!<span className="nt">&lt;/title&gt;</span>
    <span className="nt">&lt;link</span> <span className="na">rel=</span><span className="s">"stylesheet"</span> <span className="na">href=</span><span className="s">"https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;script </span><span className="na">defer</span> <span className="na">src=</span><span className="s">"https://use.fontawesome.com/releases/v5.0.7/js/all.js"</span><span className="nt">&gt;&lt;/script&gt;</span>
  <span className="nt">&lt;/head&gt;</span>
  <span className="nt">&lt;body&gt;</span>
  <span className="nt">&lt;section</span> <span className="na">class=</span><span className="s">"section"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"container"</span><span className="nt">&gt;</span>
      <span className="nt">&lt;h1</span> <span className="na">class=</span><span className="s">"title"</span><span className="nt">&gt;</span>
        Hello World
      <span className="nt">&lt;/h1&gt;</span>
      <span className="nt">&lt;p</span> <span className="na">class=</span><span className="s">"subtitle"</span><span className="nt">&gt;</span>
        My first website with <span className="nt">&lt;strong&gt;</span>Bulma<span className="nt">&lt;/strong&gt;</span>!
      <span className="nt">&lt;/p&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
  <span className="nt">&lt;/section&gt;</span>
  <span className="nt">&lt;/body&gt;</span>
<span className="nt">&lt;/html&gt;</span></code></pre>
                        <button className="button is-small bd-copy">Copy</button>
                    </figure>
                </div>

                <hr className="hr" style={{
                    marginBottom: 0
                }}/>

                <h3 id="bulma-start" className="title is-4 is-spaced bd-anchor-title">
  <span className="bd-anchor-name">
    bulma-start
  </span>
                    <a className="bd-anchor-link" href="#bulma-start">
                        #
                    </a>
                </h3>
                <div className="content">
                    <p>
                        <code><a href="/bulma-start/">bulma-start</a></code> is a tiny npm package that includes the <code>npm</code> dependencies you need to build your own website with Bulma.
                    </p>
                    <p>
                        <a className="button is-link" href="/bulma-start/">Check it out</a>
                    </p>
                </div>
            </div>
        );
    }
}
