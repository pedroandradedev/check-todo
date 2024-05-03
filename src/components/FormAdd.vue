<template>
    <form @submit.stop.prevent="addTodo"
        class="flex items-center pr-4 bg-black/30 border border-white/20 rounded focus-within:border-green-400">
        <input ref="input" v-model="title" placeholder="Adicione uma nova tarefa..." type="text"
            class="bg-transparent placeholder-white/40 text-white font-light focus:outline-none block w-full appearance-none leading-normal py-3 pr-3 pl-4">

        <button class="text-green-400 text-xs font-semibold focus:outline-none" type="submit">
            ADICIONAR
        </button>
    </form>
</template>

<script setup>
import { ref } from 'vue';
import { useTodoStore } from '@/stores/todo';

const input = ref(null)
const title = ref('')
const todos = useTodoStore()

const addTodo = () => {
    if (!title.value) {
        input.value.focus()
        return false;
    }

    todos.add({
        title: title.value,
        completed: false
    }).finally(() => {
        title.value = ''
        input.value.focus()
    })
}
</script>