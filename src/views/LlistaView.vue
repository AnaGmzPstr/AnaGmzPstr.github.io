<script setup>
import { ref } from 'vue';

// llista de tasques
const tasks = ref([])

// funció per afegir una nova tasca
function addTask() {
    tasks.value.push({
        id: tasks.value.length + 1,
        text: document.getElementById('task').value,
        done: false
    })
}


</script>

<template>
    <h2>Llista de la compra</h2>
    <!-- Afegir tasques -->
    <form @submit.prevent="addTask">
        <input type="text" v-model="newTask" placeholder="Afegir tasca ">
        <button type="submit">Afegir</button>
    </form>
    <ul>
        <div v-if="tasks.length">
            <li v-for="task in tasks" :key="task.id">{{ task.name }}</li>
        </div>
        <div v-else>
            <p>No hi ha cap tasca</p>
        </div>
    </ul>
</template>