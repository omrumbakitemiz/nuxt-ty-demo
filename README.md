# 🚀 Nuxt Interactive Demo

An innovative, self-documenting demo application that showcases Nuxt 4 features by displaying its own source code alongside live examples. Perfect for presentations and learning!

> **Built with Nuxt 4 Structure:** Uses the new Nuxt 4 directory structure where all application code lives inside the `app/` directory.

## 🌟 What Makes This Special

This isn't just a demo - it's an **interactive, self-documenting showcase** where:
- ✨ The app displays its own source code
- 🎨 Professional syntax highlighting with Shiki
- 🎯 Live demos run alongside code examples
- 🔄 Interactive examples let you try features
- 📱 Perfect for presentations - no IDE needed!

## ✨ Features Demonstrated

### 1. 📁 File-Based Routing
- View actual file structure in the UI
- Try dynamic routing interactively
- See how routes are created automatically

### 2. 🔥 Server API Routes
- See real API endpoint code
- Make live API calls from the UI
- Understand full-stack capabilities

### 3. ✨ Auto-Imports
- Compare code with/without imports
- Use auto-imported components live
- See composables in action

### 4. ⚡ SSR & Data Fetching
- View SSR code examples
- See data fetched on server
- Check page source to verify

### 5. 🎨 Layouts & Middleware
- Switch between different layouts
- Try middleware protection
- See authentication flow

### 6. 🧩 Component System
- View component code
- Modify props in real-time
- See reactive updates

## 🏗️ Project Structure

```
nuxt-ty-demo/
├── app/                         # Nuxt 4 app directory
│   ├── pages/
│   │   ├── index.vue           # Dashboard with feature cards
│   │   ├── features/           # Feature demonstration pages
│   │   │   ├── file-routing.vue
│   │   │   ├── server-api.vue
│   │   │   ├── auto-imports.vue
│   │   │   ├── ssr-data.vue
│   │   │   ├── layouts-middleware.vue
│   │   │   └── components.vue
│   │   ├── products/           # Example pages
│   │   │   ├── index.vue
│   │   │   └── [id].vue
│   │   ├── about.vue
│   │   └── admin/
│   │       └── index.vue
│   ├── components/
│   │   ├── CodeDisplay.vue     # Shows code with syntax highlighting
│   │   ├── FeatureLayout.vue   # Split-view layout for features
│   │   ├── Navbar.vue
│   │   └── ProductCard.vue
│   ├── composables/
│   │   ├── useCounter.ts
│   │   ├── useCurrentTime.ts
│   │   └── useAuthenticated.ts
│   ├── layouts/
│   │   ├── default.vue
│   │   ├── custom.vue
│   │   └── admin.vue
│   ├── middleware/
│   │   └── auth.ts
│   └── app.vue
└── server/
    └── api/
        └── products/
            ├── index.get.ts
            └── [id].get.ts
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm, yarn, or pnpm

### Installation & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser
# http://localhost:3000
```

## 📚 How to Use This Demo

### For Presentations (30-35 minutes):

1. **Start at Dashboard** (http://localhost:3000)
   - Show the feature cards
   - Explain the interactive approach

2. **Click through features in order:**
   - File-Based Routing (5 min)
   - Server API Routes (8 min)
   - Auto-Imports (4 min)
   - SSR & Data Fetching (8 min)
   - Layouts & Middleware (5 min)
   - Components (3 min - optional)

3. **Each feature page shows:**
   - Left side: Explanation + actual code
   - Right side: Live, interactive demo

4. **No IDE needed** - all code is displayed in the app!

### For Learning:

- Click any feature card on the dashboard
- Read the explanation
- Study the code examples
- Interact with the live demos
- Try modifying things

### For Teaching:

- Use in workshops or training sessions
- Students can follow along in their browsers
- Code examples are always visible
- Interactive demos reinforce concepts

## 🎯 Key Demo Sections

### Dashboard (`/`)
Overview of all features with navigation cards

### File Routing (`/features/file-routing`)
- Shows `app/pages/` file structure
- Interactive route testing
- Dynamic route examples

### Server API (`/features/server-api`)
- Displays API endpoint code
- Live API calls with responses
- Shows full-stack capabilities

### Auto-Imports (`/features/auto-imports`)
- Before/after code comparison
- Live counter using auto-imported composable
- Component without imports

### SSR & Data (`/features/ssr-data`)
- useFetch code example
- Live data fetching
- "View Page Source" demonstration

### Layouts & Middleware (`/features/layouts-middleware`)
- Layout switching examples
- Middleware authentication demo
- Different layout styles

### Components (`/features/components`)
- Component definition code
- Interactive prop modifications
- Live component updates

## 💡 Presentation Tips

### Before Starting:
- ✅ Ensure dev server is running
- ✅ Test all interactive features
- ✅ Set browser zoom to 110-125%
- ✅ Close unnecessary tabs
- ✅ Have presentation guide open

### During Presentation:
- **Navigate through the app** - click the links
- **Use interactive demos** - try the features
- **Read code on screen** - explain what it does
- **Engage audience** - ask them to predict outcomes

### Navigation Flow:
```
Dashboard → Features (in order) → Back to Dashboard → Q&A
```

## 🆚 Comparison with Other Frameworks

| Feature | Vue | React | Next.js | **Nuxt** |
|---------|-----|-------|---------|----------|
| File Routing | ❌ | ❌ | ✅ | ✅ |
| Auto-imports | ❌ | ❌ | ❌ | ✅ |
| Server API | ❌ | ❌ | ⚠️ Limited | ✅ Full |
| SSR Setup | ⚠️ Hard | ⚠️ Hard | ✅ Easy | ✅ Easy |
| Data Fetching | ⚠️ Manual | ⚠️ Manual | ⚠️ OK | ✅ Great |
| Self-Documenting | ❌ | ❌ | ❌ | ✅ This demo! |

## 🛠️ Technologies Used

- **Nuxt 4** - Full-stack Vue framework
- **Vue 3** - Progressive JavaScript framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Shiki** - VS Code-quality syntax highlighting

## 📖 Documentation

- [PRESENTATION_GUIDE.md](./PRESENTATION_GUIDE.md) - Detailed presentation walkthrough
- [CHEAT_SHEET.md](./CHEAT_SHEET.md) - Quick reference for presenting
- [NUXT4_MIGRATION_NOTES.md](./NUXT4_MIGRATION_NOTES.md) - Nuxt 4 structure info
- [SYNTAX_HIGHLIGHTING_FEATURES.md](./SYNTAX_HIGHLIGHTING_FEATURES.md) - Code display features

## 🎓 Perfect For:

- **Team presentations** - Show Nuxt capabilities
- **Tech talks** - Interactive demonstrations
- **Training sessions** - Teach Nuxt concepts
- **Learning** - Explore Nuxt by yourself
- **Evaluation** - Test Nuxt for your project

## 🚢 Deployment

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

Deploy to:
- Vercel (one-click deployment)
- Netlify
- AWS
- Your own Node.js server

## 🤝 Contributing

This is a demo project, but feel free to:
- Use it for your own presentations
- Modify it for your needs
- Share it with your team
- Create your own versions

## 📝 License

MIT

---

## 🎉 What's Next?

1. **Run the demo:** `npm run dev`
2. **Open:** http://localhost:3000
3. **Click through features**
4. **Read [PRESENTATION_GUIDE.md](./PRESENTATION_GUIDE.md)**
5. **Practice your presentation**
6. **Wow your audience!**

---

**Built with ❤️ to showcase the power of Nuxt 4**

For questions or issues, check the [Nuxt documentation](https://nuxt.com) or explore the code!
