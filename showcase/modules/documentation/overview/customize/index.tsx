import * as React from "react";
import {Stateless} from "wasabi-ui";

export default class Index extends Stateless <any> {
    public render() {
        return (
            <div>
                <div className="content">
                    <p>If you're familiar with <a href="http://sass-lang.com/">Sass</a> and want to <strong>customize</strong> Bulma with your own colors and variables, just install Bulma via <strong>npm</strong>:</p>
                </div>

                <article className="media is-large">
                    <div className="media-left">
                        <p className="title is-5">1</p>
                    </div>
                    <div className="media-content">
                        <p className="title is-5">
                            <strong>Download</strong> the source files:
                        </p>
                        <figure className="highlight">
                            <pre><code className="language-bash" data-lang="bash">npm install bulma</code></pre>
                            <button className="button is-small bd-copy">Copy</button>
                        </figure>
                        <div className="content">or clone the repository: <a href="https://github.com/jgthms/bulma">https://github.com/jgthms/bulma</a></div>
                    </div>
                </article>

                <article className="media is-large">
                    <div className="media-left">
                        <p className="title is-5">2</p>
                    </div>
                    <div className="media-content">
                        <p className="title is-5">
                            <strong>Set</strong> your variables
                        </p>
                        <p className="subtitle is-6">
                            Create a file called <code>mystyles.scss</code> and add your own colors, set new fonts, override Bulma's default styles...
                        </p>
                        <div className="highlight-full">
                            <figure className="highlight"><pre><code className="language-sass" data-lang="sass"><span className="c1">// 1. Import the initial variables
</span><span className="k">@import</span> <span className="s">"../sass/utilities/initial-variables";</span>
<span className="k">@import</span> <span className="s">"../sass/utilities/functions";</span>

<span className="c1">// 2. Set your own initial variables
// Update blue
</span><span className="nv">$blue</span><span className="p">:</span> <span className="mh">#72d0eb</span><span className="err">;</span>
<span className="c1">// Add pink and its invert
</span><span className="nv">$pink</span><span className="p">:</span> <span className="mh">#ffb3b3</span><span className="err">;</span>
<span className="nv">$pink-invert</span><span className="p">:</span> <span className="mh">#fff</span><span className="err">;</span>
<span className="c1">// Add a serif family
</span><span className="nv">$family-serif</span><span className="p">:</span> <span className="s2">"Merriweather"</span><span className="o">,</span> <span className="s2">"Georgia"</span><span className="o">,</span> <span className="nb">serif</span><span className="err">;</span>

<span className="c1">// 3. Set the derived variables
// Use the new pink as the primary color
</span><span className="nv">$primary</span><span className="p">:</span> <span className="nv">$pink</span><span className="err">;</span>
<span className="nv">$primary-invert</span><span className="p">:</span> <span className="nv">$pink-invert</span><span className="err">;</span>
<span className="c1">// Use the existing orange as the danger color
</span><span className="nv">$danger</span><span className="p">:</span> <span className="nv">$orange</span><span className="err">;</span>
<span className="c1">// Use the new serif family
</span><span className="nv">$family-primary</span><span className="p">:</span> <span className="nv">$family-serif</span><span className="err">;</span>

<span className="c1">// 4. Setup your Custom Colors
</span><span className="nv">$linkedin</span><span className="p">:</span> <span className="mh">#0077b5</span><span className="err">;</span>
<span className="nv">$linkedin-invert</span><span className="p">:</span> <span className="nf">findColorInvert</span><span className="p">(</span><span className="nv">$linkedin</span><span className="p">)</span><span className="err">;</span>
<span className="nv">$twitter</span><span className="p">:</span> <span className="mh">#55acee</span><span className="err">;</span>
<span className="nv">$twitter-invert</span><span className="p">:</span> <span className="nf">findColorInvert</span><span className="p">(</span><span className="nv">$twitter</span><span className="p">)</span><span className="err">;</span>
<span className="nv">$github</span><span className="p">:</span> <span className="mh">#333</span><span className="err">;</span>
<span className="nv">$github-invert</span><span className="p">:</span> <span className="nf">findColorInvert</span><span className="p">(</span><span className="nv">$github</span><span className="p">)</span><span className="err">;</span>

<span className="c1">// 5. Add new color variables to the color map.
</span><span className="k">@import</span> <span className="s">"../sass/utilities/derived-variables";</span>
<span className="nv">$addColors</span><span className="p">:</span> <span className="p">(</span>
  <span className="err">"</span><span className="na">twitter</span><span className="err">"</span><span className="p">:(</span><span className="nv">$twitter</span><span className="o">,</span> <span className="nv">$twitter-invert</span><span className="p">)</span><span className="o">,</span>
  <span className="err">"</span><span className="na">linkedin</span><span className="err">"</span><span className="p">:</span> <span className="p">(</span><span className="nv">$linkedin</span><span className="o">,</span> <span className="nv">$linkedin-invert</span><span className="p">)</span><span className="o">,</span>
  <span className="err">"</span><span className="na">github</span><span className="err">"</span><span className="p">:</span> <span className="p">(</span><span className="nv">$github</span><span className="o">,</span> <span className="nv">$github-invert</span><span className="p">)</span>
<span className="o">);</span>
<span className="nv">$colors</span><span className="p">:</span> <span className="nf">map-merge</span><span className="p">(</span><span className="nv">$colors</span><span className="o">,</span> <span className="nv">$addColors</span><span className="p">)</span><span className="err">;</span>

<span className="c1">// 6. Import the rest of Bulma
</span><span className="k">@import</span> <span className="s">"../bulma";</span></code></pre>
                                <button className="button is-small bd-copy">Copy</button>
                            </figure>
                        </div>
                    </div>
                </article>

                <article className="media is-large">
                    <div className="media-left">
                        <p className="title is-5">3</p>
                    </div>
                    <div className="media-content">
                        <p className="title is-5">
                            See the <strong>result</strong>: before and after
                        </p>
                        <p className="subtitle is-6">
                            As <code>$blue</code> has been updated, and since <code>$blue-invert</code> is automatically calculated with the <strong>function</strong> <code>$blue-invert: findColorInvert($blue)</code>, the <code>$blue-invert</code> is now black instead of white</p>
                        <p></p>
                        <figure>
                            <img width="640" height="640" src="https://bulma.io/images/customize-before.png" alt="Customizing Bulma with Sass" />
                                <img width="640" height="640" src="https://bulma.io/images/customize-after.png" alt="Customizing Bulma with Sass" />
                        </figure>
                    </div>
                </article>
            </div>
        );
    }
}
