<template>
  <div class="main flex">
    <sidebar></sidebar>
    <choice></choice>
    <edit></edit>
  </div>
</template>

<script>
import sidebar from './component/sidebar.vue'
import choice from './component/choice.vue'
import edit from './component/edit.vue'
import store from './store/index.js'
export default {
  name: 'app',
  store,
  components: {
    sidebar,
    choice,
    edit
  }
}
</script>

<style>
html{
  width: 100%;
  height: 100%;
}
body{
  width: 100%;
  height: 100%;
}
.flex{
  display: flex;
}
.main{
  width: 100%;
  height: 100%;
}
</style>
