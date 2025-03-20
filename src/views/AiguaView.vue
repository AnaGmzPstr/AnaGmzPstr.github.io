<script setup>
import {ref, onMounted } from 'vue';
import axios from 'axios';

const embalses = ref([]);

const fetchEmbalses = async()=>{
  try{
    const response = await axios.get('https://analisi.transparenciacatalunya.cat/resource/gn9e-3qhr.json')
    const datos = response.data;

    const embalsesFiltrados =[];
    const setEmbalses = new Set();
    datos.forEach((item)=>{
      if(!setEmbalses.has(item.estaci)){
          setEmbalses.add(item.estaci);
          embalsesFiltrados.push(item);
        }
      });
    embalses.value = embalsesFiltrados;
    console.log(setEmbalses);
    console.log(embalsesFiltrados);
  } catch (error){
    console.error(error)
  }
}

onMounted(fetchEmbalses)
</script>

<template>
  <div class="aigua">
    <h1>Embassaments de Catalunya</h1>
    <!-- TODO: Buscador -->

    <ul>
      <li v-for="embalse in embalses" :key="embalse.estaci">
        <router-link :to="`/aigua/${encodeURIComponent(embalse.estaci)}`">
          {{ embalse.estaci }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.aigua{
  display: grid;
  justify-content: center;
  align-items: center;
}
h1 {
  font-size: 24px;
  margin-bottom: 10px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  background: #f0f0f0;
  margin: 5px 0;
  padding: 10px;
  border-radius: 5px;
}

a {
  text-decoration: none;
  color: #42b983;
  font-weight: bold;
}

a:hover {
  text-decoration: underline;
}
</style>
