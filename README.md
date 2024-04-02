# 할 일 만들기

## 리액트 프로젝트 세팅

- `npx create-react-app ./`
- `yarn create react-app ./`
- `yarn add normalize.css`
- `yarn add sass`

## ESLint, prettier 설정

- ./.prettierrc.json

```json
{
  "singleQuote": false,
  "semi": true,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 80,
  "arrowParens": "avoid",
  "endOfLine": "auto"
}
```

- ESLint 설정
- ``

- ./.eslintrc.js 내용 수정 prettier 추가

```js
extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier"
],
```
