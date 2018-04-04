# rebul

Bulma 0.6.2 components built with React.

[![npm package](https://badge.fury.io/gh/wasabi-io%2Frebul.svg)](https://badge.fury.io/gh/wasabi-io%2Frebul.svg)
[![Build Status](https://travis-ci.org/wasabi-io/rebul.svg?branch=master)](https://travis-ci.org/wasabi-io/rebul)
[![codecov](https://codecov.io/gh/wasabi-io/rebul/branch/master/graph/badge.svg)](https://codecov.io/gh/wasabi-io/rebul)

## Motivation

UI components built with `typescript` on top of `bulma` css framework.

## Summary

| Key Points    | Goal          |
| ------------- |:-------------:|
| Extended from `typescript` definition types of html elements for each react component so able to use native html attributes for each element which is supported.     | *Easy development with Typescript* |
| Used *pure functional* and stateless `react` component  | *Performance*, *Minimum source code* |
| Defined each component similar      | *Standardization* |
| Used attribute names for each component similar to related css class names which are defined in **bulma**.| *Standardization*, *Simplicity* |
| Used **bulma** sass files from node modules.| *Easy upgradable* |


### Installation 

```bash
yarn
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
