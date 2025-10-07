<template>
  <div class="min-h-screen flex flex-col">
    <!-- Different Navigation Style -->
    <nav class="bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <NuxtLink to="/" class="text-2xl font-bold">
            🎨 Nuxt Demo
          </NuxtLink>
          <div class="flex gap-6">
            <NuxtLink to="/" class="hover:text-purple-200 transition">Home</NuxtLink>
            <NuxtLink to="/products" class="hover:text-purple-200 transition">Products</NuxtLink>
            <NuxtLink to="/about" class="hover:text-purple-200 transition font-bold">About</NuxtLink>
          </div>
        </div>
      </div>
    </nav>

    <main class="flex-1">
      <slot />
    </main>

    <footer class="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-6">
      <div class="container mx-auto px-4 text-center">
        <p>
          🌟 Custom Layout - Different design! 🌟
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// 🎯 DEMO POINT: Custom layout with different styling
// Used by pages that set layout: 'custom' in definePageMeta
</script>


