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

* webpack

```bash
yarn add --dev style-loader css-modules-loader sass-loader
```

For Javascript :

```javascript
{test: /\.css$/,
    use: [
        "style-loader",
        {
            loader: 'css-loader',
            options: {
                modules: true,
                getLocalIdent: (context, localIdentName, localName, options) => {
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
