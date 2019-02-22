# imax-ui

![GitHub package.json version](https://img.shields.io/github/package-json/v/ByChoo/imax-ui.svg)
![GitHub](https://img.shields.io/github/license/ByChoo/imax-ui.svg)

A UI Components Library

## Install

```bash
$ npm install imax-ui --save
```

## Usage

### Global Use

```js
import Vue from 'vue';
import imaxUi from 'imax-ui';

Vue.use(imaxUi);
```

### Local Use
```js
import Vue from 'vue';
import Button from 'imax-ui/dist/button';

Vue.use(Button);

// or

Vue.component(Button.name, Button);
```

## LICENSE

[MIT](https://github.com/ByChoo/imax-ui/blob/master/LICENSE)
