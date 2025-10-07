// 🎯 DEMO POINT: Auto-imported Composable
// This file is automatically available in all components without importing!

export const useCurrentTime = () => {
  const time = ref(new Date().toLocaleTimeString())

  // Update time every second
  if (process.client) {
    setInterval(() => {
      time.value = new Date().toLocaleTimeString()
    }, 1000)
  }

  return time
}


