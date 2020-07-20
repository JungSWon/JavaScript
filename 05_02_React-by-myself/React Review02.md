# React Review  2

##   📚

###  1. React App의 크기 

- 클라이언트사가 앱 크기를 제한하는 경우가 더러 있다. 
- 모바일 앱의 평균 크기는 100~400MB
- 추가 콘텐츠를 설치할 경우 앱의 파일 크기는 최대 2GB까지

####  (1)  안드로이드 앱 크기 제한

- APK가 타겟팅하는 Android 버전에 따른 크기 제한은 다음과 같습니다.
  - **100MB**: Android 2.3 이상을 타겟팅하는 APK(API 레벨 9~10 및 14 이상)
  - **50MB**: Android 2.2 이하를 타겟팅하는 APK(API 레벨 8 이하)

####  (2) iOS 앱 크기 제한

- [iOS13, 셀룰러 상태에서 앱스토어 다운로드 용량 제한 사실상 폐지](https://deadjobs.tistory.com/2515)
  - 최근 셀룰러 데이터로 앱스토어에서 다운로드 할 수 있는 앱 용량을 기존 150에서 200MB로 상향조정
  - GB단위의 대형 앱도 다운로드가 가능하다.

#### (3) 시중 앱크기 

| 앱       | 구글 APK  (MB) | 애플 (MB) | APK  |
| -------- | -------------- | --------- | ---- |
| 당근마켓 | 15.7           | 193.5     |      |
| SSG.com  | 53.8           | 173.5     |      |



####  (4)  시중 React 앱 크기
| 앱        | Android (MB) | Apple App store (MB) |
| --------- | ------------ | -------------------- |
| Airbnb    | 105          | 288.1                |
| Netflix   | 56           | 77.7                 |
| Spotify   | 55.9 (APK)   | 133.4                |
| Slack     |              | 186.1                |
| Instagram | 33.8         | 141.2                |
| Daum      | 22.1         | 60.3                 |




### 2. React -> React Native 

- https://reactnativeseoul.org/t/react-vs-react-native/207/11

- React 에 모바일 컨트롤 메소드를 얹으면 RN가 되는건가? 

  - UI는 바로쓰기 어렵고, 로직은 가능하다. 

  - 대표적인 예로, RN에서는 `<View>`인게 React 에서는 `<div>` 로 대응될 수 있지만, RN에서는 `<div>`를 못 알아먹는다. 

  - `react`에서 쓰는 `html css`코드를 제외하고는 재활용이 가능

  - 웹용 컴포넌트를 앱에서 바로 쓸 수 없고 div를 view로 다 바꿔서 쓰게 만들 수는 있다. 

  -  이를 극복하려는 시도가 UI framework들 ex) antd, material ui 

    : web과 네이티브가 큰 수정 없이 바로 쓸 수 있는 공통 모듈을 만들어 놓고 있어서 큰 변화 없이 쉽게 웹과 네이티브 소스를 공유

    : 비즈니스 로직은 React 나 RN모두 javascript로 코딩하니 공유할 수 있고, redux같은 스테이트 관리 개념도 공통적으로 쓰는 거라 같이 적용 가능

- ReactJS를 그대로 모바일로 가져와 사용한다는 점이 특징인데 다른 점이 있다면 HTML 앨리먼트 대신에 네이티브 컴포넌트 이름을 사용할 수 있다

- 액트로 이미 완성되어 있는 앱이라면 리액트 네이티브로 바꾸시는것보다 PWA로 만드시는게 제일 빠른 Transition

  - 장점: 앱처럼 아이콘을 만들 수 있다, 앱하고 동등한 정도로 빠르다
  - 단점: 앱스토어에 등록하는 형태가 아니라서 스토어가 제공하는 각종 통계치, VOC가 어렵다



### 3. React는 이런 앱에 최적이다

- 단순하고 반복되는 컴포넌트가 많은 프로젝트에 유리
- 커스터마이징이 높은 앱은 어렵다

###  4. ES5로 돌아가는 최구형의 IE버전 

- 참고 : https://kangax.github.io/compat-table/es5/
- IE 9 가 Strict Mode 외에는 ES5로 작성 가능 
- IE 8 은 Object/array literal extensions, Array methods, Date methods 포함 웬만한게 안됨 



### 5. Vue.js의 주개념을 React 개념으로 적용해보기 (비교)

- API 통신 
- 모델개념 (아마 프롭스)

###  6.  Sync Publising Guide? inline vs 모듈마다? 

### 7. expo 개발사 및 후원단체

- https://expo.io/about



##  ✍

###  1. what is Third Party Library

- 프로그래밍을 도와주는 plug_in 이나 library 등을 만드는 회사
- 제작사에서 만든것이 아니라 다른 업체에서 만든 해당 툴 지원 라이브러리
- 제조사와 사용자 이외 외부의 생산자



###  2. babel vs webpack 

#### (1) babel

- ES6를 호환시켜줌

####  (2) webpack 

- 모듈화된 코드를 한 파일로 합치고(번들링) 
- 코드를 수정 할 때마다 웹브라우저를 리로딩하는 등의 기능 제공

###  3. JSX

- https://ko.reactjs.org/docs/introducing-jsx.html 
- JavaScript를 확장한 문법



####  4. 근태내역, 출근부 프로젝트

- Structure 짜보기 

####  5. 앱 크기를 줄이는 방법 

- [앱크기를 줄이는 방법](https://www.it-swarm-ko.tech/ko/android/앱-apk-크기를-줄이는-방법/971021833/)



https://araikuma.tistory.com/486

