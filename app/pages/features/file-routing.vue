<template>
  <FeatureLayout
    title="File-Based Routing"
    icon="📁"
    description="Nuxt automatically generates routes based on your file structure in the app/pages/ directory. No manual router configuration needed!"
  >
    <template #explanation>
      <h3 class="font-bold text-lg mb-2">How It Works:</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Create a file</strong> in <code>app/pages/</code> directory</li>
        <li><strong>File becomes a route</strong> automatically</li>
        <li><strong>Dynamic routes</strong> use <code>[id].vue</code> syntax</li>
        <li><strong>Nested routes</strong> use folder structure</li>
      </ul>
    </template>

    <template #code>
      <div class="space-y-4">
        <!-- File Structure -->
        <div>
          <h4 class="text-sm font-semibold text-gray-700 mb-2">📂 File Structure:</h4>
          <CodeDisplay
            :code="fileStructure"
            language="bash"
            filename="app/pages/ directory"
          />
        </div>

        <!-- Example Page Code -->
        <div>
          <h4 class="text-sm font-semibold text-gray-700 mb-2">📄 Example Page Code:</h4>
          <CodeDisplay
            :code="exampleCode"
            language="vue"
            filename="app/pages/products/[id].vue"
          />
        </div>
      </div>
    </template>

    <template #additional>
      <h4 class="font-bold text-indigo-900 mb-2">💡 Key Benefits:</h4>
      <ul class="space-y-1 text-sm text-indigo-800">
        <li>✅ Zero configuration needed</li>
        <li>✅ Intuitive and visual</li>
        <li>✅ Type-safe route params</li>
        <li>✅ Easy to refactor</li>
      </ul>
    </template>

    <template #demo>
      <div class="space-y-4">
        <h4 class="font-bold text-gray-900 mb-3">Try Navigation:</h4>

        <!-- Route Examples -->
        <div class="space-y-3">
          <div class="border border-gray-200 rounded-lg p-4 hover:border-indigo-500 transition">
            <div class="flex items-center justify-between mb-2">
              <span class="font-mono text-sm text-gray-600">app/pages/index.vue</span>
              <span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Active</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-900 font-semibold">Route: /</span>
              <NuxtLink
                to="/"
                class="text-indigo-600 hover:text-indigo-800 text-sm font-semibold"
              >
                Visit →
              </NuxtLink>
            </div>
          </div>

          <div class="border border-gray-200 rounded-lg p-4 hover:border-indigo-500 transition">
            <div class="flex items-center justify-between mb-2">
              <span class="font-mono text-sm text-gray-600">app/pages/products/index.vue</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-900 font-semibold">Route: /products</span>
              <NuxtLink
                to="/products"
                class="text-indigo-600 hover:text-indigo-800 text-sm font-semibold"
              >
                Visit →
              </NuxtLink>
            </div>
          </div>

          <div class="border border-gray-200 rounded-lg p-4 hover:border-indigo-500 transition">
            <div class="flex items-center justify-between mb-2">
              <span class="font-mono text-sm text-gray-600">app/pages/products/[id].vue</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-900 font-semibold">Route: /products/:id</span>
              <NuxtLink
                to="/products/1"
                class="text-indigo-600 hover:text-indigo-800 text-sm font-semibold"
              >
                Visit →
              </NuxtLink>
            </div>
          </div>

          <div class="border border-gray-200 rounded-lg p-4 hover:border-indigo-500 transition">
            <div class="flex items-center justify-between mb-2">
              <span class="font-mono text-sm text-gray-600">app/pages/about.vue</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-900 font-semibold">Route: /about</span>
              <NuxtLink
                to="/about"
                class="text-indigo-600 hover:text-indigo-800 text-sm font-semibold"
              >
                Visit →
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Current Route Display -->
        <div class="mt-6 bg-indigo-50 rounded-lg p-4">
          <p class="text-sm font-semibold text-indigo-900 mb-1">Current Route:</p>
          <p class="font-mono text-indigo-600">{{ $route.path }}</p>
        </div>

        <!-- Interactive Demo -->
        <div class="mt-6 bg-gray-50 rounded-lg p-4">
          <p class="text-sm font-semibold text-gray-900 mb-3">Test Dynamic Routes:</p>
          <div class="flex gap-2">
            <input
              v-model="productId"
              type="number"
              placeholder="Product ID"
              class="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <NuxtLink
              :to="`/products/${productId}`"
              class="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition font-semibold"
            >
              Go
            </NuxtLink>
          </div>
        </div>
      </div>
    </template>
  </FeatureLayout>
</template>

<script setup lang="ts">
useHead({
  title: 'File-Based Routing - Nuxt Demo'
})

const productId = ref(1)

const fileStructure = `app/pages/
├── index.vue                 → /
├── about.vue                → /about
├── features/
│   ├── file-routing.vue     → /features/file-routing
│   ├── server-api.vue       → /features/server-api
│   └── auto-imports.vue     → /features/auto-imports
├── products/
│   ├── index.vue            → /products
│   └── [id].vue             → /products/:id (dynamic)
└── admin/
    └── index.vue            → /admin`

const exampleCode = `<template>
  <div>
    <h1>Product {{ $route.params.id }}</h1>

    <div v-if="pending">Loading...</div>
    <div v-else-if="product">
      <p>{{ product.name }}</p>
      <p>` + '$' + `{{ product.price }}</p>
    </div>
  </div>
</template>

<script setup>
// Access dynamic route parameter
const route = useRoute()
const productId = route.params.id

// Fetch data based on route param
const { data: product, pending } = await useFetch(\`/api/products/\${productId}\`)

// Dynamic SEO based on route
useHead({
  title: () => product.value ? \`\${product.value.name} - Products\` : 'Product'
})
<\/script>`
</script>

