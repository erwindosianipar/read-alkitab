import axios from 'axios'

export default {
    getPassageList() {
        return axios.get(process.env.VUE_APP_API_URL + '/v2/passage/list')
    },
    getPassageChapter(passage, chapter) {
        return axios.get(process.env.VUE_APP_API_URL + '/v3/passage/' + passage + '/' + chapter)
    }
}
