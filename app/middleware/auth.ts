// 🎯 DEMO POINT: Route Middleware
// This runs before accessing protected pages

export default defineNuxtRouteMiddleware((to, from) => {
  const isAuthenticated = useAuthenticated()

  // Check if user is authenticated
  if (!isAuthenticated.value) {
    // Show a prompt to "login"
    if (process.client) {
      const shouldLogin = confirm(
        '🔐 This page requires authentication.\n\n' +
        'This is a demo, so there\'s no real login system.\n' +
        'Click OK to simulate logging in and access the admin area.'
      )

      if (shouldLogin) {
        isAuthenticated.value = true
        // Allow navigation to continue
        return
      } else {
        // Redirect to home if they cancel
        return navigateTo('/')
      }
    }
  }
})


