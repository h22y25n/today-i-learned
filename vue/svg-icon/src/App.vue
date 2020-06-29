<template>
  <div id="app">
    <!-- svgicon -->
    <svgIconsDemo></svgIconsDemo>
    <span>Icon Demonstration in App.vue:</span>
    <svgicon icon="ic_error_24px" width="60" height="60" color="#86cfee"></svgicon>
    <!-- svg-loader -->
    <svgIcon width="120" height="120" iconType="warning" iconColor="salmon" />
    <svgIcon width="60" height="60" iconType="error_outline" iconColor="#f0c863" />
    <svgIcon width="60" height="60" iconType="error" iconColor="#86cfee" />
  </div>
</template>

<script>
import svgIconsDemo from "./components/svgIconsDemo.vue";
import "./compiled-icons/index.js";
import svgIcon from "./components/svg-icon.vue";
export default {
  name: "App",
  components: {
    svgIconsDemo,
    svgIcon
  }
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
