функция для апдейта графиков

```js
fetch("/projects/1", {
  method: "PUT",

  headers: {
    "Content-Type": "application/json",
  },
  redirect: "follow",
  referrerPolicy: "no-referrer",
  body: JSON.stringify({
    metrics: [
      {
        data: {
          timestamp: 1004783466,
          eslintDisable: 567,
          todo: 167,
          fixme: 516,
          any: 243,
          tsIgnore: 713,
          nonNullAssertion: 630,
          coverage: 10,
          eslint: 3673,
          stylelint: 267,
          ts: 17,
        },
      },
      {
        data: {
          timestamp: 1004783466,
          eslintDisable: 267,
          todo: 167,
          fixme: 816,
          any: 743,
          tsIgnore: 43,
          nonNullAssertion: 830,
          coverage: 22,
          eslint: 5673,
          stylelint: 167,
          ts: 57,
        },
      },
      {
        data: {
          timestamp: 1004783466,
          eslintDisable: 167,
          todo: 667,
          fixme: 716,
          any: 643,
          tsIgnore: 93,
          nonNullAssertion: 430,
          coverage: 55,
          eslint: 2673,
          stylelint: 367,
          ts: 27,
        },
      },
    ],
  }), // body data type must match "Content-Type" header
});
```
