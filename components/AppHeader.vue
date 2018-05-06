<template>
  <div class="header">
    <input id="tab1" type="radio" name="tab" class="tab" checked />
    <input id="tab2" type="radio" name="tab" class="tab" />

    <div class="virtual-tab">
      <label class="tab1" for="tab1">
        <i class="fas fa-list-ul"></i>
      </label>
      <label class="tab2" for="tab2">
        <i class="far fa-images"></i>
      </label>
    </div>

  </div>
</template>

<style>
  .header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    background-color: #fefefe;
    color: #393939;
    border-bottom: 1px solid #cfcfcf;
  }

  .tab {
    display: none;
  }
  .virtual-tab label{
    width: 50%;
    display: inline-block;
    padding: 4px 0;
    box-sizing: border-box;
    color: #999;
    text-align: center;
    transition: ease .2s color;
  }
  #tab1:checked ~ .virtual-tab .tab1 i {
    background: #fff;
    color: #4dadf7;
  }
  #tab2:checked ~ .virtual-tab .tab2 i {
    background: #fff;
    color: #4dadf7;
  }
</style>
