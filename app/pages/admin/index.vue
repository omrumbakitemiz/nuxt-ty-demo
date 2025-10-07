<template>
  <div class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-12">
      <div class="bg-white rounded-xl shadow-lg p-8">
        <div class="flex items-center justify-between mb-8">
          <h1 class="text-4xl font-bold text-gray-900">Admin Dashboard</h1>
          <button
            @click="handleLogout"
            class="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>

        <div class="bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
          <p class="text-green-800">
            🎉 Success! You're authenticated and can see this protected page.
          </p>
          <p class="text-green-700 text-sm mt-2">
            This page is protected by middleware that checks authentication.
          </p>
        </div>

        <!-- Stats Cards -->
        <div class="grid md:grid-cols-3 gap-6 mb-8">
          <div class="bg-indigo-50 p-6 rounded-lg">
            <h3 class="text-indigo-900 font-semibold mb-2">Total Products</h3>
            <p class="text-3xl font-bold text-indigo-600">{{ products?.length || 0 }}</p>
          </div>
          <div class="bg-green-50 p-6 rounded-lg">
            <h3 class="text-green-900 font-semibold mb-2">Total Revenue</h3>
            <p class="text-3xl font-bold text-green-600">${{ totalRevenue }}</p>
          </div>
          <div class="bg-purple-50 p-6 rounded-lg">
            <h3 class="text-purple-900 font-semibold mb-2">Avg. Rating</h3>
            <p class="text-3xl font-bold text-purple-600">{{ avgRating }}</p>
          </div>
        </div>

        <!-- Products Table -->
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b">
                <th class="text-left py-3 px-4">Product</th>
                <th class="text-left py-3 px-4">Category</th>
                <th class="text-left py-3 px-4">Price</th>
                <th class="text-left py-3 px-4">Stock</th>
                <th class="text-left py-3 px-4">Rating</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in products" :key="product.id" class="border-b hover:bg-gray-50">
                <td class="py-3 px-4">
                  <span class="mr-2">{{ product.emoji }}</span>
                  {{ product.name }}
                </td>
                <td class="py-3 px-4 capitalize">{{ product.category }}</td>
                <td class="py-3 px-4">${{ product.price }}</td>
                <td class="py-3 px-4">{{ product.stock }}</td>
                <td class="py-3 px-4">{{ product.rating }}/5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 🎯 DEMO POINT: Middleware protection
definePageMeta({
  middleware: 'auth',
  layout: 'admin'
})

useHead({
  title: 'Admin Dashboard - Nuxt Demo'
})

// Fetch products for admin stats
const { data: products } = await useFetch('/api/products')

// Computed stats
const totalRevenue = computed(() => {
  if (!products.value) return 0
  return products.value.reduce((sum: number, p: any) => sum + (p.price * p.stock), 0)
})

const avgRating = computed(() => {
  if (!products.value || products.value.length === 0) return 0
  const sum = products.value.reduce((acc: number, p: any) => acc + p.rating, 0)
  return (sum / products.value.length).toFixed(1)
})

const handleLogout = () => {
  // Clear auth and redirect
  const isAuthenticated = useAuthenticated()
  isAuthenticated.value = false
  navigateTo('/')
}
</script>


