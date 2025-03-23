<template>
  <div class="container">
  <CartComp ref="cartRef" />
    <h1>Categorías</h1>
    <div v-if="categories.length" class="d-flex">
      <div v-for="category in categories" :key="category" class="category">
        <button @click="fetchProducts(category)" class="btn btn-primary">
          {{ category }}
        </button>
      </div>
    </div>

    <div v-if="products.length" class="container mt-4">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div v-for="product in products" :key="product.id" class="col">
          <div class="card h-100 product-card">
            <img :src="product.image" class="card-img-top img-fluid" alt="Product image" />
            <div class="card-body text-center">
              <h5 class="card-title fw-bold">{{ product.title }}</h5>
              <p class="card-text fs-4 text-success"><strong>${{ product.price }}</strong></p>
              <button @click="addToCart(product)" class="btn btn-success mt-2">Añadir al carrito</button>
              <button @click="goToProductDetail(product.id)" class="btn btn-primary mt-2">Detalles</button>
            </div>
          </div>
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
import CartComp from '../components/CartComponent.vue'

const cartRef = ref(null)

const addToCart = (product) => {
  cartRef.value?.addToCart(product)
}

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

const goToProductDetail = (id) => {
  router.push({ name: 'productDetail', params: { id } })
}
</script>


<style>
.card-img-top {
  height: 200px;
  object-fit: contain;
}

.product-card {
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}

.product-card:hover {
  transform: scale(1.05);
}
</style>