<template>
  <div>
    <!-- <app-header 
    v-bind:프롭스 속성 이름(AppHeader.vue)="상위 컴포넌트(App.vue)의 데이터 이름"
    v-on:하위 컴포넌트에서 올라온 이벤트 이름="상위 컴포넌트의 메소드 이름"></app-header>-->
    <app-header v-bind:propsdata="str" v-on:renew="renewStr"></app-header>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
// new Vue({
//   data: {
//     str: hi
//   }
// })
// 위와 아래는 동일하다
export default {
  data: function() {
    return {
      str: "App Header"
    };
  },
  components: {
    "app-header": AppHeader
  },
  methods: {
    renewStr: function() {
      this.str = "hi";
    }
  }
};
</script>

<style></style>
