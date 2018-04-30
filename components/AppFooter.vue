<template>
  <div class="footer">
    <span>H</span>
    <span>S</span>
    <span>U</span>
    <span>E</span>
    <span>S</span>
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
span {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-weight: 300;
  font-size: 1em;
  padding: 8px 0;
  color: #35495e;
  letter-spacing: 1px;
  justify-self: center;
  align-self: center;
}
</style>
