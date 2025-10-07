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
        <!-- Animated Timeline Demo -->
        <div class="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-4 border-2 border-orange-300">
          <div class="flex items-center justify-between mb-3">
            <h4 class="font-bold text-orange-900">🎬 SSR Timeline Animation</h4>
            <button
              @click="playAnimation"
              :disabled="isAnimating"
              class="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition font-semibold text-sm disabled:opacity-50"
            >
              {{ isAnimating ? '▶️ Playing...' : '🔄 Replay' }}
            </button>
          </div>

          <div class="space-y-3">
            <!-- Step 1 -->
            <div
              class="flex items-center gap-3 transition-all duration-500 translate-x-0"
              :class="animationStep >= 1 ? 'opacity-100' : 'opacity-30'"
            >
              <div
                class="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 flex-shrink-0"
                :class="animationStep >= 1 ? 'bg-green-500 text-white scale-110 shadow-lg' : 'bg-gray-300 text-gray-500'"
              >
                1
              </div>
              <div class="flex-1 min-w-0">
                <div class="font-semibold text-gray-900">🔄 Server fetches data from API</div>
                <div class="text-xs text-gray-600">Making request to /api/products...</div>
              </div>
              <div
                v-if="animationStep >= 1"
                class="text-xs bg-green-100 text-green-800 px-3 py-1 rounded font-bold animate-pulse flex-shrink-0"
              >
                {{ animationStep >= 2 ? '✓ Done' : 'Fetching...' }}
              </div>
              <div
                v-else
                class="w-16 flex-shrink-0"
              ></div>
            </div>

            <!-- Progress Bar for Step 1 -->
            <div v-if="animationStep === 1" class="ml-14 mr-4">
              <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div class="h-full bg-green-500 animate-progress"></div>
              </div>
            </div>

            <!-- Step 2 -->
            <div
              class="flex items-center gap-3 transition-all duration-500 translate-x-0"
              :class="animationStep >= 2 ? 'opacity-100' : 'opacity-30'"
            >
              <div
                class="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 flex-shrink-0"
                :class="animationStep >= 2 ? 'bg-blue-500 text-white scale-110 shadow-lg' : 'bg-gray-300 text-gray-500'"
              >
                2
              </div>
              <div class="flex-1 min-w-0">
                <div class="font-semibold text-gray-900">🎨 Server renders HTML with data</div>
                <div class="text-xs text-gray-600">Generating complete HTML page...</div>
              </div>
              <div
                v-if="animationStep >= 2"
                class="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded font-bold animate-pulse flex-shrink-0"
              >
                {{ animationStep >= 3 ? '✓ Done' : 'Rendering...' }}
              </div>
              <div
                v-else
                class="w-16 flex-shrink-0"
              ></div>
            </div>

            <!-- Progress Bar for Step 2 -->
            <div v-if="animationStep === 2" class="ml-14 mr-4">
              <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div class="h-full bg-blue-500 animate-progress"></div>
              </div>
            </div>

            <!-- Step 3 -->
            <div
              class="flex items-center gap-3 transition-all duration-500 translate-x-0"
              :class="animationStep >= 3 ? 'opacity-100' : 'opacity-30'"
            >
              <div
                class="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 flex-shrink-0"
                :class="animationStep >= 3 ? 'bg-purple-500 text-white scale-110 shadow-lg' : 'bg-gray-300 text-gray-500'"
              >
                3
              </div>
              <div class="flex-1 min-w-0">
                <div class="font-semibold text-gray-900">🚀 Browser receives complete HTML</div>
                <div class="text-xs text-gray-600">User sees content immediately!</div>
              </div>
              <div
                v-if="animationStep >= 3"
                class="text-xs bg-purple-100 text-purple-800 px-3 py-1 rounded font-bold flex-shrink-0"
              >
                ✓ Complete!
              </div>
              <div
                v-else
                class="w-16 flex-shrink-0"
              ></div>
            </div>

            <!-- Final celebration -->
            <div
              v-if="animationStep >= 3"
              class="ml-14 bg-gradient-to-r from-green-50 to-purple-50 border-2 border-green-300 rounded-lg p-3 animate-bounce-once"
            >
              <p class="text-sm font-bold text-green-900">🎉 Total Time: ~100ms</p>
              <p class="text-xs text-green-800">Compare this to 2-5 seconds for traditional SPAs!</p>
            </div>
          </div>
        </div>

        <h4 class="font-bold text-gray-900 mb-3">Live Data (Pre-rendered on Server):</h4>

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

        <!-- Visual Proof Section -->
        <div class="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-4">
          <h5 class="font-semibold text-yellow-900 mb-3">🔍 See the Magic Yourself:</h5>
          <div class="space-y-2">
            <button
              @click="showHtmlSource"
              class="w-full bg-yellow-600 text-white px-4 py-3 rounded-lg hover:bg-yellow-700 transition font-semibold flex items-center justify-center gap-2"
            >
              <span>📄 View HTML Source (Data Embedded!)</span>
            </button>
            <p class="text-xs text-yellow-800">
              Click to see how product data is already in the HTML before JavaScript runs!
            </p>
          </div>
        </div>

        <!-- HTML Source Modal -->
        <div v-if="showSourceModal" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" @click="showSourceModal = false">
          <div class="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden" @click.stop>
            <div class="bg-gradient-to-r from-yellow-500 to-orange-500 px-6 py-4 flex items-center justify-between">
              <h3 class="text-xl font-bold text-white">🔍 HTML Source - Data is Pre-rendered!</h3>
              <button @click="showSourceModal = false" class="text-white hover:text-gray-200 text-2xl">×</button>
            </div>
            <div class="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
              <div class="bg-green-50 border border-green-300 rounded-lg p-4 mb-4">
                <p class="text-sm text-green-900 font-semibold mb-2">✅ SSR Magic:</p>
                <p class="text-xs text-green-800">
                  The data below is embedded in the HTML by the server. Search for "Wireless Headphones" - it's already in the HTML!
                </p>
              </div>
              <div class="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                <pre class="text-xs text-green-400 font-mono">{{ htmlSourcePreview }}</pre>
              </div>
              <div class="mt-4 bg-blue-50 rounded-lg p-4">
                <p class="text-sm text-blue-900 font-semibold mb-2">🎯 What This Means:</p>
                <ul class="text-xs text-blue-800 space-y-1 list-disc pl-4">
                  <li>Browser receives HTML with data already inside</li>
                  <li>No loading spinner on first visit</li>
                  <li>Search engines can index the content</li>
                  <li>Fast initial page load</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Network Comparison -->
        <div class="bg-indigo-50 border-l-4 border-indigo-500 rounded-lg p-4">
          <h5 class="font-semibold text-indigo-900 mb-2">🌐 Network Activity:</h5>
          <div class="text-sm text-indigo-800 space-y-2">
            <div class="flex items-center justify-between">
              <span>❌ No API call to /api/products on page load</span>
              <span class="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold">SSR</span>
            </div>
            <div class="flex items-center justify-between">
              <span>✅ Data already in HTML response</span>
              <span class="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold">Saved 1 request</span>
            </div>
            <p class="text-xs text-indigo-700 mt-2 italic">
              Open DevTools → Network tab and refresh to see zero API calls for initial data!
            </p>
          </div>
        </div>

        <!-- Refresh Button -->
        <button
          @click="refresh"
          class="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
        >
          🔄 Refresh Data (This WILL make an API call)
        </button>

        <!-- Performance Stats -->
        <div class="bg-gray-50 rounded-lg p-4">
          <p class="text-sm font-semibold text-gray-900 mb-2">⚡ Performance Metrics:</p>
          <div class="grid grid-cols-2 gap-3 text-xs">
            <div class="bg-white rounded p-2 border border-gray-200">
              <div class="text-gray-500 mb-1">Server Render</div>
              <div class="font-bold text-green-600">{{ serverRenderTime }}ms</div>
            </div>
            <div class="bg-white rounded p-2 border border-gray-200">
              <div class="text-gray-500 mb-1">Products Loaded</div>
              <div class="font-bold text-blue-600">{{ products?.length || 0 }}</div>
            </div>
            <div class="bg-white rounded p-2 border border-gray-200">
              <div class="text-gray-500 mb-1">Hydrated</div>
              <div class="font-bold text-purple-600">{{ isHydrated ? '✓ Yes' : 'Pending' }}</div>
            </div>
            <div class="bg-white rounded p-2 border border-gray-200">
              <div class="text-gray-500 mb-1">Loading State</div>
              <div class="font-bold text-gray-600">{{ pending ? 'Loading' : '✓ Ready' }}</div>
            </div>
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
const startTime = Date.now()
const { data: products, pending, error, refresh } = await useFetch('/api/products')
const serverRenderTime = ref(Date.now() - startTime)

// Hydration detection
const isHydrated = ref(false)

// Animation timeline
const animationStep = ref(0)
const isAnimating = ref(false)

const playAnimation = async () => {
  if (isAnimating.value) return

  isAnimating.value = true
  animationStep.value = 0

  // Step 1: Server fetches data
  await new Promise(resolve => setTimeout(resolve, 500))
  animationStep.value = 1

  // Wait for step 1 to complete
  await new Promise(resolve => setTimeout(resolve, 2000))
  animationStep.value = 2

  // Step 2: Server renders HTML
  await new Promise(resolve => setTimeout(resolve, 1500))
  animationStep.value = 3

  // Step 3: Browser receives HTML
  await new Promise(resolve => setTimeout(resolve, 1000))

  isAnimating.value = false
}

// Auto-play animation on mount
onMounted(() => {
  isHydrated.value = true
  // Start animation after a short delay
  setTimeout(() => {
    playAnimation()
  }, 300)
})

// HTML Source Modal
const showSourceModal = ref(false)

const htmlSourcePreview = computed(() => {
  if (!products.value) return 'No data available'

  // Create a simplified HTML representation showing the data
  const firstProduct = products.value[0]
  return `<!DOCTYPE html>
<html>
<head>
  <title>SSR Demo</title>
</head>
<body>
  <!-- 🎯 LOOK! Product data is already in HTML -->
  <div id="__nuxt">
    <div class="product">
      <h3>${firstProduct.name}</h3>
      <p>$${firstProduct.price}</p>
    </div>
    <!-- ... more products ... -->
  </div>

  <!-- 🎯 Nuxt serializes data in a script tag -->
  <script type="application/json" id="__NUXT_DATA__">
  ${JSON.stringify(products.value.slice(0, 2), null, 2)}
  <\/script>

  <!-- ✅ This is SSR magic! -->
  <!-- Data fetched on server, embedded in HTML -->
  <!-- Browser receives complete page -->
  <!-- No loading spinner needed! -->
</body>
</html>`
})

const showHtmlSource = () => {
  showSourceModal.value = true
}

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

<style scoped>
@keyframes progress {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}

.animate-progress {
  animation: progress 1.5s ease-in-out;
}

@keyframes bounce-once {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-bounce-once {
  animation: bounce-once 0.6s ease-in-out;
}
</style>

