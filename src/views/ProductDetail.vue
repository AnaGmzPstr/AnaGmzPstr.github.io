<template>
    <div v-if="product">
      <h1>{{ product.title }}</h1>
      <img :src="product.image" alt="product.image" />
      <p>{{ product.description }}</p>
      <p><strong>Price:</strong> ${{ product.price }}</p>
    </div>
  </template>
  
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
  </style>
  