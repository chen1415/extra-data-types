## extra-data-types

[![Codecov Coverage](https://img.shields.io/codecov/c/github/chen1415/extra-data-types/coverage.svg?style=flat-square)](https://codecov.io/gh/chen1415/extra-data-types/)

## Introduction

A simple lib, gather some useful data types of TS.

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
email type: 
EmailSchema.StandardEmail_Type
EmailSchema.Gmail_Type
EmailSchema.QQmail_Type

date type:
DateSchema.YYYYMMDD_Type
DateSchema.YYYYMMMDD_Type

email func:
is_StandardEmail_Type,
is_Gmail_Type
is_QQmail_Type

date func:
is_YYYYMMDD_Type
is_YYYYMMMDD_Type
```

## Testing

please use node version ```v16.18.0```

Clone the repository and execute:

```bash
npm install
npm test
```

## Contributing

Any type of contribution is welcome :)

- Submit [issues](https://github.com/chen1415/extra-data-types/issues) to report bugs or ask questions.
- Propose [pull requests](https://github.com/chen1415/extra-data-types/pulls) to improve our code.
