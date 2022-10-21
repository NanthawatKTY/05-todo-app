<script setup lang="ts">
    const {data, error} = useFetch("/api/todo")
</script>

<template>
    <div class="flex justify-center items-center h-screen">
      <h1 class="text-3xl font-bold text-green-500">
        TODO APP With REST-API.
        API: {{data}}
      </h1>
    </div>
</template>