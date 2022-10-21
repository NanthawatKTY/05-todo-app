<script setup lang="ts">
const input = ref("")
const { todos, addTodo, updateTodo, deleteTodo } = useTodos();

const handleAddTodoClick = () => {
  addTodo(input.value);
  input.value = "";
};
</script>

<template>
    <div class="container">
      <NCard class="cards">
        <h1 class="text-3xl font-bold text-green-500">My TODOs</h1>
        <div class="add-todo">
          <input v-model="input" class="p-4 mt-5" type="text" placeholder="Add a new todo..."/>
          <NButton @click="handleAddTodoClick" type="submit">Add</NButton>
        </div>
        <NCard v-for="todo in todos" :key="todo.id" class="card">
          <h4 @click="updateTodo(todo.id)" :class="todo.completed ? 'completed' : null">{{todo.item}}</h4>
          <p @click="() => deleteTodo(todo.id)">x</p>
        </NCard>
      </NCard>
    </div>
</template>

<style scoped>
  .container {
    /* background-color: white; */
    padding: 2rem;
    margin: 0 auto;
    max-width: 50%;
  }

  .cards {
    padding: 2rem;
    margin-top: 1rem;
  }

  .add-todo {
    display: flex;
    justify-content: space-between;
  }

  .card{
    padding: 1rem;
    margin-top: 1rem;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
  }

  .completed{
    text-decoration: line-through;
  }
</style>