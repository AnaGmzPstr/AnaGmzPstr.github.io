<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const embalses = ref([]);

const fetchEmbalse = async () => {
    try {
        const estacio = decodeURIComponent(route.params.estacio);
        console.log("Parámetro recibido:", estacio);

        const response = await axios.get('https://analisi.transparenciacatalunya.cat/resource/gn9e-3qhr.json', {
            params: {
                $select: 'dia,estaci,nivell_absolut,percentatge_volum_embassat,volum_embassat',
                $where: `estaci='${estacio}'`,
                $order: 'dia DESC',
                $limit: 100
            }
        });

        embalses.value = response.data;
        console.log("Datos recibidos:", embalses.value);
    } catch (error) {
        console.error("Error al obtener los datos:", error);
    }
};

// Ejecutar la función cuando el componente se monte
onMounted(fetchEmbalse);
</script>

<template>
    <div class="container">
        <div v-if="embalses.length">
            <router-link to="/aigua">⬅ Tornar</router-link>
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

<style>
.container {
    display: grid;
    justify-content: center;
    padding: 20px;
    margin: auto 20%;
}

.container h1 {
    border-bottom: #2c3e50 solid;
}
</style>
