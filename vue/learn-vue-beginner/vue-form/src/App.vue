<template>
  <form v-on:submit.prevent="submitForm">
    <!-- button을 클릭했을 때 form에 정의된 메소드가 실행된다
    .prevent: 아래의 `event.preventDefalut();` 와 동일한 동작을 한다-->
    <div>
      <label for="username">id:</label>
      <!-- v-model: two way binding. input에 입력된 값이 자동으로 username에 연결되거나 username의 내용을 자동으로 input에 반영해준다 -->
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="password">pw:</label>
      <input id="password" type="password" v-model="password" />
    </div>
    <button type="submit">login</button>
  </form>
</template>

<script>
// 브라우저에서 서버로 데이터를 주고받기위한 라이브러리 axios 추가
import axios from "axios";

export default {
  data: function() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    submitForm: function() {
      // 일반적인 자바스크립트에서 폼을 제어하던 방법
      // event.preventDefault();
      console.log(this.username, this.password);
      var url = "https://jsonplaceholder.typicode.com/users";
      var data = {
        username: this.username,
        password: this.password
      };
      // .post: 데이터를 생성할 때 필요한 속성
      axios
        .post(url, data)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style></style>
