<template>
  <div class="bg-gray-900 rounded-lg overflow-hidden shadow-xl relative group">
    <!-- Header with filename -->
    <div class="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
      <div class="flex items-center gap-2">
        <div class="flex gap-1.5">
          <div class="w-3 h-3 rounded-full bg-red-500"></div>
          <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div class="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span class="text-gray-300 text-sm font-mono ml-3">{{ filename }}</span>
      </div>
      <div class="flex items-center gap-2">
        <span v-if="showLineNumbers" class="text-gray-500 text-xs">
          {{ lineCount }} lines
        </span>
        <button
          @click="copyCode"
          class="text-gray-400 hover:text-white text-sm px-3 py-1 rounded hover:bg-gray-700 transition flex items-center gap-2"
          :class="{ 'text-green-400': copied }"
        >
          <span v-if="copied">✓ Copied!</span>
          <span v-else>📋 Copy</span>
        </button>
      </div>
    </div>

    <!-- Code content -->
    <div class="overflow-x-auto max-h-[600px] overflow-y-auto code-container">
      <div v-if="isLoading" class="p-4 text-gray-400 text-sm flex items-center gap-2">
        <div class="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-400"></div>
        Loading syntax highlighting...
      </div>
      <div
        v-else
        v-html="highlightedCode"
        class="syntax-highlighted"
        :class="{ 'with-line-numbers': showLineNumbers }"
      />
    </div>

    <!-- Fade overlay for long code -->
    <div
      v-if="isCollapsed && lineCount > maxLines"
      class="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none"
    />

    <!-- Expand/Collapse button for long code -->
    <button
      v-if="lineCount > maxLines"
      @click="toggleCollapse"
      class="absolute bottom-2 right-2 bg-gray-800 hover:bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded transition z-10"
    >
      {{ isCollapsed ? '▼ Show more' : '▲ Show less' }}
    </button>
  </div>
</template>

<script setup lang="ts">
import type { BundledLanguage, BundledTheme } from 'shiki'

const props = withDefaults(defineProps<{
  code: string
  language?: string
  filename?: string
  showLineNumbers?: boolean
  maxLines?: number
}>(), {
  showLineNumbers: true,
  maxLines: 20
})

const copied = ref(false)
const highlightedCode = ref('')
const isLoading = ref(true)
const isCollapsed = ref(true)

const { highlightCode } = useCodeHighlight()

// Calculate line count
const lineCount = computed(() => props.code.split('\n').length)

// Highlight code on mount and when props change
onMounted(async () => {
  await updateHighlighting()
})

watch(() => [props.code, props.language], async () => {
  await updateHighlighting()
})

const updateHighlighting = async () => {
  isLoading.value = true
  const lang = (props.language || 'typescript') as BundledLanguage
  const theme: BundledTheme = 'github-dark'
  highlightedCode.value = await highlightCode(props.code, lang, theme)
  isLoading.value = false
}

const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(props.code)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}

const toggleCollapse = () => {
  isCollapsed.value = !isCollapsed.value
}
</script>

<style>
/* Shiki generates its own styles, but we need to override some for better display */
.syntax-highlighted pre {
  margin: 0;
  padding: 1rem;
  background: transparent !important;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace;
  font-size: 0.875rem;
  line-height: 0.8;
  overflow-x: auto;
}

.syntax-highlighted code {
  font-family: inherit;
  background: transparent !important;
  counter-reset: line;
}

/* Line numbers */
.syntax-highlighted.with-line-numbers code .line::before {
  counter-increment: line;
  content: counter(line);
  display: inline-block;
  width: 2.5rem;
  margin-right: 1.5rem;
  text-align: right;
  color: #6b7280;
  user-select: none;
  padding-right: 1rem;
  border-right: 1px solid #374151;
}

/* Ensure code wraps nicely */
.syntax-highlighted pre code {
  white-space: pre;
  word-wrap: normal;
}

.syntax-highlighted code .line {
  display: block;
  line-height: 0.8;
}

/* Better scrollbar for code blocks */
.syntax-highlighted pre::-webkit-scrollbar,
.code-container::-webkit-scrollbar {
  height: 8px;
  width: 8px;
}

.syntax-highlighted pre::-webkit-scrollbar-track,
.code-container::-webkit-scrollbar-track {
  background: #1f2937;
  border-radius: 4px;
}

.syntax-highlighted pre::-webkit-scrollbar-thumb,
.code-container::-webkit-scrollbar-thumb {
  background: #4b5563;
  border-radius: 4px;
}

.syntax-highlighted pre::-webkit-scrollbar-thumb:hover,
.code-container::-webkit-scrollbar-thumb:hover {
  background: #6b7280;
}

/* Smooth collapse animation */
.code-container {
  transition: max-height 0.3s ease;
}

/* Hover effect on code block */
.group:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2);
}
</style>

