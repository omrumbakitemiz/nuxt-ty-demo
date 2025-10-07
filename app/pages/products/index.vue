<template>
  <div class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-12">
      <h1 class="text-4xl font-bold text-gray-900 mb-8">Our Products</h1>

      <!-- 🎯 DEMO POINT: Data fetching with loading states -->
      <div v-if="pending" class="text-center py-12">
        <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
        <p class="mt-4 text-gray-600">Loading products...</p>
      </div>

      <div v-else-if="error" class="bg-red-50 border border-red-200 rounded-lg p-4">
        <p class="text-red-800">Error loading products: {{ error.message }}</p>
      </div>

      <div v-else>
        <!-- Filter Buttons -->
        <div class="mb-8 flex gap-4">
          <button
            @click="selectedCategory = null"
            :class="[
              'px-4 py-2 rounded-lg font-semibold transition',
              selectedCategory === null
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            ]"
          >
            All
          </button>
          <button
            v-for="category in categories"
            :key="category"
            @click="selectedCategory = category"
            :class="[
              'px-4 py-2 rounded-lg font-semibold transition capitalize',
              selectedCategory === category
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            ]"
          >
            {{ category }}
          </button>
        </div>

        <!-- Products Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- 🎯 DEMO POINT: Auto-imported component (no import statement!) -->
          <ProductCard
            v-for="product in filteredProducts"
            :key="product.id"
            :product="product"
          />
        </div>

        <div v-if="filteredProducts.length === 0" class="text-center py-12">
          <p class="text-gray-600 text-lg">No products found in this category.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 🎯 DEMO POINT: No imports needed! useFetch and ref are auto-imported

// SEO optimization for products page
useHead({
  title: 'Products - Nuxt Demo',
  meta: [
    { name: 'description', content: 'Browse our amazing collection of products' }
  ]
})

// 🎯 DEMO POINT: Server API call with SSR
// This data is fetched on the server and sent to client (check View Source!)
const { data: products, pending, error } = await useFetch('/api/products')

// Reactive state for filtering
const selectedCategory = ref<string | null>(null)

// Computed categories
const categories = computed(() => {
  if (!products.value) return []
  return [...new Set(products.value.map((p: any) => p.category))]
})

// Filtered products
const filteredProducts = computed(() => {
  if (!products.value) return []
  if (!selectedCategory.value) return products.value
  return products.value.filter((p: any) => p.category === selectedCategory.value)
})
</script>


