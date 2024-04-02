module.exports = {
  // 코드가 실행되는 환경 설정
  env: {
    browser: true, // 브라우저 환경에서 실행
    es2021: true, // ES2021 문법 사용 가능
  },
  // 기본적인 ESLint 규칙을 사용하고 React 플러그인 및 Prettier를 추가로 확장
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
  // 특정 파일에 대한 추가 설정
  overrides: [
    {
      // Node.js 환경에서 실행되는 파일에 대한 설정
      env: {
        node: true, // Node.js 환경에서 실행
      },
      // 파일 패턴
      files: [".eslintrc.{js,cjs}"],
      // 파서 옵션 설정
      parserOptions: {
        sourceType: "script", // 스크립트 형태로 파싱
      },
    },
  ],
  // 파서 옵션 설정
  parserOptions: {
    ecmaVersion: "latest", // 최신 ECMAScript 버전 사용
    sourceType: "module", // 모듈 형태로 파싱
  },
  // 사용할 플러그인 지정
  plugins: ["react"],
  // 규칙 설정
  rules: {
    // JSX에서 React가 선언되지 않아도 되는 규칙을 해제
    "react/react-in-jsx-scope": "off",
    // PropTypes 검사를 수행하지 않는 규칙을 해제
    "react/prop-types": "off",
    // 사용되지 않는 변수를 사용해도 경고를 표시하지 않는 규칙을 해제
    "no-unused-vars": "off",
  },
};
