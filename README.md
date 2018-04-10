# rebul

Seamless integration with [**Bulma**](https://bulma.io/)

[![npm package](https://badge.fury.io/gh/wasabi-io%2Frebul.svg)](https://badge.fury.io/gh/wasabi-io%2Frebul.svg)
[![Build Status](https://travis-ci.org/wasabi-io/rebul.svg?branch=master)](https://travis-ci.org/wasabi-io/rebul)

## Motivation

UI components built with `typescript` on top of `bulma` css framework.

#### Key Points

| Key   | Goal          |
| ------------- |:-------------:|
| Extended from `typescript` definition types of html elements for each react component so able to use native html attributes for each element which is supported.     | *Easy development with Typescript* |
| Used *pure functional* and stateless `react` component  | *Performance*, *Minimum source code* |
| Defined each component similar      | *Standardization* |
| Used attribute names for each component similar to related css class names which are defined in **bulma**.| *Standardization*, *Simplicity* |
| Used **bulma** sass files from node modules.| *Easy upgradable* |


### Configuration

* install
```bash
yarn
```

##### conversion of **bulma** sass file.

* webpack
> add *sass-loader* to the webpack configuration.

```javascript
{
        test: /\.sass$/,
        use: [
            {loader: 'style-loader', options: {sourceMap: true}},
            {loader: 'sass-loader', options: {sourceMap: true, modules: true}}
        ]
}
```

## Documentation ( Showcase )

##### Development 

* Start showcase in development mode.
```bash
yarn start
```

##### Production 

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

rebul is [wtfpl](http://www.wtfpl.net/) licensed.
