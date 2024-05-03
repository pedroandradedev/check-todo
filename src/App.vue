<template>
    <div class="w-full h-full flex items-center justify-center p-8 overflow-hidden">
        <div class="w-full max-w-xl max-h-full flex flex-col justify-center overflow-hidden">
            <Spinner v-if="loading" />
            <template v-else>
                <div
                    class="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm space-y-6 animate-bounce-in">
                    <img src="@/assets/logo.png" class="w-full max-w-40 mx-auto" />
                    <FormAdd />
                    <List v-if="todos.list.length" />
                    <Empty v-else />
                </div>
            </template>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTodoStore } from '@/stores/todo'
import Spinner from '@/components/Spinner.vue'
import FormAdd from '@/components/FormAdd.vue'
import List from '@/components/List.vue'
import Empty from '@/components/Empty.vue'

const loading = ref(false);
const todos = useTodoStore()

loading.value = true
todos.getAll().finally(() => {
    loading.value = false
})
</script>

<style scoped></style>
