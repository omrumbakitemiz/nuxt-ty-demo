<template>
  <NuxtLink
    :to="`/products/${product.id}`"
    class="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden group"
  >
    <div class="bg-gradient-to-br from-indigo-100 to-purple-100 p-8 flex items-center justify-center h-48 group-hover:scale-105 transition">
      <span class="text-6xl">{{ product.emoji }}</span>
    </div>
    <div class="p-6">
      <div class="flex items-center justify-between mb-2">
        <span class="text-xs font-semibold text-indigo-600 uppercase bg-indigo-50 px-2 py-1 rounded">
          {{ product.category }}
        </span>
        <span class="text-yellow-500">{{ '⭐'.repeat(product.rating) }}</span>
      </div>
      <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition">
        {{ product.name }}
      </h3>
      <p class="text-gray-600 text-sm mb-4 line-clamp-2">
        {{ product.description }}
      </p>
      <div class="flex items-center justify-between">
        <span class="text-2xl font-bold text-indigo-600">${{ product.price }}</span>
        <span class="text-sm text-gray-500">{{ product.stock }} in stock</span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
// 🎯 DEMO POINT: Component with props - also auto-imported!

interface Product {
  id: number
  name: string
  category: string
  price: number
  rating: number
  stock: number
  emoji: string
  description: string
}

defineProps<{
  product: Product
}>()
</script>


