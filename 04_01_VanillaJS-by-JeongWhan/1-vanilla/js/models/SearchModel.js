

const data = [
  {
    id: 1,
    name: '[키친르쎌] 홈메이드 칠리소스 포크립 650g',
    image: 'https://cdn.bmf.kr/_data/product/H1821/5a4ed4e8a6751cb1cc089535c000f331.jpg'
  },
  {
    id: 2,
    name: '[키친르쎌] 이탈리아 파티 세트 3~4인분',
    image: 'https://cdn.bmf.kr/_data/product/H503E/300d931e3b8252ed628b6a3c2f56936b.jpg'
  }
]


// 쿼리를 인자로 받아 쿼리데이터 리턴
// 간단한 샘플 프로젝트이므로, 실제 검색이 아니라 데이터 전체를 반환하도록 함 
export default {
  list(query) {
    return new Promise(res => {
      setTimeout(()=> {
        res(data)
      }, 200);
    })
  }
}