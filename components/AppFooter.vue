<template>
  <div class="footer">
    <i class="fas fa-home"></i>
    <i class="fab fa-sistrix"></i>
    <i class="fas fa-plus-circle"></i>
    <i class="far fa-heart"></i>
    <i class="far fa-user"></i>
  </div>
</template>

<style>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 0 0;
  grid-auto-flow: row;
  width: 100%;
  background: #fefefe;
  border-top: 1px solid #cfcfcf;
  align-items: center;
}
i {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-weight: 300;
  font-size: 1em;
  padding: 12px 0;
  color: #35495e;
  letter-spacing: 1px;
  justify-self: center;
  align-self: center;
}
</style>
