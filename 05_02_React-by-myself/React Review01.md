# React Review  1 

##   📚

###  1. npm vs yarn 

####  (1) npm 

- Node.js 패키지 매니저 도구 
- 여러 개발자가 만든 패키지(재사용 가능한 코드)를 설치 가능 
- 설치 패키지 버전 관리 가능 
- 리액트 역시 하나의 패키지 

####  (2) yarn

- npm을 대체하는 도구
- npm보다 빠르고 효율적인 캐시 시스템 및 부가 기능 제공

####  (3) 속도비교 (Performance)

- 👍yarn은 꾸준히 앞서고,
- 👍npm은 계속 릴리즈로 그 차이를 따라잡는 형태
- 거의 차이가 없다고 볼 수 있음  

 ####  (4) 안정성 (Stability)

- 둘다 아주 좋음 
- 모든 OS와 수억의 다운로드, 사용, 테스팅을 커버함

#### (5) 보안성 (Security)

- 👍yarn을 개발한 주요 이유 : npm's security 접근을 개선하기 위해 
- 👍npm : 패키지 설치시 코드 의존성을 자동 실행하여 편리하지만 
- 👎npm : 패키지 제출의 정책이 느슨해 위험도가 높다 
- yarn : `yarn.lock`, `package.json` 으로부터 설치만 한다  
- 👍yarn : `yarn.lock`이 모든 디바이스에 같은 패키지를 설치하는 것을 보장하여 다른 버전 설치가 야기하는 버그를 예방한다. 
- 👍yarn : 위와 같은 보안성을 계속 강화하고 있다. 

####  (6) 사용빈도 

- 👍npm : 다운로드 수에서 꾸준히 yarn을 두배 이상 앞선다



### 2. React Version 마다 지원하는 Browser

####  (1) React와 Browser

- 2016년 react.js의 IE 8 관련 버그의 우선 순위를 낮추고, 결국엔 지원을 중단할 것이라고 밝힘
- `polyfill` 라이브러리를 사용하여 IE 지원 개발이 가능하긴 함 
- [React.js가 IE 브라우저 지원 중단했다면서요?]([https://medium.com/little-big-programming/react-js%EA%B0%80-ie-%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80-%EC%A7%80%EC%9B%90-%EC%A4%91%EB%8B%A8%ED%96%88%EB%8B%A4%EB%A9%B4%EC%84%9C%EC%9A%94-a9734bc323cb#.qg3b5npl3](https://medium.com/little-big-programming/react-js가-ie-브라우저-지원-중단했다면서요-a9734bc323cb#.qg3b5npl3))
- 2020년 2월 기준 국내 데스크톱 브라우저 점유율 : 크롬 70.95%, IE 14.77%, 엣지 4.66%, 웨일 3.56%, 사파리 3.33%, 파이어폭스 1.66%
- 글로벌 IE 이용률이 3.7%
- 2020년 03월 부터 유투브가 실행되는 브라우저 : 구글 크롬, MS 엣지, 모질라 파이어폭스, 오페라
  - 위 브라우저들의 공통점 : 사용자에게 별도 재설치를 요구하지 않고 업데이트되는 ‘에버그린 브라우저’ 

#### (2) React와 ECMAScript

- 크롬, 사파리, 파이어폭스와 같은 에버그린 브라우저 (Evergreen browser, 사용자의 업데이트 없이도 최신 버전으로 자동 업데이트를 수행하는 모던 브라우저)의 ES6지원 비율은 약 98%로 거의 대부분의 ES6 사양을 구현
- React는 ES6 문법으로 작성된다 (대표적으로 Map, Set )
- IE를 포함한 구형 브라우저는 ES6 모듈을 지원하지 않는다
- ES6+ 또는 ES NEXT의 ES 최신 사양을 사용하여 프로젝트를 진행하려면 작성된 코드를  IE 및 구형 브라우저에서 문제 없이 동작시켜야 하는경우, 개발 환경을 구축하는 것이 필요
  - **Babel** ( :트랜스파일러(Transpiler)), **Webpack**( :모듈 번들러(Module bundler)) 등이 ES6 및 ES7 코드를 가져 와서 ES5 코드로 변환하는 역할 
- 참고 
  - [Babel과 Webpack을 이용한 ES6 환경 구축](https://poiemaweb.com/es6-babel-webpack-1)
  - [React와 함께 ES6 및 ES * 사용](https://www.reactenlightenment.com/react-basic-setup/3.3.html)
  - [JavaScript 환경 요구사항](https://ko.reactjs.org/docs/javascript-environment-requirements.html)



###  3. React의 Virtual DOM

http://egloos.zum.com/chideout/v/4442783

[Virtual DOM](https://medium.com/@enro2414_40667/virtual-dom-버추얼-돔-가상-돔-을-직접-만들어보자-1c44606ea9b1)



### 4. iOS, Android with React Native 

####  (1) 카메라, 알람 등 디바이스 컨트롤 기능 호환율 (react native hardware access)

####  (2) React Native 코드 호환율 

[sharing code between android and iOS](https://medium.com/@spencer_carli/sharing-code-between-android-and-ios-in-react-native-142f6566a0fe)

[👆 react Docs](https://reactnative.dev/docs/platform-specific-code.html#platform-specific-code)

[⭐difference in dev for android and iOS ](https://www.netguru.com/blog/react-native-ios-and-android)

[👆 react Docs](https://reactnative.dev/docs/cameraroll)



###  5. RN가 추구하는 개발 기조 

**“write once, run everywhere”**

####  (1) The framework’s main selling point 

- its ability to create cross-platform apps that provide a much better user experience than the current hybrid options on the market, closer to that of native apps.
- 현재 출시 된 하이브리드 옵션보다 훨씬 나은 사용자 경험을 제공하는 크로스 플랫폼 앱을 만들 수 있다

####  (2) productivity 

- 핫 리로딩을 사용하므로 개발자는 변경할 때마다 전체 앱을 다시 컴파일 할 필요가 없음

####  (3) cost 

- 시간, 비용 모두 절감 
- 하나의 코드 기반으로 유지 관리 비용 절감
- 시장 출시 기간 단축 

#### (4) native-like UI

#### (5) major players

- Walmart
- Airbnb
- Wix
- UberEATs
- soundcloud
- Skype



##  ✍

###  1. expo

#### (0) expo란?

-  SDK와 빌드 환경을 제공
- 순수하게 자바스크립트와 React로만 개발하고 네이티브 개발은 미리 제공된 모듈만 사용하도록 함
- https://meetup.toast.com/posts/191

####  (1) expo를 사용하는 이유

- Mac에서는 Android Studio가 돌아가지만, Window에서는 Xcode를 실행할 수 없다.
- expo는 iOS App emulator로써 매우 편리한 도구 (both window and Mac) 
- 핫 리로딩 
- 내 iOS폰에서 핫 리로딩! 
- 다른 디바이스에 테스트앱 공유

####  (2)expo가 제공하는 라이브러리 메소드 예

- https://docs.expo.io/versions/latest/

####  (3) expo cli vs react-native cli 

- [간단비교](https://hoony-gunputer.tistory.com/entry/expo-cli-Vs-react-native-cl)
- [expo로 앱 개발 후기](https://medium.com/official-podo/expo로-앱-만들어본-후기-vs-vanilla-react-native-fc20c8dac937)



###  2. RN의 단점

- [참고](https://www.conceptatech.com/blog/why-you-should-or-shouldnt-use-react-native)

####  (1) 성능 

- 하이브리드 웹앱보다는 성능이 좋지만, 
-  large overhead framework를 감당하기에는 네이티브 앱에 못미친다. 
- It isn't well-suited to CPU-intensive apps like VR/AR. 
  - 그래도 최근 RN으로 점점 가벼운 VR/AR 앱들이 개발/출시되면서 경계는 흐려지는 추세  
  - 그래도 아직까지는 CPU 집약적인 앱을 개발할 때는 Native앱으로 개발하는 것이 마땅 ( 차라리 PWA가 적합 )

####  (2) “write once, use anywhere”  모토가 완벽히 맞는말은 아니다. 

- 기능에 따라 os에 맞추어 개발해야하는 경우가 있다
- 그 경우가 많은건 아니다.  (In practice anywhere from 60-90% of the codebase can be fully shared.)

####  (3) Size

- 네이티브 앱보다 크다 
- 구형/저가형 디바이스는 감당을 못할 수 있다. 
- 다운로드 시간도 오래걸리고, 
-  용량을 많이 잡아먹어서 앱 자체가 사용자(고객) 선택지에서 제외될 수도있다,,
- RN 개발자는 용량을 줄일 수있는 개발론을 갖고있는 것이 좋다.

####  (4)  코드효율

- React Native adds an **unnecessary layer of complexity.**
  - 크고 복잡한 코드 
  - 러닝커브가 가파르다 
  - 리액트 외 개발자에게 친숙하지 않다

