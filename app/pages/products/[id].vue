<template>
  <div class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-12">
      <NuxtLink
        to="/products"
        class="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-6"
      >
        ← Back to Products
      </NuxtLink>

      <div v-if="pending" class="text-center py-12">
        <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>

      <div v-else-if="error" class="bg-red-50 border border-red-200 rounded-lg p-4">
        <p class="text-red-800">Error loading product: {{ error.message }}</p>
      </div>

      <div v-else-if="product" class="bg-white rounded-xl shadow-lg overflow-hidden">
        <div class="md:flex">
          <div class="md:w-1/2 bg-gradient-to-br from-indigo-100 to-purple-100 p-12 flex items-center justify-center">
            <div class="text-8xl">{{ product.emoji }}</div>
          </div>
          <div class="md:w-1/2 p-8">
            <div class="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-semibold mb-4 capitalize">
              {{ product.category }}
            </div>
            <h1 class="text-4xl font-bold text-gray-900 mb-4">{{ product.name }}</h1>
            <p class="text-3xl font-bold text-indigo-600 mb-6">${{ product.price }}</p>
            <p class="text-gray-600 mb-8 leading-relaxed">{{ product.description }}</p>

            <div class="space-y-4">
              <div class="flex items-center gap-2">
                <span class="font-semibold">Rating:</span>
                <span class="text-yellow-500">{{ '⭐'.repeat(product.rating) }}</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-semibold">Stock:</span>
                <span :class="product.stock > 10 ? 'text-green-600' : 'text-orange-600'">
                  {{ product.stock }} units available
                </span>
              </div>
            </div>

            <button class="mt-8 w-full bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 🎯 DEMO POINT: Dynamic route parameter
const route = useRoute()
const productId = route.params.id

// 🎯 DEMO POINT: Fetch single product with SSR
const { data: product, pending, error } = await useFetch(`/api/products/${productId}`)

// 🎯 DEMO POINT: Dynamic SEO based on product data
useHead({
  title: () => product.value ? `${product.value.name} - Products` : 'Product',
  meta: [
    {
      name: 'description',
      content: () => product.value?.description || 'Product details'
    }
  ]
})
</script>


