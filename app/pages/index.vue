<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
    <div class="container mx-auto px-4 py-12">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-6xl font-bold text-gray-900 mb-4">
          🚀 Nuxt Interactive Demo
        </h1>
        <p class="text-xl text-gray-600 mb-2">
          Explore Nuxt Features with Live Code Examples
        </p>
        <p class="text-sm text-indigo-600 font-semibold">
          Click on any feature to see the code and working demo side-by-side
        </p>
      </div>

      <!-- Feature Cards Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        <!-- Feature 1: File-Based Routing -->
        <NuxtLink
          to="/features/file-routing"
          class="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-indigo-500"
        >
          <div class="bg-gradient-to-br from-indigo-500 to-purple-600 p-6 text-white">
            <div class="text-4xl mb-3">📁</div>
            <h3 class="text-2xl font-bold mb-2">File-Based Routing</h3>
            <p class="text-indigo-100 text-sm">No router config needed</p>
          </div>
          <div class="p-6">
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex items-center">
                <span class="text-green-500 mr-2">✓</span>
                Automatic route generation
              </li>
              <li class="flex items-center">
                <span class="text-green-500 mr-2">✓</span>
                Dynamic routes with [id]
              </li>
              <li class="flex items-center">
                <span class="text-green-500 mr-2">✓</span>
                See actual file structure
              </li>
            </ul>
            <div class="mt-4 text-indigo-600 font-semibold group-hover:translate-x-2 transition-transform">
              Explore →
            </div>
          </div>
        </NuxtLink>

        <!-- Feature 2: Server API Routes -->
        <NuxtLink
          to="/features/server-api"
          class="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-green-500"
        >
          <div class="bg-gradient-to-br from-green-500 to-emerald-600 p-6 text-white">
            <div class="text-4xl mb-3">🔥</div>
            <h3 class="text-2xl font-bold mb-2">Server API Routes</h3>
            <p class="text-green-100 text-sm">Full-stack in one project</p>
          </div>
          <div class="p-6">
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex items-center">
                <span class="text-green-500 mr-2">✓</span>
                Backend + Frontend together
              </li>
              <li class="flex items-center">
                <span class="text-green-500 mr-2">✓</span>
                File-based API endpoints
              </li>
              <li class="flex items-center">
                <span class="text-green-500 mr-2">✓</span>
                See API code + response
              </li>
            </ul>
            <div class="mt-4 text-green-600 font-semibold group-hover:translate-x-2 transition-transform">
              Explore →
            </div>
          </div>
        </NuxtLink>

        <!-- Feature 3: Auto-Imports -->
        <NuxtLink
          to="/features/auto-imports"
          class="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-purple-500"
        >
          <div class="bg-gradient-to-br from-purple-500 to-pink-600 p-6 text-white">
            <div class="text-4xl mb-3">✨</div>
            <h3 class="text-2xl font-bold mb-2">Auto-Imports</h3>
            <p class="text-purple-100 text-sm">No import statements needed</p>
          </div>
          <div class="p-6">
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex items-center">
                <span class="text-green-500 mr-2">✓</span>
                Components auto-imported
              </li>
              <li class="flex items-center">
                <span class="text-green-500 mr-2">✓</span>
                Composables auto-imported
              </li>
              <li class="flex items-center">
                <span class="text-green-500 mr-2">✓</span>
                Cleaner, simpler code
              </li>
            </ul>
            <div class="mt-4 text-purple-600 font-semibold group-hover:translate-x-2 transition-transform">
              Explore →
            </div>
          </div>
        </NuxtLink>

        <!-- Feature 4: SSR & Data Fetching -->
        <NuxtLink
          to="/features/ssr-data"
          class="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-blue-500"
        >
          <div class="bg-gradient-to-br from-blue-500 to-cyan-600 p-6 text-white">
            <div class="text-4xl mb-3">⚡</div>
            <h3 class="text-2xl font-bold mb-2">SSR & Data Fetching</h3>
            <p class="text-blue-100 text-sm">Server-side rendering</p>
          </div>
          <div class="p-6">
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex items-center">
                <span class="text-green-500 mr-2">✓</span>
                Pre-rendered on server
              </li>
              <li class="flex items-center">
                <span class="text-green-500 mr-2">✓</span>
                Built-in loading states
              </li>
              <li class="flex items-center">
                <span class="text-green-500 mr-2">✓</span>
                SEO-friendly by default
              </li>
            </ul>
            <div class="mt-4 text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
              Explore →
            </div>
          </div>
        </NuxtLink>

        <!-- Feature 5: Layouts & Middleware -->
        <NuxtLink
          to="/features/layouts-middleware"
          class="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-orange-500"
        >
          <div class="bg-gradient-to-br from-orange-500 to-red-600 p-6 text-white">
            <div class="text-4xl mb-3">🎨</div>
            <h3 class="text-2xl font-bold mb-2">Layouts & Middleware</h3>
            <p class="text-orange-100 text-sm">Reusable UI & logic</p>
          </div>
          <div class="p-6">
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex items-center">
                <span class="text-green-500 mr-2">✓</span>
                Multiple layout templates
              </li>
              <li class="flex items-center">
                <span class="text-green-500 mr-2">✓</span>
                Route protection
              </li>
              <li class="flex items-center">
                <span class="text-green-500 mr-2">✓</span>
                See code in action
              </li>
            </ul>
            <div class="mt-4 text-orange-600 font-semibold group-hover:translate-x-2 transition-transform">
              Explore →
            </div>
          </div>
        </NuxtLink>

        <!-- Feature 6: Component System -->
        <NuxtLink
          to="/features/components"
          class="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-teal-500"
        >
          <div class="bg-gradient-to-br from-teal-500 to-green-600 p-6 text-white">
            <div class="text-4xl mb-3">🧩</div>
            <h3 class="text-2xl font-bold mb-2">Component System</h3>
            <p class="text-teal-100 text-sm">Reusable Vue components</p>
          </div>
          <div class="p-6">
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex items-center">
                <span class="text-green-500 mr-2">✓</span>
                Auto-imported components
              </li>
              <li class="flex items-center">
                <span class="text-green-500 mr-2">✓</span>
                Props & slots
              </li>
              <li class="flex items-center">
                <span class="text-green-500 mr-2">✓</span>
                Live component demo
              </li>
            </ul>
            <div class="mt-4 text-teal-600 font-semibold group-hover:translate-x-2 transition-transform">
              Explore →
            </div>
          </div>
        </NuxtLink>
      </div>

      <!-- Info Section -->
      <div class="mt-16 max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">
          📚 How to Use This Demo
        </h2>
        <div class="space-y-4 text-gray-700">
          <p class="flex items-start">
            <span class="text-2xl mr-3">1️⃣</span>
            <span><strong>Click on any feature card</strong> above to see a detailed demonstration</span>
          </p>
          <p class="flex items-start">
            <span class="text-2xl mr-3">2️⃣</span>
            <span><strong>View the actual code</strong> that powers each feature in the left panel</span>
          </p>
          <p class="flex items-start">
            <span class="text-2xl mr-3">3️⃣</span>
            <span><strong>See the live demo</strong> working in real-time on the right panel</span>
          </p>
          <p class="flex items-start">
            <span class="text-2xl mr-3">4️⃣</span>
            <span><strong>Interact with examples</strong> to understand how each feature works</span>
          </p>
        </div>
      </div>

      <!-- Quick Stats -->
      <div class="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        <div class="bg-white rounded-lg shadow p-6 text-center">
          <div class="text-3xl font-bold text-indigo-600">6</div>
          <div class="text-sm text-gray-600 mt-1">Features</div>
        </div>
        <div class="bg-white rounded-lg shadow p-6 text-center">
          <div class="text-3xl font-bold text-green-600">100%</div>
          <div class="text-sm text-gray-600 mt-1">Interactive</div>
        </div>
        <div class="bg-white rounded-lg shadow p-6 text-center">
          <div class="text-3xl font-bold text-purple-600">Live</div>
          <div class="text-sm text-gray-600 mt-1">Code Display</div>
        </div>
        <div class="bg-white rounded-lg shadow p-6 text-center">
          <div class="text-3xl font-bold text-orange-600">Real</div>
          <div class="text-sm text-gray-600 mt-1">Examples</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Nuxt Interactive Demo - Explore Features',
  meta: [
    { name: 'description', content: 'Interactive demonstration of Nuxt 3 features with live code examples' }
  ]
})
</script>
