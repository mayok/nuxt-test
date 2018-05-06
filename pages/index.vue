<template>
  <section class="container">
    <app-header />
    <div class="tile">
      <img v-for="list in lists"
        :key="list.id"
        class="item"
        :src="list.url" />
    </div>
    <app-footer />
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'
import lists from '~/static/data.json'

export default {
  data () {
    return { lists }
  },

  components: {
    AppLogo,
    AppHeader,
    AppFooter
  }
}
</script>

<style>
.container {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  display: flex;
}

.tile {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0 0;
  grid-auto-flow: row;
  align-content: start;
  width: 100vw;
  margin: 50px 0 0; /* header hight */
  background: #fff;
}
.item {
  width: 100%;
  margin: 0 1px 1px 0;
  padding: 0;
  break-inside: avoid;
  box-sizing: border-box;
}
.item:nth-of-type(3n+3) {
  margin-right: 0;
}

</style>
