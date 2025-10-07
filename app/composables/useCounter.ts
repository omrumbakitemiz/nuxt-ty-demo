// 🎯 DEMO: Auto-imported composable
// This file is automatically available everywhere without importing!

export const useCounter = (initialValue = 0) => {
  const count = ref(initialValue)

  const increment = () => count.value++
  const decrement = () => count.value--
  const reset = () => count.value = initialValue

  return {
    count: readonly(count),
    increment,
    decrement,
    reset
  }
}

