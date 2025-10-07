<template>
  <FeatureLayout
    title="Layouts & Middleware"
    icon="🎨"
    description="Reuse UI structures with layouts and protect routes with middleware - powerful features for organizing your app!"
  >
    <template #explanation>
      <h3 class="font-bold text-lg mb-2">What They Do:</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Layouts:</strong> Wrap pages with common UI (navbar, footer, etc.)</li>
        <li><strong>Middleware:</strong> Run code before entering routes (auth, logging, etc.)</li>
      </ul>
    </template>

    <template #code>
      <div class="space-y-4">
        <!-- Layout Example -->
        <div>
          <h4 class="text-sm font-semibold text-gray-700 mb-2">📄 Layout File:</h4>
          <CodeDisplay
            :code="layoutCode"
            language="vue"
            filename="app/layouts/default.vue"
          />
        </div>

        <!-- Using Layout -->
        <div>
          <h4 class="text-sm font-semibold text-gray-700 mb-2">📱 Using in Page:</h4>
          <CodeDisplay
            :code="pageWithLayoutCode"
            language="vue"
            filename="app/pages/about.vue"
          />
        </div>

        <!-- Middleware Example -->
        <div>
          <h4 class="text-sm font-semibold text-gray-700 mb-2">🔒 Middleware File:</h4>
          <CodeDisplay
            :code="middlewareCode"
            language="typescript"
            filename="app/middleware/auth.ts"
          />
        </div>

        <!-- Using Middleware -->
        <div>
          <h4 class="text-sm font-semibold text-gray-700 mb-2">🛡️ Protected Page:</h4>
          <CodeDisplay
            :code="protectedPageCode"
            language="vue"
            filename="app/pages/admin/index.vue"
          />
        </div>
      </div>
    </template>

    <template #additional>
      <h4 class="font-bold text-orange-900 mb-2">💡 Key Benefits:</h4>
      <ul class="space-y-1 text-sm text-orange-800">
        <li>✅ DRY - Don't Repeat Yourself</li>
        <li>✅ Centralized logic</li>
        <li>✅ Easy to maintain</li>
        <li>✅ Type-safe</li>
      </ul>
    </template>

    <template #demo>
      <div class="space-y-4">
        <h4 class="font-bold text-gray-900 mb-3">Try Different Layouts:</h4>

        <!-- Layout Examples -->
        <div class="space-y-3">
          <div class="border border-gray-200 rounded-lg p-4 bg-gray-50">
            <div class="flex items-center justify-between mb-2">
              <span class="font-semibold text-gray-900">Default Layout</span>
              <span class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Active on this page</span>
            </div>
            <p class="text-sm text-gray-600 mb-3">
              Standard layout with navbar and footer
            </p>
            <NuxtLink
              to="/"
              class="text-blue-600 hover:text-blue-800 text-sm font-semibold"
            >
              See Home Page (default layout) →
            </NuxtLink>
          </div>

          <div class="border border-purple-200 rounded-lg p-4 bg-purple-50">
            <div class="flex items-center justify-between mb-2">
              <span class="font-semibold text-purple-900">Custom Layout</span>
              <span class="text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded">Purple theme</span>
            </div>
            <p class="text-sm text-purple-800 mb-3">
              Different design with purple gradient
            </p>
            <NuxtLink
              to="/about"
              class="text-purple-600 hover:text-purple-800 text-sm font-semibold"
            >
              See About Page (custom layout) →
            </NuxtLink>
          </div>

          <div class="border border-gray-800 rounded-lg p-4 bg-gray-800 text-white">
            <div class="flex items-center justify-between mb-2">
              <span class="font-semibold">Admin Layout</span>
              <span class="text-xs bg-red-500 text-white px-2 py-1 rounded">Protected</span>
            </div>
            <p class="text-sm text-gray-300 mb-3">
              Dark theme for admin area
            </p>
            <NuxtLink
              to="/admin"
              class="text-indigo-400 hover:text-indigo-300 text-sm font-semibold"
            >
              Try Admin Page (requires auth) →
            </NuxtLink>
          </div>
        </div>

        <!-- Middleware Demo -->
        <div class="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500">
          <h5 class="font-semibold text-orange-900 mb-2">🔒 Middleware Protection:</h5>
          <p class="text-sm text-orange-800 mb-3">
            Try clicking the Admin link above. You'll be prompted to authenticate (this is a demo popup).
          </p>
          <p class="text-xs text-orange-700">
            In production, this would check real authentication tokens!
          </p>
        </div>

        <!-- Available Layouts -->
        <div class="bg-gray-50 rounded-lg p-4">
          <p class="text-sm font-semibold text-gray-900 mb-2">📁 Available Layouts:</p>
          <ul class="space-y-1 text-xs font-mono text-gray-600">
            <li>app/layouts/default.vue</li>
            <li>app/layouts/custom.vue</li>
            <li>app/layouts/admin.vue</li>
          </ul>
        </div>
      </div>
    </template>
  </FeatureLayout>
</template>

<script setup lang="ts">
useHead({
  title: 'Layouts & Middleware - Nuxt Demo'
})

const layoutCode = `<!-- app/layouts/default.vue -->
<template>
  <div>
    <header>
      <Navbar />
    </header>

    <main>
      <!-- This is where page content goes -->
      <slot />
    </main>

    <footer>
      <p>© 2025 My App</p>
    </footer>
  </div>
</template>`

const pageWithLayoutCode = `<!-- app/pages/about.vue -->
<template>
  <div>
    <h1>About Page</h1>
    <!-- Your content -->
  </div>
</template>

<script setup>
// Use a different layout
definePageMeta({
  layout: 'custom'
})
<\/script>`

const middlewareCode = `// app/middleware/auth.ts
export default defineNuxtRouteMiddleware((to, from) => {
  // This runs BEFORE entering the route
  const isAuthenticated = useAuthenticated()

  if (!isAuthenticated.value) {
    // Only run on client side
    if (process.client) {
      // Show demo authentication popup
      const shouldLogin = confirm(
        '🔐 This page requires authentication.\\n\\n' +
        'Click OK to simulate logging in.'
      )

      if (shouldLogin) {
        // Simulate successful login
        isAuthenticated.value = true
        return // Allow navigation
      } else {
        // Redirect to home if user cancels
        return navigateTo('/')
      }
    }
  }
  // User is authenticated - allow navigation
})`

const protectedPageCode = `<!-- app/pages/admin/index.vue -->
<template>
  <div>
    <h1>Admin Dashboard</h1>
    <p>Only authenticated users see this!</p>
  </div>
</template>

<script setup>
// Protect this page with middleware
definePageMeta({
  middleware: 'auth',
  layout: 'admin'
})
<\/script>`
</script>

