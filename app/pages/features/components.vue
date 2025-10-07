<template>
  <FeatureLayout
    title="Server Components"
    icon="🖥️"
    description="Nuxt Server Components run ONLY on the server, sending zero JavaScript to the client. Perfect for heavy data processing and sensitive logic!"
  >
    <template #explanation>
      <h3 class="font-bold text-lg mb-2">What Are Server Components?</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Server-only execution</strong> - Never run in the browser</li>
        <li><strong>Zero JS to client</strong> - Component code not sent to browser</li>
        <li><strong>Node.js APIs</strong> - Can use server-side libraries</li>
        <li><strong>Sensitive logic</strong> - Safe for API keys, database queries</li>
      </ul>
    </template>

    <template #code>
      <div class="space-y-4">
        <!-- Server Component -->
        <div>
          <h4 class="text-sm font-semibold text-gray-700 mb-2">🖥️ Server Component (.server.vue):</h4>
          <CodeDisplay
            :code="serverComponentCode"
            language="vue"
            filename="app/components/HeavyDataTable.server.vue"
          />
        </div>

        <!-- Regular Component -->
        <div>
          <h4 class="text-sm font-semibold text-gray-700 mb-2">📱 Regular Component (.vue):</h4>
          <CodeDisplay
            :code="regularComponentCode"
            language="vue"
            filename="app/components/RegularDataDisplay.vue"
          />
        </div>

        <!-- Comparison -->
        <div class="bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-500 p-4 rounded">
          <h4 class="font-semibold text-gray-900 mb-2">🆚 Key Difference:</h4>
          <div class="text-sm space-y-2">
            <div class="flex items-start gap-2">
              <span class="text-green-600 font-bold">✓</span>
              <div>
                <strong class="text-green-900">.server.vue</strong>
                <span class="text-gray-700"> - Runs only on server, zero JS to client</span>
              </div>
            </div>
            <div class="flex items-start gap-2">
              <span class="text-blue-600 font-bold">⚡</span>
              <div>
                <strong class="text-blue-900">.vue</strong>
                <span class="text-gray-700"> - Rendered on server, hydrated in browser</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>

    <template #additional>
      <h4 class="font-bold text-teal-900 mb-2">💡 When to Use Server Components:</h4>
      <ul class="space-y-1 text-sm text-teal-800">
        <li>✅ Heavy data processing/calculations</li>
        <li>✅ Large dependencies (charts, markdown, etc.)</li>
        <li>✅ Sensitive business logic</li>
        <li>✅ SEO-focused content (blogs, docs)</li>
        <li>✅ Reduce client bundle size</li>
      </ul>
    </template>

    <template #demo>
      <div class="space-y-4">
        <h4 class="font-bold text-gray-900 mb-3">Live Comparison:</h4>

        <!-- Server Component Example -->
        <div>
          <h5 class="text-sm font-semibold text-gray-700 mb-2">🖥️ Server Component (Zero JS):</h5>
          <HeavyDataTable :products="products" />
        </div>

        <!-- Regular Component Example -->
        <div>
          <h5 class="text-sm font-semibold text-gray-700 mb-2">📱 Regular Component (With JS):</h5>
          <RegularDataDisplay :products="products" />
        </div>

        <!-- Interactive Comparison -->
        <div class="bg-gradient-to-r from-red-50 to-green-50 rounded-lg p-4 border-2 border-yellow-400">
          <h5 class="font-semibold text-gray-900 mb-3">🎯 The Key Difference - Try It!</h5>
          <div class="grid md:grid-cols-2 gap-4 text-sm">
            <div class="bg-white rounded-lg p-3 border-2 border-red-300">
              <div class="font-bold text-red-900 mb-2">🖥️ Server Component Button:</div>
              <div class="text-xs text-red-800 mb-2">❌ Doesn't respond to clicks</div>
              <div class="text-xs text-red-700">→ No JavaScript sent to browser</div>
            </div>
            <div class="bg-white rounded-lg p-3 border-2 border-green-300">
              <div class="font-bold text-green-900 mb-2">📱 Regular Component Button:</div>
              <div class="text-xs text-green-800 mb-2">✅ Responds to clicks</div>
              <div class="text-xs text-green-700">→ JavaScript hydrated in browser</div>
            </div>
          </div>
          <p class="text-xs text-gray-700 mt-3 text-center font-semibold">
            👆 Click both buttons above to see the difference in action!
          </p>
        </div>

        <!-- Bundle Size Comparison -->
        <div class="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 border-2 border-purple-200">
          <h5 class="font-semibold text-purple-900 mb-3">📦 Bundle Impact:</h5>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-white rounded-lg p-4 border border-green-300">
              <div class="text-xs text-gray-600 mb-1">Server Component</div>
              <div class="text-2xl font-bold text-green-600">0 KB</div>
              <div class="text-xs text-gray-600 mt-1">to client bundle</div>
            </div>
            <div class="bg-white rounded-lg p-4 border border-blue-300">
              <div class="text-xs text-gray-600 mb-1">Regular Component</div>
              <div class="text-2xl font-bold text-blue-600">~2-5 KB</div>
              <div class="text-xs text-gray-600 mt-1">to client bundle</div>
            </div>
          </div>
          <p class="text-xs text-purple-800 mt-3">
            💡 Server components can save significant bundle size, especially with heavy dependencies!
          </p>
        </div>

        <!-- Server Logs Proof -->
        <div class="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-4">
          <h5 class="font-semibold text-yellow-900 mb-2">🔥 Check Your Terminal:</h5>
          <p class="text-sm text-yellow-800 mb-2">
            The server component logs appear in your terminal (where <code class="bg-yellow-100 px-2 py-1 rounded">npm run dev</code> runs):
          </p>
          <div class="bg-yellow-100 rounded p-3 font-mono text-xs text-yellow-900">
            🟢 [SERVER COMPONENT] HeavyDataTable rendered with 9 items
          </div>
          <p class="text-xs text-yellow-700 mt-2">
            ✓ This proves it only runs on the server!
          </p>
        </div>

        <!-- Use Cases -->
        <div class="bg-gray-50 rounded-lg p-4">
          <h5 class="font-semibold text-gray-900 mb-2">🎯 Perfect For:</h5>
          <div class="grid md:grid-cols-2 gap-3 text-sm">
            <div class="flex items-start gap-2">
              <span>📊</span>
              <span>Heavy data tables & charts</span>
            </div>
            <div class="flex items-start gap-2">
              <span>📝</span>
              <span>Markdown rendering</span>
            </div>
            <div class="flex items-start gap-2">
              <span>🔒</span>
              <span>Sensitive calculations</span>
            </div>
            <div class="flex items-start gap-2">
              <span>📚</span>
              <span>Documentation/blog content</span>
            </div>
          </div>
        </div>
      </div>
    </template>
  </FeatureLayout>
</template>

<script setup lang="ts">
useHead({
  title: 'Server Components - Nuxt Demo'
})

// Fetch products for demo
const { data: products } = await useFetch('/api/products')

const serverComponentCode = `<!-- app/components/HeavyDataTable.server.vue -->
<template>
  <div class="data-table">
    <table>
      <tr v-for="item in processedData">
        <td>{{ item.name }}</td>
        <td>` + '$' + `{{ item.revenue }}</td>
      </tr>
    </table>
  </div>
</template>

<script setup>
// 🎯 .server.vue = Server Component
// - Runs ONLY on server
// - Zero JavaScript sent to client
// - Perfect for heavy processing

const props = defineProps<{
  products: Array<Product>
}>()

// Heavy calculation (server-only)
const processedData = props.products.map(p => ({
  name: p.name,
  revenue: p.price * p.stock,
  computed: \`Processed at \${new Date().toISOString()}\`
}))

// 🔥 This log appears in TERMINAL only
console.log('🟢 [SERVER] Rendered with', processedData.length, 'items')
<\/script>

// ✅ Benefits:
// - No component JS in client bundle
// - Can use Node.js APIs
// - Safe for sensitive logic
// - Reduces bundle size`

const regularComponentCode = `<!-- app/components/RegularDataDisplay.vue -->
<template>
  <div>
    <div v-for="product in products">
      {{ product.name }}
    </div>
    <button @click="count++">
      Click: {{ count }}
    </button>
  </div>
</template>

<script setup>
// 🎯 Regular .vue component
// - Rendered on server
// - Hydrated in browser (JavaScript sent)
// - Can be interactive

defineProps<{
  products: Array<Product>
}>()

const count = ref(0) // Interactive state
<\/script>

// ⚡ Characteristics:
// - Component JS sent to client
// - Can respond to user events
// - Larger bundle size
// - Full interactivity`
</script>


