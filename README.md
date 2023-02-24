## extra-data-types

[![Codecov Coverage](https://img.shields.io/codecov/c/github/chen1415/extra-data-types/coverage.svg?style=flat-square)](https://codecov.io/gh/chen1415/extra-data-types/)

## Introduction

A simple lib, gather some useful data types of TS.

## Use example

- type example

```ts
import type { EmailSchema } from "extra-data-types";

const exampleEmail: EmailSchema.StandardEmail_Type = "example@example.com";
const exampleGmail: EmailSchema.Gmail_Type = "example@gmail.com";
```

- function example

```ts
import { is_StandardEmail_Type, is_Gmail_Type } from "extra-data-types";

if (is_StandardEmail_Type("example.example@example.com")) {
  //do something when is valid of standard email type
} else {
  //...
}

if (is_StandardEmail_Type("example.example@gmail.com")) {
  //do something when is valid of gmail type
} else {
  //...
}
```

## Currently Support

| Schema |                                           Type                                            |                            Function                            |
|:------:|:-----------------------------------------------------------------------------------------:|:--------------------------------------------------------------:|
| Email  |   EmailSchema.StandardEmail_Type </br> EmailSchema.Gmail_Type </br> EmailSchema.QQmail_Type  |   is_StandardEmail_Type </br> is_Gmail_Type </br> is_QQmail_Type   |
|  Date  |                 DateSchema.YYYYMMDD_Type </br>  DateSchema.YYYYMMMDD_Type                  |            is_YYYYMMDD_Type </br>  is_YYYYMMMDD_Type            |

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
