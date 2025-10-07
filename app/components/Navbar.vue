<template>
  <nav class="bg-white shadow-lg">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between py-4">
        <NuxtLink to="/" class="text-2xl font-bold text-indigo-600 flex items-center gap-2">
          <span>🚀</span>
          <span class="hidden sm:inline">Nuxt Interactive Demo</span>
          <span class="sm:hidden">Nuxt Demo</span>
        </NuxtLink>

        <div class="flex items-center gap-4">
          <NuxtLink
            to="/"
            class="text-gray-700 hover:text-indigo-600 transition font-medium"
            active-class="text-indigo-600 font-bold"
          >
            <span class="hidden sm:inline">Dashboard</span>
            <span class="sm:hidden">Home</span>
          </NuxtLink>
          <NuxtLink
            to="/products"
            class="text-gray-700 hover:text-indigo-600 transition font-medium hidden sm:inline-block"
            active-class="text-indigo-600 font-bold"
          >
            Products
          </NuxtLink>
          <NuxtLink
            to="/about"
            class="text-gray-700 hover:text-indigo-600 transition font-medium hidden sm:inline-block"
            active-class="text-indigo-600 font-bold"
          >
            About
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
// 🎯 DEMO POINT: Auto-imported component
// No need to import this component anywhere - Nuxt does it automatically!
</script>


