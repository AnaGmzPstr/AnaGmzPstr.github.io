<template>
    <div class="cart-container p-3 border rounded bg-light">
        <h2 class="text-center">Carrito de Compras</h2>
        <div v-if="cart.length" class="cart-items">
            <div v-for="(item, index) in cart" :key="index"
                class="cart-item d-flex align-items-center mb-2 p-2 border rounded">
                <img :src="item.image" class="cart-img me-2" alt="Product image" />
                <div class="flex-grow-1">
                    <h5 class="mb-1">{{ item.title }}</h5>
                    <p class="mb-1">${{ item.price }} x {{ item.quantity }}</p>
                    <button @click="removeFromCart(index)" class="btn btn-danger btn-sm">Eliminar</button>
                </div>
            </div>
        </div>
        <p v-else class="text-center">El carrito está vacío</p>
        <div class="cart-total text-center mt-3">
            <h4>Total: ${{ totalPrice }}</h4>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, defineExpose } from 'vue'

const cart = ref([])

const addToCart = (product) => {
    const existing = cart.value.find((item) => item.id === product.id)
    if (existing) {
        existing.quantity++
    } else {
        cart.value.push({ ...product, quantity: 1 })
    }
}

const removeFromCart = (index) => {
    cart.value.splice(index, 1)
}

const totalPrice = computed(() =>
    cart.value.reduce((acc, item) => acc + item.price * item.quantity, 0)
)

defineExpose({ cart, addToCart, removeFromCart, totalPrice })
</script>

<style scoped>
.cart-img {
    width: 50px;
    height: 50px;
    object-fit: contain;
}
</style>