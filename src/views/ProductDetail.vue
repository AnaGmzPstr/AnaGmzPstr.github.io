<template>
  <div class="container">

    <router-link to="/store"><i class="bi bi-arrow-left"></i> Volver</router-link>
    <div v-if="product" class="container mt-4 d-flex justify-content-center">
      <div class="card mb-3" style="max-width: 800px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img :src="product.image" class="img-fluid rounded-start" alt="Product image" />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h2 class="card-title fw-bold">{{ product.title }}</h2>
              <p class="card-text fs-5">{{ product.description }}</p>
              <p class="card-text fs-4"><strong>Precio:</strong> ${{ product.price }}</p>
              <a href="#" class="btn btn-primary btn-lg">Comprar</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.card-img-top {
  height: 200px; 
  object-fit: cover;
}
</style>


<script setup>
/* eslint-disable */

import { ref, onMounted } from 'vue'
import axios from 'axios'

// Definir el parámetro de la ruta
const props = defineProps({
  id: {
    type: Number,
    required: true
  }
})

const product = ref(null)

// Obtener el producto específico al montar el componente
onMounted(async () => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/${props.id}`)
    product.value = response.data
  } catch (error) {
    console.error('Error al obtener el producto:', error)
  }
})
</script>

<style scoped>
.product-detail {
  text-align: center;
}

h1 {
  font-size: 24px;
  margin-bottom: 10px;
}

img {
  width: 200px;
  margin-bottom: 10px;
}

p {
  margin-bottom: 10px;
}
</style>