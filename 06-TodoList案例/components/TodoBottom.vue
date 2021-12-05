<template>
  <div class="todo-footer" v-show="count">
    <label>
      <input type="checkbox" v-model="isAll"/>
    </label>
    <span> <span>已完成{{accomplish}}</span> / 全部{{ count }} </span>
    <button class="btn btn-danger" @click="clearAccomplish">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  name: "TodoBottom",
  props: ["todoList","clearAccomplishTodo","checkDone"],
  methods: {
    clearAccomplish(){
      this.clearAccomplishTodo();
    }
  },
  computed:{
    count(){
      return this.todoList.length;
    },
    accomplish(){
      return this.todoList.reduce((pre,todo) =>{
        return pre + (todo.done ? 1 : 0);
      },0)
    },
    isAll:{
      get(){
        return this.accomplish === this.count && this.count > 0;
      },
      set(value){
        return this.checkDone(value)
      }
    }
  }
};
</script>

<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}
.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}
.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}
.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
