import Vue from 'vue'

export default {
  setCryptoRates (state, data) {
    Vue.set(state, 'cryptoRates', data)
  }
}
