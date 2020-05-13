# MVC 

- Model , View , Controler 

## Model 
- 데이터 관리 
- DB 데이터를 객체에 전달 
- 객체로부터 입력받은 데이터를 DB로 전달
- DB에 직접 접근하지않고 API를 통해 데이터를 받아와서 전달
- 외부객체로부터 입력받으면 백엔드 API를 통해 전달 

## View 
- 화면관리 
- model의 데이터를 화면에 뿌림
- HTML/CSS/JS로 구현 
- 입력 데이터를 처리하기도 함 
  - 입력 이벤트를 받아서 객체에 전달

## Control
- Model과 View를 연결
- Model로부터 데이터를 가져와서 View에 전달, 
- View로부터 데이터를 입력받아 Model에 전달 