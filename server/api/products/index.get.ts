// 🎯 DEMO POINT: Server API Route
// This runs on the server and can be accessed at /api/products

export default defineEventHandler((event) => {
  // Simulate database data
  const products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      category: 'electronics',
      price: 99.99,
      rating: 5,
      stock: 25,
      emoji: '🎧',
      description: 'Premium wireless headphones with noise cancellation and exceptional sound quality.'
    },
    {
      id: 2,
      name: 'Smart Watch',
      category: 'electronics',
      price: 299.99,
      rating: 4,
      stock: 15,
      emoji: '⌚',
      description: 'Advanced smartwatch with fitness tracking, heart rate monitor, and GPS.'
    },
    {
      id: 3,
      name: 'Coffee Maker',
      category: 'home',
      price: 79.99,
      rating: 5,
      stock: 30,
      emoji: '☕',
      description: 'Programmable coffee maker with thermal carafe and auto-brew feature.'
    },
    {
      id: 4,
      name: 'Yoga Mat',
      category: 'fitness',
      price: 29.99,
      rating: 4,
      stock: 50,
      emoji: '🧘',
      description: 'Non-slip yoga mat with extra cushioning for comfortable practice.'
    },
    {
      id: 5,
      name: 'Laptop Stand',
      category: 'electronics',
      price: 49.99,
      rating: 5,
      stock: 40,
      emoji: '💻',
      description: 'Ergonomic aluminum laptop stand with adjustable height and angle.'
    },
    {
      id: 6,
      name: 'Plant Pot',
      category: 'home',
      price: 19.99,
      rating: 4,
      stock: 60,
      emoji: '🪴',
      description: 'Modern ceramic plant pot with drainage hole and saucer.'
    },
    {
      id: 7,
      name: 'Running Shoes',
      category: 'fitness',
      price: 89.99,
      rating: 5,
      stock: 20,
      emoji: '👟',
      description: 'Lightweight running shoes with superior cushioning and support.'
    },
    {
      id: 8,
      name: 'Desk Lamp',
      category: 'home',
      price: 39.99,
      rating: 4,
      stock: 35,
      emoji: '💡',
      description: 'LED desk lamp with adjustable brightness and color temperature.'
    },
    {
      id: 9,
      name: 'Water Bottle',
      category: 'fitness',
      price: 24.99,
      rating: 5,
      stock: 100,
      emoji: '💧',
      description: 'Insulated stainless steel water bottle keeps drinks cold for 24 hours.'
    }
  ]

  // You could add query parameters here, e.g., filtering, pagination
  // const query = getQuery(event)

  return products
})


