<template>
  <FeatureLayout
    title="Component System"
    icon="🧩"
    description="Build reusable Vue components and use them anywhere without importing. Nuxt makes component development a breeze!"
  >
    <template #explanation>
      <h3 class="font-bold text-lg mb-2">Component Features:</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Auto-imported</strong> from <code>app/components/</code></li>
        <li><strong>Props</strong> for passing data</li>
        <li><strong>Events</strong> for communication</li>
        <li><strong>Slots</strong> for flexible content</li>
      </ul>
    </template>

    <template #code>
      <div class="space-y-4">
        <!-- Component Definition -->
        <div>
          <h4 class="text-sm font-semibold text-gray-700 mb-2">📄 Component Definition:</h4>
          <CodeDisplay
            :code="componentCode"
            language="vue"
            filename="app/components/ProductCard.vue"
          />
        </div>

        <!-- Using Component -->
        <div>
          <h4 class="text-sm font-semibold text-gray-700 mb-2">📱 Using the Component:</h4>
          <CodeDisplay
            :code="usageCode"
            language="vue"
            filename="app/pages/products/index.vue"
          />
        </div>
      </div>
    </template>

    <template #additional>
      <h4 class="font-bold text-teal-900 mb-2">💡 Key Benefits:</h4>
      <ul class="space-y-1 text-sm text-teal-800">
        <li>✅ Reusable across pages</li>
        <li>✅ No import needed</li>
        <li>✅ Type-safe props</li>
        <li>✅ Scoped styles</li>
      </ul>
    </template>

    <template #demo>
      <div class="space-y-4">
        <h4 class="font-bold text-gray-900 mb-3">Live Component Examples:</h4>

        <!-- ProductCard Example -->
        <div class="border border-teal-200 rounded-lg p-4 bg-teal-50">
          <h5 class="font-semibold text-teal-900 mb-3">ProductCard Component:</h5>
          <ProductCard :product="demoProduct" />
        </div>

        <!-- Interactive Props -->
        <div class="bg-white rounded-lg p-4 border border-gray-200">
          <h5 class="font-semibold text-gray-900 mb-3">Try Changing Props:</h5>
          <div class="space-y-3 mb-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Product Name:</label>
              <input
                v-model="demoProduct.name"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Price:</label>
              <input
                v-model.number="demoProduct.price"
                type="number"
                step="0.01"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Emoji:</label>
              <input
                v-model="demoProduct.emoji"
                maxlength="2"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>
          <ProductCard :product="demoProduct" />
        </div>

        <!-- Component Benefits -->
        <div class="bg-teal-50 rounded-lg p-4">
          <h5 class="font-semibold text-teal-900 mb-2">🎯 Why Components?</h5>
          <ul class="text-sm text-teal-800 space-y-1">
            <li>✓ Write once, use everywhere</li>
            <li>✓ Consistent UI across app</li>
            <li>✓ Easy to test</li>
            <li>✓ Easy to maintain</li>
          </ul>
        </div>
      </div>
    </template>
  </FeatureLayout>
</template>

<script setup lang="ts">
useHead({
  title: 'Component System - Nuxt Demo'
})

const demoProduct = reactive({
  id: 999,
  name: 'Demo Product',
  category: 'example',
  price: 99.99,
  rating: 5,
  stock: 50,
  emoji: '🎨',
  description: 'This is a live demo! Try changing the props above.'
})

const componentCode = `<!-- app/components/ProductCard.vue -->
<template>
  <NuxtLink
    :to="\`/products/\${product.id}\`"
    class="bg-white rounded-lg shadow-md hover:shadow-xl transition"
  >
    <!-- Product Image/Emoji -->
    <div class="bg-gradient-to-br from-indigo-100 to-purple-100 p-8">
      <span class="text-6xl">{{ product.emoji }}</span>
    </div>

    <!-- Product Info -->
    <div class="p-6">
      <span class="text-xs font-semibold text-indigo-600 uppercase">
        {{ product.category }}
      </span>
      <span class="text-yellow-500">{{ '⭐'.repeat(product.rating) }}</span>

      <h3 class="text-xl font-bold">{{ product.name }}</h3>
      <p class="text-gray-600 text-sm">{{ product.description }}</p>

      <div class="flex items-center justify-between">
        <span class="text-2xl font-bold">` + '$' + `{{ product.price }}</span>
        <span class="text-sm text-gray-500">{{ product.stock }} in stock</span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
// Complete Product interface
interface Product {
  id: number
  name: string
  category: string
  price: number
  rating: number
  stock: number
  emoji: string
  description: string
}

// Type-safe props - no import needed!
defineProps<{
  product: Product
}>()
<\/script>`

const usageCode = `<template>
  <div>
    <!-- No import needed! Just use it -->
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script setup>
// ProductCard is auto-imported!
const products = [
  { id: 1, name: 'Item 1', price: 29.99, emoji: '🎸' },
  { id: 2, name: 'Item 2', price: 39.99, emoji: '🎹' }
]
<\/script>`
</script>

