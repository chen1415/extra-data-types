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

Email:

| Email Schema  | Type_Name          | Function              | :white_check_mark: | :x:         |
| ------------- | ------------------ | --------------------- | ------------------ | ----------- |
| StandardEmail | StandardEmail_Type | is_StandardEmail_Type | abc@abc.com        | abc         |
| QQMail        | QQmail_Type        | is_QQmail_Type        | 123@qq.com         | a@a.com     |
| Gmail         | Gmail_Type         | is_Gmail_Type         | a@gmail.com        | a@cmail.com |

Date:

| Date Schema  |   Type_Name    |     Function      | :white_check_mark: |       :x:        |
| -----------  | -------------- | ----------------- | ------------------ | ---------------  |
| YYYY-MM-DD   | YYYYMMDD_Type  | is_YYYYMMDD_Type  |     1970-01-01     |    19700101      |
| YYYY-MMM-DD  | YYYYMMMDD_Type | is_YYYYMMMDD_Type |    1970-JAN-01     | 1970-JANUARY-01  |
| DD-MM-YYYY  | DDMMYYYY_Type | is_DDMMYYYY_Type |    01-01-1970     | 1-1-1970 |

## Testing

please use node version ```v14.18.3```

Clone the repository and execute:


- npm install
- npm run build-pr
- npm run test


## Contributing

Any type of contribution is welcome :)

- Submit [issues](https://github.com/chen1415/extra-data-types/issues) to report bugs or ask questions.
- Propose [pull requests](https://github.com/chen1415/extra-data-types/pulls) to improve our code.

## Code Contributors

- @chen1415
- @Leon-wyl
- @IAmJerryJ
- @JunchengJiang1