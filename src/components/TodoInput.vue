<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" />
    <!-- <button v-on:click="addTodo">add</button> -->
    <span class="addContainer" v-on:click="addTodo">
      <i class="fas fa-plus addBtn" aria-hidden="true"></i>
    </span>

    <modal v-if="showModal" @close="showModal= false">
      <h3 slot="header">
        경고
        <i class="closeModalBtn fas fa-times" @click="showModal=false"></i>
      </h3>
      <div slot="body">아무것도 입력하지 않으셨습니다.</div>
    </modal>
  </div>
</template>

<script>
import Modal from "./common/Modal.vue";
export default {
  data() {
    return {
      newTodoItem: "",
      showModal: false
    };
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== "") {
        // this.$emit('이벤트 이름', 인자1, 인자2, ...);
        // this.$emit("addTodoItem", this.newTodoItem);
        this.$store.commit("addOneItem", this.newTodoItem);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = "";
    }
  },
  components: {
    Modal
  }
};
</script>

<style scoped>
input :focus {
  outline: none;
}
.inputBox {
  background: #ffff;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478f8, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: #ffff;
  vertical-align: middle;
}
.closeModalBtn {
  color: #42b983;
}
</style>