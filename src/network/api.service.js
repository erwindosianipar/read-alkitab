import axios from 'axios'

export default {
  getPassageList() {
    return axios.get('https://api-alkitab.herokuapp.com/v2/passage/list')
  },
  getPassageChapter(passage, chapter) {
    return axios.get('https://api-alkitab.herokuapp.com/v2/passage/' + passage + '/' + chapter)
  }
}
