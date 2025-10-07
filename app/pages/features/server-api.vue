<template>
  <FeatureLayout
    title="Server API Routes"
    icon="🔥"
    description="Build full-stack applications with backend API routes right in your Nuxt project. No separate Express or Fastify server needed!"
  >
    <template #explanation>
      <h3 class="font-bold text-lg mb-2">How It Works:</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Create files</strong> in <code>server/api/</code> directory</li>
        <li><strong>File becomes API endpoint</strong> automatically</li>
        <li><strong>Full Node.js backend</strong> capabilities</li>
        <li><strong>Connect to databases</strong>, call external APIs, etc.</li>
      </ul>
    </template>

    <template #code>
      <div class="space-y-4">
        <!-- API File Structure -->
        <div>
          <h4 class="text-sm font-semibold text-gray-700 mb-2">📂 API Structure:</h4>
          <CodeDisplay
            :code="apiStructure"
            language="bash"
            filename="server/api/ directory"
          />
        </div>

        <!-- API Route Code -->
        <div>
          <h4 class="text-sm font-semibold text-gray-700 mb-2">📄 API Endpoint Code:</h4>
          <CodeDisplay
            :code="apiCode"
            language="typescript"
            filename="server/api/products/index.get.ts"
          />
        </div>

        <!-- Client-side Usage -->
        <div>
          <h4 class="text-sm font-semibold text-gray-700 mb-2">📱 Using in Components:</h4>
          <CodeDisplay
            :code="clientCode"
            language="vue"
            filename="app/pages/products/index.vue"
          />
        </div>
      </div>
    </template>

    <template #additional>
      <h4 class="font-bold text-green-900 mb-2">💡 Key Benefits:</h4>
      <ul class="space-y-1 text-sm text-green-800">
        <li>✅ Full-stack in one project</li>
        <li>✅ File-based API routing</li>
        <li>✅ TypeScript support</li>
        <li>✅ Perfect for BFF pattern</li>
      </ul>
    </template>

    <template #demo>
      <div class="space-y-4">
        <h4 class="font-bold text-gray-900 mb-3">Live API Calls:</h4>

        <!-- API Endpoint 1 -->
        <div class="border border-gray-200 rounded-lg p-4">
          <div class="flex items-center justify-between mb-3">
            <span class="font-mono text-sm text-green-600 font-semibold">GET /api/products</span>
            <button
              @click="fetchProducts"
              :disabled="loadingProducts"
              class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition font-semibold disabled:opacity-50 text-sm"
            >
              {{ loadingProducts ? 'Loading...' : 'Call API' }}
            </button>
          </div>

          <div v-if="products" class="bg-gray-50 rounded p-3 max-h-60 overflow-auto">
            <pre class="text-xs font-mono">{{ JSON.stringify(products, null, 2) }}</pre>
          </div>
          <div v-else class="text-gray-500 text-sm">
            Click "Call API" to fetch products
          </div>
        </div>

        <!-- API Endpoint 2 -->
        <div class="border border-gray-200 rounded-lg p-4">
          <div class="flex items-center justify-between mb-3">
            <span class="font-mono text-sm text-blue-600 font-semibold">GET /api/products/:id</span>
          </div>

          <div class="flex gap-2 mb-3">
            <input
              v-model="selectedProductId"
              type="number"
              placeholder="Product ID (1-9)"
              min="1"
              max="9"
              class="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
            <button
              @click="fetchSingleProduct"
              :disabled="loadingProduct"
              class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-semibold disabled:opacity-50 text-sm"
            >
              {{ loadingProduct ? 'Loading...' : 'Fetch' }}
            </button>
          </div>

          <div v-if="singleProduct" class="bg-gray-50 rounded p-3">
            <pre class="text-xs font-mono">{{ JSON.stringify(singleProduct, null, 2) }}</pre>
          </div>
          <div v-else-if="productError" class="text-red-600 text-sm">
            {{ productError }}
          </div>
        </div>

        <!-- Response Time -->
        <div v-if="responseTime" class="bg-indigo-50 rounded-lg p-4">
          <p class="text-sm font-semibold text-indigo-900">
            ⚡ Response Time: <span class="text-indigo-600">{{ responseTime }}ms</span>
          </p>
          <p class="text-xs text-indigo-700 mt-1">
            API runs on the same server as your frontend!
          </p>
        </div>

        <!-- Available Endpoints -->
        <div class="bg-gray-50 rounded-lg p-4">
          <p class="text-sm font-semibold text-gray-900 mb-2">📋 Available Endpoints:</p>
          <ul class="space-y-1 text-xs font-mono text-gray-600">
            <li>GET /api/products</li>
            <li>GET /api/products/[id]</li>
          </ul>
          <p class="text-xs text-gray-500 mt-3">
            💡 You can open these URLs directly in your browser!
          </p>
          <div class="mt-2">
            <a
              href="/api/products"
              target="_blank"
              class="text-indigo-600 hover:text-indigo-800 text-xs font-semibold"
            >
              Open /api/products in new tab →
            </a>
          </div>
        </div>
      </div>
    </template>
  </FeatureLayout>
</template>

<script setup lang="ts">
useHead({
  title: 'Server API Routes - Nuxt Demo'
})

const products = ref<any>(null)
const loadingProducts = ref(false)

const singleProduct = ref<any>(null)
const selectedProductId = ref(1)
const loadingProduct = ref(false)
const productError = ref('')

const responseTime = ref<number | null>(null)

const fetchProducts = async () => {
  loadingProducts.value = true
  const startTime = Date.now()

  try {
    const { data } = await useFetch('/api/products')
    products.value = data.value
    responseTime.value = Date.now() - startTime
  } catch (err) {
    console.error('Error fetching products:', err)
  } finally {
    loadingProducts.value = false
  }
}

const fetchSingleProduct = async () => {
  loadingProduct.value = true
  productError.value = ''
  singleProduct.value = null
  const startTime = Date.now()

  try {
    const { data, error } = await useFetch(`/api/products/${selectedProductId.value}`)
    if (error.value) {
      productError.value = error.value.message || 'Product not found'
    } else {
      singleProduct.value = data.value
      responseTime.value = Date.now() - startTime
    }
  } catch (err: any) {
    productError.value = err.message || 'Error fetching product'
  } finally {
    loadingProduct.value = false
  }
}

const apiStructure = `server/api/
├── products/
│   ├── index.get.ts          → GET /api/products
│   ├── index.post.ts         → POST /api/products
│   └── [id].get.ts           → GET /api/products/:id
└── users/
    └── [id].get.ts           → GET /api/users/:id`

const apiCode = `// server/api/products/index.get.ts
export default defineEventHandler((event) => {
  // 🎯 This code runs on the SERVER (Node.js environment)

  // You can:
  // - Connect to databases (PostgreSQL, MongoDB, etc.)
  // - Call external APIs
  // - Access environment variables
  // - Use any Node.js modules

  // Demo data (in production, fetch from database)
  const products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      category: 'electronics',
      price: 99.99,
      rating: 5,
      stock: 25,
      emoji: '🎧',
      description: 'Premium wireless headphones...'
    },
    // ... 8 more products (abbreviated for clarity)
  ]

  // Optional: Add query parameters, filtering, pagination
  // const query = getQuery(event)

  return products
})`

const clientCode = `<template>
  <div>
    <div v-if="pending">Loading...</div>
    <div v-else>
      <div v-for="product in products" :key="product.id">
        {{ product.name }} - ` + '$' + `{{ product.price }}
      </div>
    </div>
  </div>
</template>

<script setup>
// Automatically calls your API endpoint
const { data: products, pending } = await useFetch('/api/products')
<\/script>`
</script>

