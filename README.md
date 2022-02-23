<h1 align="center">Welcome to @kazura/vue-portal 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/@kazura/vue-portal" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@kazura/vue-portal.svg">
  </a>
  <a href="https://github.com/kazura233/vue-portal/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> vue-portal

### 🏠 [Homepage](https://github.com/kazura233/vue-portal)

## Install

```sh
yarn add @kazura/vue-portal
```

## Usage

```javascript
import { createComponent, destroyVM } from '@kazura/vue-portal'

const Component = {
  props: {
    title: String,
  },
  render(h) {
    return h('h1', this.title)
  },
}

const vm = createComponent(Component, { title: 'Test' }, true)
destroyVM(vm)
```

## Author

👤 **kazura233**

- Website: https://github.com/kazura233
- Github: [@kazura233](https://github.com/kazura233)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/kazura233/vue-portal/issues).

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
