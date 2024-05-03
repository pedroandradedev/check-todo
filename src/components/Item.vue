<template>
    <div class="border rounded px-4 animate-fade-in" :class="{
        'bg-green-400/10 border-green-400/30': isCompleted,
        'bg-white/5 border-white/10': !isCompleted,
    }">
        <div class="flex items-center gap-3 border-b border-neutral-400 last:border-b-0">
            <div class="flex items-center justify-center">
                <button :class="{
        'text-green-400': isCompleted,
        'text-neutral-400 hover:text-green-400/50': !isCompleted,
    }" @click="onCheckClick">
                    <template v-if="isCompleted">
                        <svg class="w-5 h-5" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill-rule='evenodd'>
                            <path fill='none'
                                d='M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z' />
                            <path fill='currentColor'
                                d='M21.192 5.465a1 1 0 0 1 0 1.414L9.95 18.122a1.1 1.1 0 0 1-1.556 0l-5.586-5.586a1 1 0 1 1 1.415-1.415l4.95 4.95L19.777 5.465a1 1 0 0 1 1.414 0Z' />
                        </svg>
                    </template>
                    <template v-else>
                        <svg class="w-5 h-5" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill-rule='evenodd'>
                            <path fill='none'
                                d='M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z' />
                            <path fill='currentColor'
                                d='M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5Zm16 0H5v14h14V5Z' />
                        </svg>
                    </template>
                </button>
            </div>

            <div class="flex-1">
                <input v-model="title" type="text" placeholder="Digite a sua tarefa"
                    class="bg-transparent placeholder-neutral-500 text-neutral-300 font-light focus:outline-none block w-full py-3 appearance-none leading-normal"
                    :class="{
        '[&:not(:focus)]:line-through': isCompleted,
    }">
            </div>

            <div class="ml-auto flex items-center justify-center">
                <button class="focus:outline-none text-neutral-400 hover:text-red-500 transition-all" @click="onDelete">
                    <svg class="h-4 w-4" xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'
                        fill-rule='nonzero'>
                        <path fill='none'
                            d='M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z' />
                        <path fill='currentColor'
                            d='M14.28 2a2 2 0 0 1 1.897 1.368L16.72 5H20a1 1 0 1 1 0 2l-.003.071-.867 12.143A3 3 0 0 1 16.138 22H7.862a3 3 0 0 1-2.992-2.786L4.003 7.07A1.01 1.01 0 0 1 4 7a1 1 0 0 1 0-2h3.28l.543-1.632A2 2 0 0 1 9.721 2h4.558Zm3.717 5H6.003l.862 12.071a1 1 0 0 0 .997.929h8.276a1 1 0 0 0 .997-.929L17.997 7ZM10 10a1 1 0 0 1 .993.883L11 11v5a1 1 0 0 1-1.993.117L9 16v-5a1 1 0 0 1 1-1Zm4 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1Zm.28-6H9.72l-.333 1h5.226l-.334-1Z' />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useTodoStore } from '@/stores/todo';
import { debounce } from '@/utils';

const props = defineProps({
    todo: {
        type: Object,
        default: () => ({}),
    }
})

const title = ref(props.todo.title)
const isCompleted = ref(props.todo.completed)
const todos = useTodoStore()

const onDelete = () => {
    todos.delete(props.todo.id)
}

const updateTodo = () => {
    const payload = {
        id: props.todo.id,
        data: {
            title: title.value,
            completed: isCompleted.value,
            createTime: props.todo.createTime
        }
    }
    todos.update(payload)
}

const onTitleChange = () => {
    if (!title.value) return
    updateTodo()
}
const debouncedFetch = debounce(() => {
    onTitleChange()
}, 1000);
watch(title, () => {
    debouncedFetch()
})

const onCheckClick = () => {
    isCompleted.value = !isCompleted.value
    updateTodo()
}

</script>