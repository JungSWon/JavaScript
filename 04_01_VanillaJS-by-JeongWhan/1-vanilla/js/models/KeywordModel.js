// 추천 검색어를 보여주기 위한 모델 
export default {
  // 컬렉션 형태로 키워드만 데이터를 가지고 있다. 
  data: [
    {keyword: '이탈리아'}, 
    {keyword: '세프의요리'}, 
    {keyword: '제철'}, 
    {keyword: '홈파티'}
  ],

  // 타임아웃을 걸어 수초 후 데이터 반환 
  list() {
    return new Promise(res => {
      setTimeout(() => {
        res(this.data)
      }, 200)
    })
  }
}