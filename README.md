## extra-data-types

[![Codecov Coverage](https://img.shields.io/codecov/c/github/chen1415/extra-data-types/coverage.svg?style=flat-square)](https://codecov.io/gh/chen1415/extra-data-types/)

## Introduction

A simple lib, gather some useful data types of TS.

## Use example

- type example

```ts
import type { EmailSchema } from "extra-data-types";

const exampleEmail: EmailSchema.STANDARD_EMAIL_TYPE = "example@example.com";
const exampleGmail: EmailSchema.GMAIL_TYPE = "example@gmail.com";
```

- function example

```ts
import { IS_STANDARD_EMAIL_TYPE, IS_GMAIL_TYPE } from "extra-data-types";

if (IS_STANDARD_EMAIL_TYPE("example.example@example.com")) {
  //do something when is valid of standard email type
} else {
  //...
}

if (IS_STANDARD_EMAIL_TYPE("example.example@gmail.com")) {
  //do something when is valid of gmail type
} else {
  //...
}
```

## Currently Support

```ts
email type: 
EmailSchema.STANDARD_EMAIL_TYPE
EmailSchema.GMAIL_TYPE
EmailSchema.QQ_MAIL_TYPE

date type:
DateSchema.YYYY_MM_DD_TYPE
DateSchema.YYYY_MMM_DD_TYPE

email func:
IS_STANDARD_EMAIL_TYPE,
IS_GMAIL_TYPE
IS_QQ_MAIL_TYPE

date func:
IS_YYYY_MM_DD_TYPE
IS_YYYY_MMM_DD_TYPE
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
