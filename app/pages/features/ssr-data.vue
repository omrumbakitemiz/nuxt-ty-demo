<template>
  <FeatureLayout
    title="SSR & Data Fetching"
    icon="⚡"
    description="Nuxt renders your pages on the server with data already included. Great for SEO and performance!"
  >
    <template #explanation>
      <h3 class="font-bold text-lg mb-2">How SSR Works:</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Server renders</strong> the page with data</li>
        <li><strong>HTML sent to browser</strong> already complete</li>
        <li><strong>Hydration</strong> makes it interactive</li>
        <li><strong>Perfect for SEO</strong> - search engines see content</li>
      </ul>
    </template>

    <template #code>
      <div class="space-y-4">
        <!-- useFetch Example -->
        <div>
          <h4 class="text-sm font-semibold text-gray-700 mb-2">📄 Using useFetch:</h4>
          <CodeDisplay
            :code="useFetchCode"
            language="vue"
            filename="app/pages/products/index.vue"
          />
        </div>

        <!-- View Source Tip -->
        <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
          <h4 class="font-semibold text-blue-900 mb-2">🔍 Try This:</h4>
          <ol class="text-sm text-blue-800 space-y-1 list-decimal pl-5">
            <li>Right-click anywhere on this page</li>
            <li>Select "View Page Source"</li>
            <li>Search for "Wireless Headphones"</li>
            <li>You'll see the data is in the HTML!</li>
          </ol>
        </div>
      </div>
    </template>

    <template #additional>
      <h4 class="font-bold text-blue-900 mb-2">💡 Key Benefits:</h4>
      <ul class="space-y-1 text-sm text-blue-800">
        <li>✅ Faster initial page load</li>
        <li>✅ Better SEO</li>
        <li>✅ Works without JavaScript</li>
        <li>✅ Built-in loading states</li>
      </ul>
    </template>

    <template #demo>
      <div class="space-y-4">
        <h4 class="font-bold text-gray-900 mb-3">Live Data Fetching:</h4>

        <!-- Products from SSR -->
        <div v-if="pending" class="text-center py-8">
          <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p class="mt-4 text-gray-600">Loading products...</p>
        </div>

        <div v-else-if="error" class="bg-red-50 border border-red-200 rounded-lg p-4">
          <p class="text-red-800">Error: {{ error }}</p>
        </div>

        <div v-else class="space-y-3">
          <div
            v-for="product in products?.slice(0, 3)"
            :key="product.id"
            class="bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-500 transition"
          >
            <div class="flex items-center gap-3">
              <div class="text-3xl">{{ product.emoji }}</div>
              <div class="flex-1">
                <h5 class="font-semibold text-gray-900">{{ product.name }}</h5>
                <p class="text-sm text-gray-600">{{ product.category }}</p>
              </div>
              <div class="text-right">
                <div class="text-lg font-bold text-blue-600">${{ product.price }}</div>
                <div class="text-xs text-gray-500">{{ product.stock }} in stock</div>
              </div>
            </div>
          </div>
        </div>

        <!-- SSR Info -->
        <div class="bg-blue-50 rounded-lg p-4 mt-4">
          <h5 class="font-semibold text-blue-900 mb-2">🎯 SSR in Action:</h5>
          <ul class="text-sm text-blue-800 space-y-1">
            <li>✓ Data fetched on server</li>
            <li>✓ HTML rendered with data</li>
            <li>✓ Sent to browser pre-rendered</li>
            <li>✓ No loading spinner on first visit!</li>
          </ul>
        </div>

        <!-- Refresh Button -->
        <button
          @click="refresh"
          class="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
        >
          🔄 Refresh Data
        </button>

        <!-- Data States -->
        <div class="bg-gray-50 rounded-lg p-4">
          <p class="text-sm font-semibold text-gray-900 mb-2">📊 Current State:</p>
          <div class="text-xs font-mono space-y-1 text-gray-600">
            <div>pending: {{ pending }}</div>
            <div>error: {{ error || 'null' }}</div>
            <div>data: {{ products ? `${products.length} products` : 'null' }}</div>
          </div>
        </div>
      </div>
    </template>
  </FeatureLayout>
</template>

<script setup lang="ts">
useHead({
  title: 'SSR & Data Fetching - Nuxt Demo'
})

// 🎯 This runs on the SERVER first, then client
// Data is pre-fetched and included in HTML
const { data: products, pending, error, refresh } = await useFetch('/api/products')

const useFetchCode = `<template>
  <div>
    <!-- Built-in loading state -->
    <div v-if="pending">Loading...</div>

    <!-- Built-in error state -->
    <div v-else-if="error">Error: {{ error }}</div>

    <!-- Your data -->
    <div v-else>
      <div v-for="product in products" :key="product.id">
        {{ product.name }}
      </div>
    </div>
  </div>
</template>

<script setup>
// ⚡ This fetches data on the SERVER
// The page is rendered with data already included!
const { data: products, pending, error } = await useFetch('/api/products')

// You can also refresh the data
const refresh = () => refresh()
<\/script>

// 🎯 Benefits:
// - SEO friendly (data in HTML)
// - Fast initial load
// - No flash of loading state
// - Search engines can index content`
</script>

