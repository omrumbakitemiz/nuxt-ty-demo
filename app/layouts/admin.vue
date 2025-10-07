<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Admin Header -->
    <header class="bg-gray-900 text-white shadow-lg">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4">
            <span class="text-2xl">🔐</span>
            <div>
              <h1 class="text-xl font-bold">Admin Panel</h1>
              <p class="text-sm text-gray-400">Nuxt Demo Dashboard</p>
            </div>
          </div>
          <NuxtLink to="/" class="text-gray-400 hover:text-white transition">
            ← Back to Site
          </NuxtLink>
        </div>
      </div>
    </header>

    <!-- Admin Navigation -->
    <nav class="bg-white border-b">
      <div class="container mx-auto px-4">
        <div class="flex gap-6 py-3">
          <NuxtLink
            to="/admin"
            class="text-gray-700 hover:text-indigo-600 font-semibold transition"
          >
            Dashboard
          </NuxtLink>
          <span class="text-gray-400">Products</span>
          <span class="text-gray-400">Orders</span>
          <span class="text-gray-400">Settings</span>
        </div>
      </div>
    </nav>

    <main class="flex-1">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
// 🎯 DEMO POINT: Admin-specific layout
// Used by protected admin pages
</script>


