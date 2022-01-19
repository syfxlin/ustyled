# ustyled

## Introduction

ustyled（**styled**-system, **u**til） 是一个基于 [Emotion](https://github.com/emotion-js/emotion) 的 CSS-in-JS 工具库，旨在为 Emotion 添加类似 styled-system 的编写方式，同时避免使用 styled-system 导致的一些问题。

## Features

- 通过 CSS prop 添加样式
- 函数式主题
- 暗色模式支持
- 快速应用调色板
- 适用于大多数 CSS-in-JS 库，不过目前仅适配 Emotion
- 按比例排版

## Installation

```shell
npm i @syfxlin/ustyled
```

**注意事项**：目前 ustyled 还处于早期测试阶段，可能会存在一些问题，请避免用于重要的项目中。

## Usage

```typescript jsx
import React from "react";
import { useU, UstyledProvider } from "@syfxlin/ustyled";

const Root: React.FC = () => {
  return (
    <UstyledProvider>
      <Demo />
    </UstyledProvider>
  );
};

const Demo: React.FC = () => {
  const u = useU();
  return (
    <div
      css={[
        u.m([2, 4, 6, 8, 10, 12]),
        u.bg("blue5"),
        u.color("green8"),
        u.d("flex"),
        u.align("center"),
        u.justify("center"),
        {
          width: 100,
          height: 100,
        },
        u.animation("spin", {
          duration: "10s",
          infinite: true,
          timingFn: "in-out",
          delay: "3s",
        }),
      ]}
    >
      Text
    </div>
  );
};
```

ustyled 内置了一些常见的 css api，以及一套简单的默认主题，如果默认的设置不适合您，可以按照以下方式进行自定义：

```typescript jsx
import React from "react";
import {
  UstyledApi,
  api as defaultApi,
  UstyledTheme,
  defaultTheme,
  UstyledProvider,
} from "@syfxlin/ustyled";

const api: UstyledApi = (theme) => ({
  ...defaultApi(theme),
  cleanfix: {}, // ...any
});

const theme: UstyledTheme = {
  ...defaultTheme,
  other: {}, // ...any
};

const Root: React.FC = () => {
  return (
    <UstyledProvider api={api} theme={theme}>
      <Demo />
    </UstyledProvider>
  );
};

const Demo: React.FC = () => {
  const u = useU();
  const other = u.theme.other;
  return <div css={[u.clearfix]}>Text</div>;
};
```

## Why use this?

这个 CSS-in-JS 工具库主要用于解决以下几个问题：

1. styled-system：直接使用 React 组件 props 传递样式，导致和组件的 props 冲突。
2. sx prop：使用 sx prop 方式在传递中会遇到样式覆盖问题，如有一个基础组件 Base 使用 sx prop 设置了 `width: 100%`，当另一个组件 Demo 使用 Base 时设置了 `height: 100%`，由于传递过程中需要对 props 进行 assign 会导致 Base 设置的样式丢失。为了避免丢失，需要对 sx prop 进行手动 merge。
3. theme specification：绝大多数使用了 CSS-in-JS 的 UI 库都会定义一套类似于 styled-system 的主题，这种主题是固定的，当主题中定义了用于 margin 和 padding 的 space 字段 `{1: "2px", 2: "4px"}`，如果我们需要使用 `space["3"]` 的时候，则需要再次添加。
4. 为了实现较为常见的功能，不得不手动编写大量的 CSS 样式，如我们要实现水平和垂直居中的样式，我们需要编写 `display: flex; align-items: center; justify-content: center;`，如果不使用 CSS-in-JS 的情况下，我们会把这种常见的样式封装为一个 class，如 `flex-center`，而在 CSS-in-JS 中，我们会编写一个变量或者一个方法用于存储复用的样式，这是比较繁琐的。

ustyled 针对以上问题的解决方法：

1. 大多数 CSS-in-JS 库都有 css prop 支持，我们可以直接将样式写入 css prop 从而解决冲突问题，如 `css={[u.m(10), u.p(10)]}`。
2. 同上，css prop 一般由 Babel 等工具在打包期间处理，不会因参数传递导致被覆盖问题。
3. 采用函数式主题，如 `space: (unit: number) => unit * 4;`，采用函数式主题也使 variant 特性更易于实现，如 `colorMode: (type: string) => { /* if type === "primary" return { color: "blue", background: "blue" }, if type === "disable" return { /* other */ } */ }`
4. 在 ustyled 中可以添加自定义 Api，如实现水平和垂直居中可以直接写成 `css={[u.flexCenter()]}`。

## Maintainer

ustyled 由 [Otstar Lin](https://ixk.me/)
和下列 [贡献者](https://github.com/syfxlin/ustyled/graphs/contributors)
的帮助下撰写和维护。

> Otstar Lin - [Personal Website](https://ixk.me/) · [Blog](https://blog.ixk.me/) · [Github](https://github.com/syfxlin)

## License

![License](https://img.shields.io/github/license/syfxlin/ustyled.svg?style=flat-square)

根据 Apache License 2.0 许可证开源。