<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute} from 'vue-router';
import axios from 'axios';

const route = useRoute()
const embalses = ref([])

const fetchEmbalse = async () =>{
    try{
        console.log("Parámetro recibido:", route.params.estacio);

        const response = await axios.get('https://analisi.transparenciacatalunya.cat/resource/gn9e-3qhr.json');
        const datos = response.data

        embalses.value = datos
        .filter(emb => emb.estaci.trim() === decodeURIComponent(route.params.estacio))
        .map((embalse, index)=>({
            ...embalse,
            index: index+1
        }))
        
        console.log(embalses.value)
    } catch (error){
        console.error(error)
    }
}

onMounted(fetchEmbalse);

watch(() => route.params.estacio, fetchEmbalse);
</script>

<template>
    <div v-if="embalses.length" class="container">
        <router-link to="/aigua">Volver a la lista</router-link>
        <h1>{{ embalses[0].estaci }}</h1>
        <div v-for="embalse in embalses" :key="embalse.dia">
            <!-- Contar días -->
            <p><strong>Día {{ embalse.index }}:</strong> {{ new Date(embalse.dia).toLocaleDateString() }}</p>
            <p><strong>Nivell Absolut:</strong> {{ embalse.nivell_absolut }} m</p>
            <p><strong>Volum Embassat:</strong> {{ embalse.volum_embassat }} hm³</p>
            <p><strong>Porcentatge volum:</strong> {{ embalse.percentatge_volum_embassat }}%</p>
            <hr>
        </div>
    </div>
    <div v-else>
        <p>Cargando...</p>
    </div>
</template>

<style>
.container{
    display: grid;
    justify-content: center;
    padding: 20px;
    margin: auto 20%;
}

.container h1{
    border-bottom: #2c3e50 solid;
}
</style>