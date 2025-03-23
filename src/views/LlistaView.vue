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
    <div class="container mt-4">
      <h2 class="text-center mb-4">Llista de la compra</h2>
  
      <!-- Formulario -->
      <form @submit.prevent="addTask" class="d-flex gap-2 mb-3">
        <input 
          type="text" 
          v-model="newTask" 
          placeholder="Afegir tasca" 
          class="form-control"
        />
        <button type="submit" class="btn btn-success">
          <i class="bi bi-plus-lg"></i> Afegir
        </button>
      </form>
  
      <!-- Lista de tareas -->
      <ul class="list-group">
        <div v-if="tasks.length">
          <li 
            v-for="task in tasks" 
            :key="task.id" 
            class="list-group-item d-flex align-items-start justify-content-between"
            :class="{ 'done': task.done, 'fw-bold text-danger': task.priority }"
          >
            <!-- Botón de completado -->
            <button @click="toggleDone(task.id)" class="btn btn-outline-primary btn-sm">
              <i :class="task.done ? 'bi bi-check-circle-fill' : 'bi bi-circle'"></i>
            </button>
  
            <!-- Texto de la tarea -->
            <span>{{ task.text }}</span>
  
            <!-- Botón de prioridad -->
            <button @click="togglePriority(task.id)" class="btn btn-outline-danger btn-sm">
              <i :class="task.priority ? 'bi bi-heart-fill' : 'bi bi-heart'"></i>
            </button>
  
            <!-- Botón de eliminar -->
            <button @click="deleteTask(task.id)" class="btn btn-outline-danger btn-sm">
              <i class="bi bi-trash"></i>
            </button>
          </li>
        </div>
        <div v-else class="text-center text-muted mt-3">
          <p>No hi ha cap tasca</p>
        </div>
      </ul>
    </div>
  </template>
  
  <style scoped>
  .done {
    text-decoration: line-through;
    color: #6c757d;
  }
  </style>
  
