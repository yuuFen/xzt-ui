# xzt-ui

[![img](https://img.shields.io/badge/License-MIT-yellow.svg)](https://www.npmjs.com/package/LICENSE)

## Install

`npm install element-ui -S`

## Quick Start

```
import Vue from 'vue'
import Xzt from 'xzt-ui'

Vue.use(Xzt)

// or
import {
Select,
Button
// ...
} from 'xzt-ui'

Vue.component(Select.name, Select)
Vue.component(Button.name, Button)
```

# components

## xzt-card

cover String 封面url

imgHeight string 封面高度（px）

title String 标题

id Number 对应的 id

count String 购买/观看人数

author String

price String

fill 宽度是否占满

@click pop ID
