## A lib gather some useful ts data types

[![Codecov Coverage](https://img.shields.io/codecov/c/github/chen1415/extra-data-types/coverage.svg?style=flat-square)](https://codecov.io/gh/chen1415/extra-data-types/)

## Intro

A Umi-based doc tool can assist you to develop libraries & write docs.

## Use example

- type example

```ts
import type { EmailSchema } from "extra-data-types";

const exampleEmail: EmailSchema.StandardEmailType = "example@example.com";
const exampleGmail: EmailSchema.GmailType = "example@gmail.com";
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
EmailSchema.StandardEmailType
EmailSchema.GmailType
EmailSchema.QQmailType

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
