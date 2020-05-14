// 검색 히스토리 데이터를 관장 
export default {
  // 컬랙션 형식의 데이터를 가지고 있음 
  data: [
    { keyword: '검색기록2', date: '12.03' },
    { keyword: '검색기록1', date: '12.02'},
    { keyword: '검색기록0', date: '12.01' },
  ],

  // data 리턴
  list() {
    // 서버에서 비동기로 가져오거나, 쿠키로 가져오는 경우를
    // 공통적으로 처리하기 위해 Promise 사용 
    return Promise.resolve(this.data)
  },
  
  // 추가될 검색어를 받아서 실제 데이터에 있는지 여부 체크
  add(keyword = '') {
    keyword = keyword.trim()
    if (!keyword) return 
    if (this.data.some(item => item.keyword === keyword)) {
      // 있으면 삭제
      this.remove(keyword)
    }
    // date 다시정의하여 기존 데이터에 합치기 
    const date = '12.31'
    this.data = [{keyword, date}, ...this.data]
  },
  
  // 키워드를 받아 키워드 해당 값 삭제 
  remove(keyword) {
    this.data = this.data.filter(item => item.keyword !== keyword)
  }
}