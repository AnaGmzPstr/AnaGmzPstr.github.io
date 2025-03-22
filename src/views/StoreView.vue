<template>
    <div>
      <h1>Categorías</h1>
      <div v-if="categories.length">
        <div v-for="category in categories" :key="category" class="category">
          <button @click="fetchProducts(category)">{{ category }}</button>
        </div>
      </div>
  
      <div v-if="products.length">
        <h2>Productos en esta categoría</h2>
        <div class="products">
          <div v-for="product in products" :key="product.id" class="product-card" @click="goToProductDetail(product.id)">
            <img :src="product.image" alt="product.image" />
            <p>{{ product.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  /* eslint-disable */
  import { ref, onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  import axios from 'axios'
  
  const categories = ref([])
  const products = ref([])
  const router = useRouter()
  
  // Obtener las categorías al montar el componente
  onMounted(async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products/categories')
      categories.value = response.data
    } catch (error) {
      console.error('Error al obtener las categorías:', error)
    }
  })
  
  // Obtener los productos por categoría
  const fetchProducts = async (category) => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`)
      products.value = response.data
    } catch (error) {
      console.error('Error al obtener productos:', error)
    }
  }
  
  // Redirigir a la página de detalles del producto
  const goToProductDetail = (id) => {
    router.push({ name: 'productDetail', params: { id } })
  }
  </script>
  
  <style scoped>
  .category {
    margin: 10px;
  }
  .products {
    display: flex;
    flex-wrap: wrap;
  }
  .product-card {
    width: 200px;
    margin: 10px;
    cursor: pointer;
  }
  .product-card img {
    width: 100%;
  }
  </style>
  