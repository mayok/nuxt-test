<template>
  <section class="container">
    <app-header />
    <div class="tile">
      <img class="item" src="https://picsum.photos/200?random" alt="image"/>
      <img class="item" src="https://picsum.photos/200?random" alt="image"/>
      <img class="item" src="https://picsum.photos/200?random" alt="image"/>
      <img class="item" src="https://picsum.photos/200?random" alt="image"/>
      <img class="item" src="https://picsum.photos/200?random" alt="image"/>
    </div>
    <app-footer />
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'

export default {
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
  justify-content: center;
  align-items: center;
  text-align: center;
}

.tile {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0 0;
  grid-auto-flow: row;
  align-content: start;
  width: 100vw;
  margin: 46px 0 0;
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
