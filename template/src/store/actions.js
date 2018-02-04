import * as api from '../api'

export default {
  asyncRequest ({ commit }) {
    // https://api.coinmarketcap.com/v1/ticker/?limit=10
    return api.getRates('https://api.coinmarketcap.com/v1/ticker/?limit=10').then(r => {
      // console.log(r.data)
      commit('setCryptoRates', r.data)
    })
  }
}
