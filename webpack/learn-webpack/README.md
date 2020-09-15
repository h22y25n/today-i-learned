# Learn Webpack

[toc]
# 기초 개념
## 웹팩이란?
최신 프런트엔드 프레임워크에서 가장 많이 사용되는 모듈 번들러(Module Bundler). 

모듈 번들러란 웹 애플리케이션을 구성하는 자원(HTML, CSS, Javascript, Images ...)을 모두 각각의 모듈로 보고 이를 조합해 병합된 하나의 결과물을 만드는 도구.

## 모듈이란?
프로그래밍 관점에서 특정 기능을 갖는 작은 코드 단위를 의미한다. 성격이 비슷한 기능을 하나의 의미있는 파일로 관리하면 모듈이 된다.

## 웹팩에서의 모듈
웹팩에서 지칭하는 모듈은 자바스크립트 모듈에만 국한되지 않고, 웹 애플리케이션을 구성하는 모든 자원을 의미한다. 웹 애플리케이션을 제작하기 위한 HTML, CSS, Javascript, Images, Font 등 수많은 파일이 각각 모듈이다.

## 모듈 번들링
애플리케이션을 구성하는 몇십, 몇백개의 자원(HTML, CSS, Javascript, Images, Font ...) 을 하나의 파일로 병합 및 압축 해주는 동작을 모듈 번들링이라고 한다.

빌드, 번들링, 변환 세 단어는 모두 같은 의미이다.

## 웹팩 등장 배경
### 파일 단위의 자바스크립트 모듈 관리 필요성

구조가 복잡한 애플리케이션 개발시, 변수의 이름이 중복 선언되거나 의도치않은 값을 할당하는 문제가 생길 수 있다. 이러한 변수를 파일단위로 관리하고자 하는 욕구가 생겼다. 

이전까진 AMD, Common.js와 같은 라이브러리로 해소

### 웹 개발 작업 자동화 도구 (Web Task Manager)

에디터에서 코드 수정 후, 브라우저에서 새로고침을 누르는 등 반복 작업을 자동화하고자 하는 욕구. 이 외에도
- HTML, CSS, JS 압축
- 이미지 압축
- CSS 전처리기 변환

과 같은 일들을 자동화해주는 도구가 필요했다. 이를 위해 Grunt와 Gulp 같은 도구가 등장.

### 웹 애플리케이션의 빠른 로딩 속도와 높은 성능

일반적으로, 웹사이트 접근시 5초 이내로 웹사이트가 표시되지 않으면 대부분의 사용자는 사이트를 이탈하거나 집중력을 잃는다.

그래서 웹사이트의 로딩 속도를 높이기 위해 많은 노력들이 있었으며, 대표적으로 브라우저에서 서버로 요청하는 파일 숫자를 줄이는것이다. 이를 위해 앞서 살펴본 웹 태스크 매니저로 파일을 병합하고 압축하는 작업을 진행했다. 뿐만 아니라 초기 페이지 로딩 속도를 높이기 위해 나중에 필요한 자원은 추후 요청하는 레이지 로딩(Lazy Loading)이 등장했다.

웹팩도 기본적으로 필요한 자원을 미리 로딩하는게 아닌, 그때 그때 요청하자는 철학을 갖고 있다

## 웹팩으로 해결하려는 문제
### 자바스크립트 변수 유효 범위
웹팩은 변수 유효 범위의 문제점을 [ES6의 Modules](https://babeljs.io/docs/en/learn#modules) 문법과 웹팩의 모듈 번들링으로 해결한다.

### 브라우저별 HTTP 요청 숫자의 제약
TCP 스펙에 따라 브라우저에서 한 번에 서버로 보낼 수 있는 HTTP 요청 숫자는 제약되어 있다.
따라서, HTTP 요청 숫자를 줄이는것이 웹 애플리케이션의 성능을 높여줄 뿐 아니라 사용자가 사이트를 조작하는 시간을 앞당길 수 있다.

### Dynamic Loading & Lazy Loading 미지원
[Require.js](https://requirejs.org/)와 같은 라이브러리를 쓰지 않으면 동적으로 원하는 순간에 모듈을 로딩하는 것이 불가능 했다. 그러나 이젠 웹팩의 Code Splitting 기능을 이용하여 원하는 모듈을 원하는 타이밍에 로딩할 수 있다.

# Node.js와 NPM
웹팩은 Node.js를 이용해 만들어졌고 NPM을 사용하고 있기 때문에 두가지가 설치 되어있어야 하며, 이 도구에 어느정도 지식이 있으면 웹팩을 다루는데 도움이 된다.

## Node.js

브라우저 밖에서도 자바스크립트를 실행할 수 있는 환경을 의미.
Node.js가 나오기 전까지는 자바스크립트가 브라우저의 동작을 제어하는데 사용되었고, 브라우저에서만 실행할 수 있었지만 이제는 Node.js 로 자바스크립트를 브라우저 밖에서도 실행할 수 있게 되었다.

## NPM

NPM(Node Package Manater)는 명령어로 자바스크립트 라이브러리를 설치하고 관리할 수 있는 패키지 매니저이다.

전세계 자바스크립트 개발자들이 모두 자바스크립트 라이브러리를 공개된 저장소에 올려놓고 npm 명령어로 편리하게 다운받아 사용한다.

NPM은 Node.js 설치시 같이 설치된다.

### NPM 장점

1. 프로젝트에 사용중인 라이브러리의 목록과 버전을 `package.json` 에서 한번에 확인하고 관리할 수 있다
2. 페이지로 가서 cdn으로 라이브러리를 불러오는게 아니라 install 명령어로 간편하게 설치할 수 있다

### NPM 설치
새로운 폴더를 만들고 아래의 명령어 실행

```bash
npm init
or 
npm init -y
```

`npm init` 은 CLI에서 대화형으로 프로젝트 정보를 입력하는 프로세스이고, `npm init -y` 는 기본적인 정보를 비워둔 채 `package.json` 파일이 생성된다.

기본적으로 후자를 사용하며 `package.json` 파일의 모습은 아래와 같다.

```bash
{
  "name": "demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

위 구조는 가장 기본적인 구조이며 실제 애플리케이션을 만들 때 자주 사용되는 속성은 다음과 같다.

- scripts
- dependencies
- devDependencies

## NPM 설치 명령어 (Module Install)

NPM에서 가장 많이 사용되는 명령어 `npm install` 에 대해 살펴본다. 크게 나눠 지역 설치와 전역 설치가 있다.

### 지역 설치

#### 명령어
NPM 초기화 명령어로 `package.json` 파일이 생성되고, 해당 프로젝트에서 사용할 자바스크립트 라이브러리를 설치할 때 사용한다.

```bash
npm install jquery --save-prod
```

`--save-prod` 옵션을 붙이지 않아도 동일한 효과가 난다. 또한 `install` 대신 `i` 로 축약해 사용할 수 있다.

```bash
npm i jquery
```

#### 경로
지역 설치된 라이브러리는 해당 프로젝트의 `node_modules` 폴더에에서 설치된 파일을 확인할 수 있다.

### 전역 설치
프로젝트에서 사용할 라이브러리를 불러오는게 아니라 시스템 레벨에서 사용할(명령어 등) 자바스크립트 라이브러리를 설치할 때 사용한다. 시스템 상에서 명령어를 인식할 수 있도록 제공하는 라이브러리를 사용하기 위해서는 시스템 전역에 설치해야한다.

#### 명령어

```bash
npm install webpack-cli --global
```
`--global` 대신 `-g` 로 사용할 수 있다.

```bash
npm install webpack-cli -g
```

#### 경로

전역으로 설치된 자바스크립트 라이브러리는 어느 위치에서 해당 명령어를 실행했던지간에 OS별로 아래와 같은 폴더 경로에 설치된다.

```bash
# window
%USERPROFILE%\AppData\Roaming\npm\node_modules

# mac
/usr/local/lib/node_modules
```

### NPM 지역 설치 옵션 2가지

NPM 지역 설치에 자주 사용되는 2가지 옵션

```bash
npm install jquery --save-prod
npm install jquery --save-dev
```

위 명령어는 아래와 같이 축약할 수 있다

```bash
npm i jquery
npm i jquery -D
```

여기서 설치 옵션에 아무것도 넣지 않은 `npm i jquery`는 `package.json`의 `dependencies`에 등록된다.

```bash
// package.json
{
  "dependencies": {
    "jquery": "^3.4.1"
  }
}
```

설치 옵션으로 `-D`를 넣은 경우에는 해당 라이브러리가 `package.jso`n의 `devDependencies`에 등록된다.

```bash
// package.json
{
  "devDependencies": {
    "jquery": "^3.4.1"
  }
}
```

### 개발용 라이브러리와 배포용 라이브러리 구분하기

NPM 지역 설치시 해당 라이브러리가 배포용(dependencies)인지 개발용(devDependencies)인지 꼭 구분해야 한다.

예를 들어, jquery와 같이 화면 로직과 직접적으로 관련된 라이브러리는 배포용으로 설치해야 한다. 
```bash
# 배포용 라이브러리 설치
npm i jquery
```

```bash
{
  "dependencies": {
    "jquery": "^3.4.1"
  }
}
```

이렇게 설치된 배포용 라이브러리는 `npm run build`로 빌드를 하면 최종 애플리케이션 코드 안에 포함된다. 그런데 만약 반대로 설치 옵션에 `D`를 줬다면 해당 라이브러리는 **빌드하고 배포할 때 애플리케이션 코드에서 제외된다.** 

`npm run build` 시 production 모드가 동작해 `devDependencies`에 있는 라이브러리는 제외하고 빌드 된다. npm 페이지에 있는 명령어를 따라 설치해도 되지만 스스로 판단하여 dev 혹은 prod를 결정해서 설치해줘도 된다.

## NPM 커스텀 명령어 (Custom Commands)
임의로 명령어의 이름과 동작을 정의해서 사용할 수 있다.

```json
// package.json
{
  ...
  "scripts": {
    "hello": "echo hi"
  }
}
```
NPM 패키지 관리 파일 `package.json` 에 위와 같이 `scripts` 라는 속성을 추가하고 아래 명령어를 실행하면 콘솔에 hi 가 출력된다.

```sh
npm run hello
```

커스텀 명령어는 모두 `npm run command-name` 으로 실행할 수 있다. 

예를 들어 `dev` 명령어로 서버를 실행하고, `build` 명령어로 웹팩 빌드를 정의한 코드

```json
"scripts": {
  "dev": "node server.js",
  "build": "webpack --mode=none",
}
```

`npm run deploy` 명령어로 웹팩 빌드와 기타 실행옵션을 한꺼번에 수행하도록 정의한 코드

```json
"scripts": {
  "build": "webpack",
  "deploy": "npm run build -- --mode production"
}
```
