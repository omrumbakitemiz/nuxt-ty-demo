<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navigation Header -->
    <div class="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4">
            <NuxtLink
              to="/"
              class="text-indigo-600 hover:text-indigo-800 transition font-semibold flex items-center gap-2"
            >
              ← Dashboard
            </NuxtLink>
            <div class="text-gray-300">|</div>
            <h1 class="text-xl font-bold text-gray-900">{{ title }}</h1>
          </div>
          <div class="flex items-center gap-2 text-sm text-gray-600">
            <span class="hidden md:inline">{{ icon }}</span>
            <span class="hidden md:inline">{{ title }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content: Split View -->
    <div class="container mx-auto px-4 py-8">
      <div class="grid lg:grid-cols-2 gap-6">
        <!-- Left Side: Code & Explanation -->
        <div class="space-y-6">
          <div class="bg-white rounded-lg shadow-lg p-6">
            <h2 class="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              {{ icon }} {{ title }}
            </h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              {{ description }}
            </p>
            <div v-if="$slots.explanation" class="prose prose-sm max-w-none">
              <slot name="explanation" />
            </div>
          </div>

          <!-- Code Display -->
          <div>
            <h3 class="text-lg font-bold text-gray-900 mb-3">📄 Code Example</h3>
            <slot name="code" />
          </div>

          <!-- Additional Info -->
          <div v-if="$slots.additional" class="bg-indigo-50 rounded-lg p-6 border-l-4 border-indigo-500">
            <slot name="additional" />
          </div>
        </div>

        <!-- Right Side: Live Demo -->
        <div class="lg:sticky lg:top-24 h-fit">
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <div class="bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-4">
              <h3 class="text-xl font-bold text-white flex items-center gap-2">
                ⚡ Live Demo
              </h3>
            </div>
            <div class="p-6">
              <slot name="demo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  icon: string
}>()
</script>

