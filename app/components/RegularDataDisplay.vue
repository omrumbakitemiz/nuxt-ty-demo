<template>
  <div class="bg-white rounded-lg border border-gray-200 overflow-hidden">
    <div class="bg-gradient-to-r from-blue-500 to-cyan-600 px-4 py-3">
      <h3 class="text-white font-bold">📱 Regular Component</h3>
      <p class="text-blue-100 text-xs mt-1">This component is hydrated in the browser</p>
    </div>
    <div class="p-4">
      <div class="grid gap-2">
        <div
          v-for="item in products.slice(0, 3)"
          :key="item.id"
          class="flex items-center justify-between p-3 border border-gray-200 rounded hover:border-blue-500 transition cursor-pointer"
        >
          <div class="flex items-center gap-2">
            <span class="text-2xl">{{ item.emoji }}</span>
            <span class="font-semibold">{{ item.name }}</span>
          </div>
          <div class="text-sm">
            <span class="font-bold text-blue-600">${{ item.price }}</span>
            <span class="text-gray-500 ml-2">Stock: {{ item.stock }}</span>
          </div>
        </div>
      </div>

      <div class="mt-4 bg-blue-50 border border-blue-200 rounded p-3">
        <p class="text-xs text-blue-900 font-semibold">⚡ Regular Component:</p>
        <ul class="text-xs text-blue-800 mt-2 space-y-1">
          <li>• Rendered on server, then hydrated in browser</li>
          <li>• JavaScript sent to client for interactivity</li>
          <li>• Can respond to user events</li>
          <li>• Larger bundle size</li>
        </ul>
      </div>

      <!-- Interactive demo -->
      <button
        @click="showCount++"
        class="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition text-sm font-semibold"
      >
        🖱️ Click Me! ({{ showCount }} clicks)
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
// 🎯 This is a REGULAR COMPONENT (.vue)
// - Rendered on server AND hydrated in browser
// - JavaScript sent to client
// - Can be interactive

defineProps<{
  products: Array<{
    id: number
    name: string
    emoji: string
    price: number
    stock: number
  }>
}>()

const showCount = ref(0)
</script>

