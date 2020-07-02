<template>
  <div class="inputBox shadow">
    <!-- input에 입력된 값을 스크립트가 받기 위해 v-model이라는 디렉티브를 사용한다.
    input에 입력된 내용을 동적으로 감지하는 역할을 한다. -->
    <input type="text" class="inputBox" v-model="newTodoItem" />
    <!-- <button v-on:click="addTodo">add</button> -->
    <span class="addContainer" v-on:click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      newTodoItem: "",
    };
  },
  methods: {
    addTodo: function() {
      // console.log(this.newTodoItem);
      // 저장하는 로직 수행 후 input 박스의 내용 초기화
      // localStorage.setItem('key', 'value');
      localStorage.setItem(this.newTodoItem, this.newTodoItem);
      // 아래의 메소드를 수행하도록 처리
      this.clearInput();
    },
    // 저장하는 로직 분리
    clearInput: function() {
      this.newTodoItem = "";
    },
  },
};
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  height: 50px;
  border-radius: 5px;
  line-height: 50px;
  background: white;
}
.inputBox input {
  width: calc(100% - 4rem);
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  display: block;
  float: right;
  width: 3rem;
  border-radius: 0 5px 5px 0;
  background: linear-gradient(to right, #6478fb, #8763fb);
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.closeModalBtn {
  color: #42b983;
}
</style>
