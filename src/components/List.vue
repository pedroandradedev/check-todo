<template>
    <div class="space-y-2 overflow-hidden overflow-y-auto">
        <Item v-for="todo in todos.list" :key="todo.id" :todo="todo" />
    </div>
</template>

<script setup>
import Item from '@/components/Item.vue'
import { useTodoStore } from '@/stores/todo'

const todos = useTodoStore()
</script>