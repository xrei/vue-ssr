import axios from 'axios'

export function getRates (url) {
  return axios.get(url)
}
