<script setup>
  /* eslint-disable */

import { ref } from 'vue';

const tasks = ref([])

const newTask = ref('')

// funció per afegir una nova tasca
function addTask() {
    if (newTask.value.trim()) {
        tasks.value.push({
            id: tasks.value.length + 1,
            text: newTask.value,
            done: false,
            priority: false,
        })
        newTask.value = '';
    }
}

// funció per eliminar una tasca
function deleteTask(id) {
    tasks.value = tasks.value.filter(task => task.id !== id);
}

// funció per marcar la tasca com feta
function toggleDone(id) {
    const task = tasks.value.find(task => task.id === id);
    if (task) {
        task.done = !task.done;
    }
}

// funció per marcar la tasca com prioritaria
function togglePriority(id) {
    const task = tasks.value.find(task => task.id === id);
    if (task) {
        task.priority = !task.priority;
    }
}
</script>

<template>
    <div class="content">
        <h2>Llista de la compra</h2>

        <form @submit.prevent="addTask">
            <input type="text" v-model="newTask" placeholder="Afegir tasca ">
            <button type="submit">Afegir</button>
        </form>
        <ul>
            <div v-if="tasks.length">
                <li v-for="task in tasks" :key="task.id" :class="{ 'done': task.done, 'priority': task.priority }">
                    <button @click="toggleDone(task.id)">
                        {{ task.done ? '☑️' : '✔️' }}
                    </button>

                    <span :style="{ textDecoration: task.done ? 'line-through' : 'none' }">{{ task.text }}</span>


                    <button @click="togglePriority(task.id)">
                        {{ task.priority ? '❤️':'🤍' }}
                    </button>

                    <button @click="deleteTask(task.id)">❌</button>
                </li>
            </div>
            <div v-else>
                <p>No hi ha cap tasca</p>
            </div>
        </ul>
    </div>
</template>

<style scoped>
.content{
    display: grid;
    justify-content: center;
    align-items: center;
}
.done {
    color: grey;
}

.priority {
    color: red;
    font-weight: bold;
}
</style>
