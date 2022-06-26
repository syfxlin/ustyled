# ustyled

## Introduction

ustyled（**styled**-system, **u**til） 是一个基于 CSS-in-JS 的工具库，旨在为 CSS-in-JS 添加类似 styled-system 的编写方式，同时避免使用 styled-system 导致的一些问题。

## Features

- 函数式主题
- 暗色模式支持
- 快速应用调色板
- 按比例排版

## Installation

```shell
npm i @syfxlin/ustyled
```

**注意事项**：目前 ustyled 还处于早期测试阶段，可能会存在一些问题，请避免用于重要的项目中。

## Usage

见 `demo/Demo.tsx`

## Tip

v1 采用了较为激进的方式对样式进行预处理，因此造成了很多问题，导致在一些场景下出现无法处理的情况。
由于不能顾及所有方面，因此采用模板字符串的方式注入主题变量 `${u.color('blue1', 'blue2')}`

v2 同时改进了主题的定义方式，如下，你可以通过 `prop` 定义字段名称，通过 `animation-delay: ${u.d(1)};` 方式进行定义，
ustyled 会通过 `css` 将参数处理成字符串，并替换定义的字符，如转换后为 `animation-delay: 1s;`。

```typescript
export const delay = style({
  prop: ["d", "delay"],
  css: () => (value: string | number) => {
    if (typeof value === "number") {
      return `${value}s`;
    }
    return value;
  },
});
```

## Maintainer

ustyled 由 [Otstar Lin](https://ixk.me/)
和下列 [贡献者](https://github.com/syfxlin/ustyled/graphs/contributors)
的帮助下撰写和维护。

> Otstar Lin - [Personal Website](https://ixk.me/) · [Blog](https://blog.ixk.me/) · [Github](https://github.com/syfxlin)

## License

![License](https://img.shields.io/github/license/syfxlin/ustyled.svg?style=flat-square)

根据 Apache License 2.0 许可证开源。
