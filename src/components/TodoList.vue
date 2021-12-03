<template>
  <ul class="todo-main">
     <TodoItem v-for="(item,id) in todoList" :key="id" :content="item.title"></TodoItem>
  </ul>
</template>

<script>
import TodoItem from "./TodoItem";

export default {
  name: "TodoList",
  data() {
    return {
      todoList:[
        {
          id: '001', title:'学习', done: false,
        },
        {
          id: '002', title:'睡觉', done: false,
        },
        {
          id: '003', title:'code', done: false,
        }
      ]
    }
  },
  components: {
    TodoItem,
  },
};
</script>

<style scoped>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}
.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
