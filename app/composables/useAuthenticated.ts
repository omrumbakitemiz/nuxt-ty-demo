// 🎯 DEMO POINT: Global state composable (auto-imported)
// This simulates authentication state management

export const useAuthenticated = () => {
  // In a real app, this would check a token, cookie, or session
  return useState<boolean>('authenticated', () => false)
}


