<template>
  <FeatureLayout
    title="Auto-Imports"
    icon="✨"
    description="Nuxt automatically imports components, composables, and Vue APIs. No need for import statements - just use them directly!"
  >
    <template #explanation>
      <h3 class="font-bold text-lg mb-2">What Gets Auto-Imported:</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Components</strong> from <code>app/components/</code></li>
        <li><strong>Composables</strong> from <code>app/composables/</code></li>
        <li><strong>Vue APIs</strong> like ref, computed, watch, etc.</li>
        <li><strong>Nuxt composables</strong> like useFetch, useRoute, etc.</li>
      </ul>
    </template>

    <template #code>
      <div class="space-y-4">
        <!-- Without Auto-Imports -->
        <div>
          <h4 class="text-sm font-semibold text-gray-700 mb-2">❌ Without Auto-Imports (React/Vue):</h4>
          <CodeDisplay
            :code="withoutAutoImports"
            language="vue"
            filename="Traditional approach"
          />
        </div>

        <!-- With Auto-Imports -->
        <div>
          <h4 class="text-sm font-semibold text-gray-700 mb-2">✅ With Auto-Imports (Nuxt):</h4>
          <CodeDisplay
            :code="withAutoImports"
            language="vue"
            filename="Nuxt approach"
          />
        </div>

        <!-- Composable Example -->
        <div>
          <h4 class="text-sm font-semibold text-gray-700 mb-2">🔧 Custom Composable:</h4>
          <CodeDisplay
            :code="composableCode"
            language="typescript"
            filename="app/composables/useCounter.ts"
          />
        </div>

        <!-- Component Example -->
        <div>
          <h4 class="text-sm font-semibold text-gray-700 mb-2">🧩 Custom Component:</h4>
          <CodeDisplay
            :code="componentCode"
            language="vue"
            filename="app/components/MyButton.vue"
          />
        </div>
      </div>
    </template>

    <template #additional>
      <h4 class="font-bold text-purple-900 mb-2">💡 Key Benefits:</h4>
      <ul class="space-y-1 text-sm text-purple-800">
        <li>✅ Cleaner, more readable code</li>
        <li>✅ Less boilerplate</li>
        <li>✅ Better developer experience</li>
        <li>✅ Tree-shaking still works!</li>
      </ul>
    </template>

    <template #demo>
      <div class="space-y-6">
        <h4 class="font-bold text-gray-900 mb-3">Live Examples:</h4>

        <!-- Example 1: Auto-imported Composable -->
        <div class="border border-purple-200 rounded-lg p-4 bg-purple-50">
          <h5 class="font-semibold text-purple-900 mb-3">1. Auto-Imported Composable</h5>
          <p class="text-sm text-gray-600 mb-3">
            <code class="bg-purple-100 px-2 py-1 rounded">useCounter()</code> is auto-imported from <code class="bg-purple-100 px-2 py-1 rounded">app/composables/</code>
          </p>

          <div class="bg-white rounded-lg p-4">
            <div class="flex items-center justify-center gap-4">
              <button
                @click="decrement"
                class="bg-purple-600 text-white w-12 h-12 rounded-full hover:bg-purple-700 transition font-bold text-xl"
              >
                -
              </button>
              <div class="text-4xl font-bold text-purple-600 min-w-[80px] text-center">
                {{ count }}
              </div>
              <button
                @click="increment"
                class="bg-purple-600 text-white w-12 h-12 rounded-full hover:bg-purple-700 transition font-bold text-xl"
              >
                +
              </button>
            </div>
            <p class="text-center text-sm text-gray-500 mt-3">
              No import statement needed!
            </p>
          </div>
        </div>

        <!-- Example 2: Auto-imported Component -->
        <div class="border border-indigo-200 rounded-lg p-4 bg-indigo-50">
          <h5 class="font-semibold text-indigo-900 mb-3">2. Auto-Imported Component</h5>
          <p class="text-sm text-gray-600 mb-3">
            <code class="bg-indigo-100 px-2 py-1 rounded">ProductCard</code> component used without import
          </p>

          <div class="bg-white rounded-lg p-4">
            <ProductCard :product="exampleProduct" />
          </div>
        </div>

        <!-- Example 3: Vue APIs -->
        <div class="border border-green-200 rounded-lg p-4 bg-green-50">
          <h5 class="font-semibold text-green-900 mb-3">3. Vue APIs (ref, computed)</h5>
          <p class="text-sm text-gray-600 mb-3">
            No need to import <code class="bg-green-100 px-2 py-1 rounded">ref</code>, <code class="bg-green-100 px-2 py-1 rounded">computed</code>, etc.
          </p>

          <div class="bg-white rounded-lg p-4">
            <input
              v-model="name"
              placeholder="Enter your name"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 mb-3"
            />
            <div class="bg-green-50 rounded p-3">
              <p class="text-green-900 font-semibold">
                {{ greeting }}
              </p>
            </div>
          </div>
        </div>

        <!-- What's Available -->
        <div class="bg-gray-50 rounded-lg p-4">
          <p class="text-sm font-semibold text-gray-900 mb-2">📦 Auto-Imported APIs:</p>
          <div class="grid grid-cols-2 gap-2 text-xs font-mono text-gray-600">
            <div>ref()</div>
            <div>reactive()</div>
            <div>computed()</div>
            <div>watch()</div>
            <div>useState()</div>
            <div>useFetch()</div>
            <div>useRoute()</div>
            <div>useRouter()</div>
            <div>navigateTo()</div>
            <div>useHead()</div>
          </div>
          <p class="text-xs text-gray-500 mt-3">
            ...and many more!
          </p>
        </div>
      </div>
    </template>
  </FeatureLayout>
</template>

<script setup lang="ts">
useHead({
  title: 'Auto-Imports - Nuxt Demo'
})

// 🎯 No imports needed! Everything is auto-imported
// - ref from Vue
// - useCounter from app/composables/
// - ProductCard from app/components/

const { count, increment, decrement } = useCounter()

const name = ref('')
const greeting = computed(() => {
  return name.value ? `Hello, ${name.value}! 👋` : 'Type your name above...'
})

const exampleProduct = {
  id: 1,
  name: 'Auto-Imported Example',
  category: 'demo',
  price: 49.99,
  rating: 5,
  stock: 100,
  emoji: '🎨',
  description: 'This component is auto-imported! No import statement needed.'
}

const withoutAutoImports = `<script setup>
// Traditional approach - lots of imports!
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import MyButton from '~/components/MyButton.vue'
import MyCard from '~/components/MyCard.vue'
import { useCounter } from '~/composables/useCounter'
import { formatDate } from '~/utils/formatDate'

const count = ref(0)
const router = useRouter()
<\/script>`

const withAutoImports = `<script setup>
// Nuxt approach - NO imports needed!
// Everything is automatically available

const count = ref(0)              // Vue ref
const router = useRouter()        // Nuxt composable
const { increment } = useCounter() // Custom composable
<\/script>

<template>
  <!-- Components used without importing -->
  <MyButton @click="increment">Click me</MyButton>
  <MyCard>{{ count }}</MyCard>
</template>`

const composableCode = `// app/composables/useCounter.ts
export const useCounter = (initialValue = 0) => {
  const count = ref(initialValue)

  const increment = () => count.value++
  const decrement = () => count.value--
  const reset = () => count.value = initialValue

  return {
    count: readonly(count), // 🔒 Readonly prevents external modification
    increment,
    decrement,
    reset
  }
}

// ✅ This composable is automatically available everywhere!
// No need to import it in your components
// The readonly() wrapper is a best practice for encapsulation`

const componentCode = `<!-- app/components/MyButton.vue -->
<template>
  <button class="my-button">
    <slot />
  </button>
</template>

<style scoped>
.my-button {
  /* styles */
}
</style>

<!-- ✅ This component is automatically available everywhere! -->
<!-- Just use <MyButton> in any template -->`
</script>

