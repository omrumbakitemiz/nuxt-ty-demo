<template>
  <div class="bg-white rounded-lg border border-gray-200 overflow-hidden">
    <div class="bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-3">
      <h3 class="text-white font-bold">📊 Server-Only Component</h3>
      <p class="text-indigo-100 text-xs mt-1">This component runs ONLY on the server!</p>
    </div>
    <div class="p-4">
      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b">
              <th class="text-left py-2 px-3 font-semibold">ID</th>
              <th class="text-left py-2 px-3 font-semibold">Product</th>
              <th class="text-left py-2 px-3 font-semibold">Revenue</th>
              <th class="text-left py-2 px-3 font-semibold">Computed</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in processedData" :key="item.id" class="border-b hover:bg-gray-50">
              <td class="py-2 px-3">{{ item.id }}</td>
              <td class="py-2 px-3">{{ item.emoji }} {{ item.name }}</td>
              <td class="py-2 px-3 font-bold text-green-600">${{ item.revenue.toLocaleString() }}</td>
              <td class="py-2 px-3 text-xs text-gray-600">{{ item.computed }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="mt-4 bg-green-50 border border-green-200 rounded p-3">
        <p class="text-xs text-green-900 font-semibold">✅ Server Component Benefits:</p>
        <ul class="text-xs text-green-800 mt-2 space-y-1">
          <li>• Heavy calculations done on server ({{ processedData.length }} items processed)</li>
          <li>• Zero JavaScript sent to client for this component</li>
          <li>• Can use Node.js libraries safely</li>
          <li>• Perfect for data-heavy displays</li>
        </ul>
      </div>

      <!-- Non-functional button to prove it's server-only -->
      <button
        class="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition text-sm font-semibold"
      >
        🖱️ Click Me! (0 clicks)
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
// 🎯 This is a SERVER COMPONENT (.server.vue)
// - Runs ONLY on the server, never in the browser
// - Zero JavaScript sent to client
// - Can use Node.js APIs, environment variables, etc.
// - Perfect for heavy data processing

const props = defineProps<{
  products: Array<{
    id: number
    name: string
    emoji: string
    price: number
    stock: number
  }>
}>()

// Heavy computation that runs ONLY on server
const processedData = props.products.map(product => {
  // Simulate heavy calculation (this would never run in browser)
  const revenue = product.price * product.stock
  const computed = `Processed on server at ${new Date().toISOString()}`

  return {
    id: product.id,
    name: product.name,
    emoji: product.emoji,
    revenue,
    computed
  }
})

// 🔥 Server-side log (appears in terminal, not browser console)
console.log('🟢 [SERVER COMPONENT] HeavyDataTable rendered with', processedData.length, 'items')
</script>

