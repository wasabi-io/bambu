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

#### **bulma** css file.

* import `bulma.css` css in html file.

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.css">
```

* if you are using bulma as css module then you have add bulma css module

```javascript
import {bulma} from "bambu";

bulma.$putAll(require('bulma/css/bulma.css'));
```

* For more information https://bulma.io/documentation/overview/start/


#### fontawesome.

* add css link to index.html file

```html
 <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
```


* For more information https://fontawesome.com/get-started

#### materialdesignicons.

* add css link to index.html file

```html
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/2.4.85/css/materialdesignicons.min.css" crossorigin="anonymous" />
```


* For more information https://materialdesignicons.com/

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
