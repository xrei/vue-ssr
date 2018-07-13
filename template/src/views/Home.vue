<template>
  <div class="container">
    <img src="public/logo.png">
    <h1>Vue.js 🔥 Server Side Rendering 🔥 template</h1>
    <p>⚡️ Blazing fast UX and performant SSR boilerplate mostly inspired by vue hackernews example. ⚡️</p>
    <br>
    <p>Example below is data fetched asynchronously using <code>asyncData()</code></p>
    <p>It means that this data will be fetched on <b>server</b> first and saved to the store</p>
    <div class="example-container">
      <div
        class="currency-item"
        v-for="i in currency"
        :key="i.id">
        <div class="name">\{{ i.symbol }}</div>
        <div class="price">$\{{ i.price_usd }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  asyncData ({ store, route }) {
    return store.dispatch('asyncRequest')
  },
  computed: {
    currency () {
      return this.$store.state.cryptoRates
    }
  },
  mounted () {
    this.interval = setInterval(() => {
      this.$bar.start()
      this.$store.dispatch('asyncRequest').then(this.$bar.finish())
    }, 2 * 60 * 1000)
  },
  beforeDestroy () {
    clearInterval(this.interval)
  }
}

</script>

<style scoped>
.container {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;
}
h1 {
  font-weight: 400;
  color: #455a64;
  margin-bottom: .5rem;
}
p {
  font-size: 1.25rem;
}

.example-container {
  display: flex;
  flex-flow: column;
  margin: 2rem;
  border-radius: 4px;
  border: 1px solid #651FFF;
  padding: 1rem;
}
.currency-item {
  display: inline-flex;
  font-size: 1.25rem;
  font-family: 'Roboto';
  margin-bottom: .25rem;
}
.currency-item > .name {
  width: 10rem;
  flex: 1;
}
</style>
