<template>
    <p>Contador hijo: {{ contador }}</p>
    <div class="d-flex justify-content-evenly" style="width: 200px;">
        <button 
        type="button" class="btn btn-primary"
        @click="incrementar">
            <i class="bi bi-plus-circle"></i>
        </button>
        <p class="fs-4">{{ contador }}</p>
        <button 
        type="button" class="btn btn-danger"
        @click="decrementar">
            <i class="bi bi-dash-circle"></i>
        </button>
    </div>
</template>

<script setup>
/* eslint-disable */
import { inject } from 'vue';
// Inyectamos la variable y las funciones
const contador = inject('contador');
const incrementar = inject('incrementar');
const decrementar = inject('decrementar');
</script>