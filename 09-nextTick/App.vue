<template>
  <div>
    <div id="root">
      <div class="todo-container">
        <div class="todo-wrap">
          <TodoHeader :addTodo="addTodo" />
          <TodoList
            :todos="todoList"
            :changeTodo="changeTodo"
            :deleteTodo="deleteTodo"
          />
          <TodoBottom
            :todoList="todoList"
            :clearAccomplishTodo="clearAccomplishTodo"
            :checkDone="checkDone"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoBottom from "./components/TodoBottom";

export default {
  components: {
    TodoHeader,
    TodoList,
    TodoBottom,
  },
  data() {
    return {
      todoList: JSON.parse(localStorage.getItem("todo")) || [],
    };
  },
  methods: {
    // 添加一个todo
    addTodo(x) {
      this.todoList.unshift(x);
    },
    // 修改todo是否完成
    changeTodo(id) {
      this.todoList.forEach((todo) => {
        if (todo.id === id) {
          todo.done = !todo.done;
        }
      });
    },
    // 删除一个todo
    deleteTodo(id) {
      this.todoList = this.todoList.filter((todo) => todo.id != id);
    },
    // 清除已完成的todo
    clearAccomplishTodo() {
      this.todoList = this.todoList.filter((todo) => !todo.done);
    },
    //修改todo done状态
    checkDone(done) {
      this.todoList.forEach((todo) => (todo.done = done));
    },
    //修改todo title
    editItemTitle(id, title) {
      this.todoList.forEach((todo) => {
        if (todo.id == id) {
          todo.title = title;
        }
      });
    },
  },
  mounted() {
    //添加一个事件
    this.$bus.$on("editTodo", this.editItemTitle);
  },
  beforeDestroy() {
    //销毁事件
    this.$off('editTodo')
  },
  watch: {
    todoList: {
      deep: true,
      handler(value) {
        localStorage.setItem("todo", JSON.stringify(value));
      },
    },
  },
};
</script>

<style>
body {
  background: #fff;
}
.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}
.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-edit {
  color: #fff;
  background-color: #3473fa;
  border: 1px solid #4450ff;
  margin: 5px;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}
.btn:focus {
  outline: none;
}
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
