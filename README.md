# bambu

Seamless integration with [**Bulma**](https://bulma.io/)

[![npm version](https://badge.fury.io/js/bambu.svg)](https://badge.fury.io/js/bambu)
[![Build Status](https://travis-ci.org/wasabi-io/bambu.svg?branch=master)](https://travis-ci.org/wasabi-io/bambu)

## Motivation

React Web components built with `typescript` on top of `bulma` css framework.

#### Key Points

| Key   | Goal          |
| ------------- |:-------------:|
| Extended from `typescript` definition types of html elements for each react component so able to use native html attributes for each element which is supported.     | *Easy development with Typescript* |
| Used *pure functional* and stateless `react` component  | *Performance*, *Minimum source code* |
| Defined each component similar      | *Standardization* |
| Used attribute names for each component similar to related css class names which are defined in **bulma**.| *Standardization*, *Simplicity* |
| Used **bulma** sass files from node modules.| *Easy upgradable* |


### Configuration

#### installation

* install dependencies *bulma*, *react*,*prop-types*
```bash
yarn add bulma react prop-types
```

* install
```bash
yarn add bambu
```

#### conversion of **bulma** css file.

##### for webpack

```bash
yarn add --dev style-loader css-modules-loader sass-loader
```

* add css loader with [modules:true] parameter.

```javascript

const getLocalIdent = require("css-loader/lib/getLocalIdent");

...

{
    test: /\.css$/,
    use: [
        "style-loader",
        {
            loader: 'css-loader',
            options: {
                modules: true
            }
        }
    ]
}
```

if you have some problem to do all css files as modules then add the the following configuration.
This configuration provide to applied css modules just for files which is filename include *bulma.css*.

```javascript
{
    test: /\.css$/,
    use: [
        "style-loader",
        {
            loader: 'css-loader',
            options: {
                modules: true
                getLocalIdent: (context, localIdentName, localName, options) => {
                   if(context.resource && context.resource.indexOf("bulma.css") !== -1) {
                       return getLocalIdent(context, localIdentName, localName, options);
                   }
                   return localName;
                }
            }
        }
    ]
}
```

## Documentation ( Showcase )

#### Development

* Start showcase in development mode.
```bash
yarn start
```

#### Production

* build showcase
```bash
yarn showcase:build
```

* serve showcase (port: 8282)
```bash
yarn showcase:serve
```

## Contributions

Yes please! See the [contributing guidelines](./Contributing.md) for details.

## License

bambu is [wtfpl](http://www.wtfpl.net/) licensed.
