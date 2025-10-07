<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navigation Bar -->
    <Navbar />

    <!-- Main Content -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-8">
      <div class="container mx-auto px-4 text-center">
        <p class="text-gray-400">
          Built with ❤️ using <a href="https://nuxt.com" class="text-indigo-400">Nuxt 4</a> |
          <span class="text-indigo-400">Default Layout</span>
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// 🎯 DEMO POINT: This is the default layout
// Used by all pages unless they specify a different layout
</script>


