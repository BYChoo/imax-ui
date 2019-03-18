<p align="center">
  <img height="150"  width="150" src="https://github.com/imax-ui/imax-ui/blob/master/public/logo.png"/>
</p>

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

## Browser Support
Modern browsers and Internet Explorer 10+.

## Changelog
Detailed changes for each release are documented in the [release notes](https://github.com/BYChoo/imax-ui/releases)

## Todo list
Please view this file for participating projects [todo list](https://github.com/BYChoo/imax-ui/blob/master/todolist.md)

## LICENSE

[MIT](https://github.com/ByChoo/imax-ui/blob/master/LICENSE)
