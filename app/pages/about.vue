<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
    <div class="container mx-auto px-4 py-16">
      <div class="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-12">
        <h1 class="text-5xl font-bold text-gray-900 mb-6">About This Demo</h1>

        <p class="text-xl text-gray-600 mb-8">
          This application demonstrates key 4 features in action.
        </p>

        <div class="space-y-6">
          <div class="border-l-4 border-indigo-600 pl-6">
            <h2 class="text-2xl font-bold mb-2">🚀 File-Based Routing</h2>
            <p class="text-gray-600">
              Notice how we have different pages without configuring any routes.
              Each .vue file in the pages/ directory automatically becomes a route.
            </p>
          </div>

          <div class="border-l-4 border-green-600 pl-6">
            <h2 class="text-2xl font-bold mb-2">⚡ Server-Side Rendering</h2>
            <p class="text-gray-600">
              View the page source - you'll see all the HTML is pre-rendered on the server.
              Great for SEO and initial load performance!
            </p>
          </div>

          <div class="border-l-4 border-purple-600 pl-6">
            <h2 class="text-2xl font-bold mb-2">🔥 Full-Stack API</h2>
            <p class="text-gray-600">
              The products data comes from /api/products - an API endpoint defined in
              server/api/ directory. No separate backend needed!
            </p>
          </div>

          <div class="border-l-4 border-orange-600 pl-6">
            <h2 class="text-2xl font-bold mb-2">✨ Auto-Imports</h2>
            <p class="text-gray-600">
              No import statements for components, composables, or Vue APIs.
              Nuxt automatically imports them, making code cleaner.
            </p>
          </div>

          <div class="border-l-4 border-pink-600 pl-6">
            <h2 class="text-2xl font-bold mb-2">🎨 Layouts & Middleware</h2>
            <p class="text-gray-600">
              This page uses a different layout. Try visiting the Admin page to see
              middleware protection in action!
            </p>
          </div>
        </div>

        <div class="mt-12 p-6 bg-indigo-50 rounded-lg">
          <h3 class="text-xl font-bold mb-2">Want to see the Admin area?</h3>
          <p class="text-gray-600 mb-4">
            Try accessing the admin page. It's protected by middleware!
          </p>
          <NuxtLink
            to="/admin"
            class="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Go to Admin
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 🎯 DEMO POINT: Different layout for this page
definePageMeta({
  layout: 'custom'
})

useHead({
  title: 'About - Nuxt Demo',
  meta: [
    { name: 'description', content: 'Learn about Nuxt 4 features showcased in this demo' }
  ]
})
</script>


