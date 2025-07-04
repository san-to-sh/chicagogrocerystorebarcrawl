# Chicago Grocery Store Bar Crawl (React)

A modern React web app for chicagogrocerystorebarcrawl.com — showcasing unique bar crawl experiences through Chicago's local markets and craft beverage establishments.

## 🚀 Features
- **Modern React (Vite) Frontend**: Fast, modular, and easy to maintain
- **Beautiful Dark Theme**: Clean, accessible, and visually appealing
- **Responsive Design**: Works great on all devices
- **Interactive Roadmap**: Custom SVG roadmap with icons and stops
- **Fun, Playful UI**: Emojis, bold typography, and a friendly tone
- **No Backend**: This repo is now frontend-only (FastAPI backend removed)

## 🛠️ Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm (comes with Node.js)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/san-to-sh/chicagogrocerystorebarcrawl.git
   cd chicagogrocerystorebarcrawl
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and visit [http://localhost:5173](http://localhost:5173)

## 🏗️ Project Structure
```
chicagogrocerystorebarcrawl/
├── public/                # Static assets
├── src/                   # React source code
│   ├── App.jsx            # Main app component
│   ├── index.css          # Global styles (dark theme)
│   └── ...                # Other components
├── package.json           # Project metadata & scripts
├── vite.config.js         # Vite configuration
└── README.md              # This file
```

## 📦 Scripts
- `npm run dev` — Start local dev server
- `npm run build` — Build for production
- `npm run preview` — Preview production build

## 🌐 Deployment
You can deploy this app to any static hosting provider (Vercel, Netlify, GitHub Pages, Railway, etc.).

### Example: Vercel
1. Push your repo to GitHub
2. Import the repo in [Vercel](https://vercel.com/)
3. Vercel auto-detects Vite/React and deploys instantly

### Example: Railway
1. Connect your GitHub repo in Railway
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy!

## 🎨 Customization
- Edit `src/App.jsx` and `src/index.css` for layout, colors, and content
- All text, stops, and roadmap visuals are easy to update
- Uses [Inter](https://rsms.me/inter/) font for a modern look

## 🗑️ Migration Note
This repo previously included a FastAPI backend. All backend code, templates, and Python dependencies have been removed. This is now a React-only project.

## 🤝 Contributing
Pull requests and issues welcome! Please open an issue or PR for suggestions, bugs, or improvements.

## 📄 License
MIT
