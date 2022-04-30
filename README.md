## A lib gather some useful ts data types

[![codecov](https://codecov.io/gh/umijs/dumi/branch/master/graph/badge.svg)](https://codecov.io/gh/umijs/dumi) [![NPM version](https://img.shields.io/npm/v/dumi.svg?style=flat)](https://npmjs.org/package/dumi) [![GitHub Actions status](https://github.com/umijs/dumi/workflows/Node%20CI/badge.svg)](https://github.com/umijs/dumi) 
[![issues-helper](https://img.shields.io/badge/using-issues--helper-orange)](https://github.com/actions-cool/issues-helper)

## Intro

A Umi-based doc tool can assist you to develop libraries & write docs.

## Use example

- type example

```ts
import type { EmailType } from "extra-data-types";

const exampleEmail: EmailType.StandardType = "example@example.com";
const exampleGmail: EmailType.GmailType = "example@gmail.com";
```

- function example

```ts
import { isStandardEmailType, isGmailType } from "extra-data-types";

if (isStandardEmailType("example.example@example.com")) {
  //do something when is valid of standard email type
} else {
  //...
}

if (isStandardEmailType("example.example@gmail.com")) {
  //do something when is valid of gmail type
} else {
  //...
}
```

## Currently Support

```ts
type: 
EmailType.StandardType
EmailType.GmailType
EmailType.QQmailType

func:
isStandardEmailType,
isGmailType
```

## Testing

Clone the repository and execute:

```bash
npm test
```

## Contributing

Any type of contribution is welcome :)

- Submit [issues](https://github.com/chen1415/extra-data-types/issues) to report bugs or ask questions.
- Propose [pull requests](https://github.com/chen1415/extra-data-types/pulls) to improve our code.
