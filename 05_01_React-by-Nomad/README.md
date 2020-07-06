#  Hello World on React 

> 2020.07.01 

## Why React? 

- 페이스북이 만들고 관리
- 웬만한 회사들이 사용
  - 에어비앤비, 넷플릭스, 스포티파이, 슬랙 등등 
- 압도적 인기 
  - https://2019.stateofjs.com/front-end-frameworks/ 
  - 그리고 계속 상승 중 
  - 여러 인기요인 
    - Elegant programming style & pattern 
    - Rich Package ecosystem
    - Well - setablished option
    - Good doc
    - Fast Perfom 
    - Powerfull dev tooling 
    - etc.. 

- 압도적 커뮤니티
  - 튜토리얼, 컴포넌트 등 
- 자바스크립트의 라이브러리이므로, 자바스크립트 실력도 함께 향상  

##  What is React Native ?

### App개발의 3가지 방법 

1. 완전 Native 
   - Swift / Objective-c 로 iOS App 개발 with Xcode
   - Java / Kotlin 으로 Android App 개발 with Android Studio
2. 앱 기반 웹 뷰를 만들기 : 하이브리드앱
   - 간단한 웹사이트 개발하여 Cordova / PhoneGap로 앱껍데기 씌우기
   - HTML, CSS, JS만으로 개발 가능 
   - 저예산, 반응형 웹앱 개발 가능 
3. React Native 
   - React가 Javascript로 작성된 메세지를 iOS, Android 네이티브 엔진에 전달 
   -  `import {StyleSheet, Text, View} from "react-native";` 에서 `Text` 와 `View`가 바로 그 브릿지 역할을 하는 중추
   - 많은 데이터가 오고갈 경우 브릿지 부하로 앱이 느려질 수 도 있다.
   - 그러므로 SNS 컨텐츠(사진, 프로필, 코멘트 등) 앱에는 최적화되어 있지만 
   - 3D, Video, VR 게임 등을 다루는 앱에는 부적합하다.
     - 코드를 최적화하는데 시간이 너무 오래 걸리기 때문에 

##  환경설정 공통 

- `node -v`  설치 확인
- `npm -v` 설치 확인 ( 보통 node와 같이 자동 설치 됨 )
- `git --version` 설치 확인 
- IDE 
  - VSC (무료) 
  - intelliJ (유료)
  - 외 JS , React 를 지원하는 에디터

## 환경설정 A

> React JS 웹 개발을 위한 환경설정 

- `npm install npx -g`  npx 설치

##  환경설정 B 

> React Native 앱 개발을 위한 환경설정  

- IDE 
  - 시뮬레이터 
    - **안드로이드 스튜디오**  : Linux, Window용
    - **Xcode** : Mac OS용
  - **expo**
    -  시뮬레이터를 PC에 설치하지 않아도 expo를 통해 모바일 디바이스에서 시뮬레이션 할 수 있다
    - [IOS expo app 설치](https://apps.apple.com/kr/app/expo-client/id982107779) / [Android expo app 설치](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=ko)
  - **expo client**
    - `npm install -g expo-cli` 개발환경에 설치
    - React Native 프로젝트를 위한 설정파일이 따로 없이 모두 셋업되어있음
      - cf ) ReactJS의 `npx create-react-app Project_Name` 와 같은 역할 
      - if ) React Native 를 수동작업하고 싶다면 ( = react native files를 컨트롤하고 싶다면), [React Native CLI](https://s-pace.github.io/react-native/docs/getting-started.html#the-react-native-cli) 참고 (추천하지는 않음)
    - expo는 window에서 (MacOS가 없어도) IOS App 개발과 시뮬레이션을 가능케 해준다.

##  사전지식 

- CSS/HTML
  - div, span, flexbox, display block, background color 가 뭔지 안다면 OK
- 약간의 JS 
  - function, variable, class 가 뭔지 안다면 OK



##  전처리 A 

> React JS Project 시작을 위한 전처리

- React를 사용하기 위해서는 
- Sexy한 코드와 아름다운 Component를 만들어놓고도 
- Browser가 React 코드를 이해하지 못하므로 
- 몬생긴 코드로 Compile해야한다.
  -  = Webpack, Babel 을 설치해야 한다. 
- 그러나, 
- `npx create-react-app Project_Name` 명령어 하나로 위 복잡한 처리들을 대신해 React Web App을 Set up 할 수 있다.  
- And, You can run several commands : 
  - `npm start` 
    - Local : http://로컬데스크톱에서 확인할 수 있는 url 
    - On Your Network : http:// 같은 wifi로 연결된 다른 디바이스에서 확인할 수 있는 url  
  - `npm run build `
  - etc.. 

##  전처리 B 

> React Native Project 시작을 위한 전처리 

- cmd 창에서 (git bash 에서 불가)

- 원하는 경로로 접근하여 `expo init proj-name` 

- `blank` 옵션 선택 

- 아래와 같이 앱이름을 설정한다. 

  ```json
    "expo": {
      "name": "AppName",
  ```

  cmd 창에 뜨지 않으면, `app.json` 에서 설정할 수 있다. 

###  시뮬레이션

- `npm start`
- QR코드 접속 / Local host 접속 
  - IOS는 `expo login` 으로 우선 로그인 후 접속
- PC와 시뮬용 디바이스는 같은 wifi에 연결되어있어야 한다. 
- expo 시뮬레이터는 live reroad 된다!
- 시뮬레이터에서 개발자 메뉴에 접근하려면 
  - 가상 에뮬레이터 : Ctrl + D
  - 물리 디바이스 : 흔들면 된다!!

# React README 

> 아래는 react app이 생성되면 볼 수 있는 readme로, 
>
> app 생성 후 참고 할 기본서이다.
>
> 보통 지우고 해당 app에 대한 info로 채운다.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000/) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify 

