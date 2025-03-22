<script setup>
  /* eslint-disable */

import { ref, onMounted, defineProps } from 'vue';
import axios from 'axios';

const props = defineProps({
    estaci: String
});

const embalses = ref([]);

console.log("Parámetro recibido:", props.estaci);


const fetchEmbalse = async () => {
    try {
        console.log("Parámetro recibido:", props.estaci);

        if (!props.estaci) {
            throw new Error("No se recibió el parámetro 'estaci'");
        }
        const response = await axios.get('https://analisi.transparenciacatalunya.cat/resource/gn9e-3qhr.json', {
            params: {
                $select: 'dia,estaci,nivell_absolut,percentatge_volum_embassat,volum_embassat',
                $where: `estaci='${props.estaci}'`,
                $order: 'dia DESC',
                //$limit: 100
            }
        });

        embalses.value = response.data;
        console.log("Datos recibidos:", embalses.value);
    } catch (error) {
        console.error("Error al obtener los datos:", error);
    }
};

onMounted(fetchEmbalse);
</script>

<template>
    <div class="container">
        <router-link to="/aigua">⬅ Tornar</router-link>
        <div v-if="embalses.length">
            <h1>{{ embalses[0].estaci }}</h1>
            <div v-for="(embalse, index) in embalses" :key="embalse.dia">
                <p><strong>Día {{ index + 1 }}:</strong> {{ new Date(embalse.dia).toLocaleDateString() }}</p>
                <p><strong>Nivell Absolut:</strong> {{ embalse.nivell_absolut }} m</p>
                <p><strong>Volum Embassat:</strong> {{ embalse.volum_embassat }} hm³</p>
                <p><strong>Porcentatge volum:</strong> {{ embalse.percentatge_volum_embassat }}%</p>
                <hr>
            </div>
        </div>
        <div v-else>
            <p>Cargando...</p>
        </div>
    </div>
</template>
