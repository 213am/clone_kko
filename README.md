# 참고사항

## 1.아이콘 폰트

- https://fontawesome.com
- https://xpressengine.github.io/XEIcon

```
index.html 에서 <link /> 태그 확인
```

### 1.1. 본 프로젝트 활용 아이콘 폰트

- https://react-icons.github.io/react-icons
  <br/>

## 2. css 초기화

- reset.css (https://meyerweb.com/eric/tools/css/reset/reset.css)
  > 상대적으로 간략한 정리
- namalize.css (https://necolas.github.io/normalize.css/8.0.1/normalize.css)

  > 상세한 정리

- 우리가 만든 common.css 파일

```css
@charset "utf-8";

* {
  margin: 0px;
  padding: 0;
  box-sizing: border-box;
  /* outline-style: none; */
}

a {
  color: #1e1e1e;
  text-decoration: none;
}

ul,
ol,
li {
  list-style: none;
}

html {
  font-size: 14px;
  overflow-x: hidden;
}

body {
  font-family: "Inter", "Noto Sans KR", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-optical-sizing: auto;
  color: #1e1e1e;
  font-size: 14px;
}
```

- 필수 주의 사항

```
반드시 reset.css 또는 namalize.css 를 먼저 배치하고
본인의 css 를 배치해야한다.
그렇지 않으면 우리가 만든 css 가 덮어씌워져서 정상적으로 구현 불가능
```

```html
<link
  rel="stylesheet"
  href="https://meyerweb.com/eric/tools/css/reset/reset.css"
/>
<link
  rel="stylesheet"
  href="https://necolas.github.io/normalize.css/8.0.1/normalize.css"
/>
<link
  rel="stylesheet"
  href="//cdn.jsdelivr.net/npm/xeicon@2.3.3/xeicon.min.css"
/>
<link rel="stylesheet" href="./css/common.css" />
<link rel="stylesheet" href="./css/header.css" />
<link rel="stylesheet" href="./css/main.css" />
<link rel="stylesheet" href="./css/card-list.css" />
<link rel="stylesheet" href="./css/footer.css" />
```

## 3. inline, block, inline-block 의 개념 정리

### 3.1. inline

> display: inline;

```
<sapn>, <b>, <strong>, <a>, <img> 등
```

- 가로로 배치된다.
- width, height 설정 불가
- padding, margin 일부 미지원
- 글자처럼 옆으로 계속 배치된다.
  <br/>

### 3.2. block

> display: block;

```
<div>, <header>, <main>, <footer>, <ul>, <li> 등
```

- width: 100%; 가 기본값
- width, height, padding, margin 등 모두 설정 가능
  <br/>

### 3.3. inline-block

> display: inline-block;

- inline 이면서 block 속성을 가져서 width, height 등을 설정 가능
- 기본 width 를 지정하지 않으면 내용물 만큼 설정됨
- 가로로 연속 배치가 가능하다.
  <br/>

## 4. CSS 정리

- VSCode > Extensions 에서 PostCSS Sorting 설치

```
정렬 속성 셋팅
Manage > Settings > setting.json 검색 > 파란색 글씨 Edit in setting.json 클릭
```

<br>
- 다음 항목을 추가한다.(json 문법에 유의해 쉼표(,) 확인)

```json
"postcssSorting.config": {
    "properties-order": [
      "display",
      "list-style",
      "position",
      "top",
      "right",
      "bottom",
      "left",
      "float",
      "clear",
      "width",
      "height",
      "padding",
      "margin",
      "border",
      "background",
      "color",
      "font",
      "font-weight",
      "font-size",
      "line-height",
      "font-family",
      "letter-spacing",
      "text-decoration",
      "text-align",
      "verticla-align",
      "white-space",
      "content",
      "animation"
    ]
  }
```

<br/>

- 키보드 단축키 셋팅

```
Manage > Keyboard Shortcuts > post 검색
PostCSS Sorting: Run 의 Keybinding 을 할당해준다.
현재는 ctrl + alt + c 로 설정함
```

<br/>

## 5. css 표준검사

- https://jigsaw.w3.org/css-validator/
- https://caniuse.com/
  <br/>

## 6. html 표준검사

- https://validator.w3.org/
- https://caniuse.com/
  <br/>

## 7. favicon

> https://realfavicongenerator.net/

- 예의, 신뢰도 향상

```html
index.html의 <head></head> 안에

<link rel="속성값" href="파일경로" type="미디어 타입" />
<link rel="icon" href="경로/파일명" type="image/x-icon" />
```
