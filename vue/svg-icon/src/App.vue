<template>
  <div id="app">
    <svgIconsDemo></svgIconsDemo>
    <span>Icon Demonstration in App.vue:</span>
    <svgicon icon="ic_error_24px" width="18" height="18" color="#000"></svgicon>
  </div>
</template>

<script>
import svgIconsDemo from "./components/svgIconsDemo.vue";
import './compiled-icons/index.js';
export default {
  name: "App",
  components: {
    svgIconsDemo,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
