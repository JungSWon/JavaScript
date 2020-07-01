#  Hello World on React 

> 2020.07.01 

##  환경설정 

- `node -v`  설치 확인
- `npm -v` 설치 확인 ( 보통 node와 같이 자동 설치 됨 )
- `git --version` 설치 확인 
- `npm install npx -g`  npx 설치
- IDE 
  - VSC (무료) 
  - intelliJ (유료)
  - 외 JS , React 를 지원하는 에디터

##  사전지식 

- CSS/HTML
  - div, span, flexbox, display block, background color 가 뭔지 안다면 OK
- 약간의 JS 
  - function, variable, class 가 뭔지 안다면 OK

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



##  전처리

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

