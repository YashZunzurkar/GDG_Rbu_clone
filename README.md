# GDG RBU Frontend Task 🚀

A fully responsive, pixel-accurate implementation of the Google Developer Groups (GDG) Ramdeobaba University website, built exactly from the provided Figma design using React, Vite, and Tailwind CSS.

![Project Screenshot](https://via.placeholder.com/1200x600.png?text=GDG+Frontend+Screenshot)

🔗 **[Live Demo on Vercel](#)** *(Add your Vercel URL here)*

## 🛠 Tech Stack
- **Framework:** React 19 (via Vite)
- **Styling:** Tailwind CSS v4 (Strictly Tailwind, no UI libraries)
- **Icons:** Lucide React
- **Additional Features:** Gemini AI API (for the Ask AI feature)

## ✨ Features
- **Pixel-Accurate Design:** Implemented neo-brutalism design system with exact fonts, colors, and shadows matching the Figma.
- **Fully Responsive:** Mobile-first design that scales perfectly across mobile (<640px), tablet, and desktop. Includes a collapsing hamburger menu.
- **Dark/Light Mode:** Toggleable theme that saves to `localStorage` and respects system preferences on first load.
- **Smooth Animations:** Simple hover scaling, drop shadows, and page transitions for a modern feel.
- **AI Chat Assistant (Bonus):** A floating chatbot powered by the Gemini API that answers questions about GDG RBU.
- **Clean Architecture:** Semantic HTML, functional components, hooks, and clean file structure.

## 📂 Project Structure
```text
src/
├── assets/          # Images, logos, and SVGs
├── components/      # Reusable React components
│   ├── AIChat.jsx
│   ├── FAQ.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── MeetTeam.jsx
│   ├── Navbar.jsx
│   └── UpcomingEvents.jsx
├── hooks/           # Custom React hooks
│   └── useTheme.js
├── App.jsx          # Main application assembly
├── main.jsx         # Entry point
└── index.css        # Tailwind directives and custom theme variables
```

## 🚀 Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/gdg-frontend-task.git
   cd gdg-frontend-task
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure the AI Feature (Environment Variables):**
   Copy the example environment file and add your Gemini API key:
   ```bash
   cp .env.example .env
   # Open .env and set VITE_GEMINI_API_KEY=your_actual_key
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

5. **Build for production:**
   ```bash
   npm run build
   ```

## 🌐 Deployment (Vercel)
This project is configured to be easily deployed on Vercel.

**Steps to deploy:**
1. Push your code to GitHub (see below).
2. Go to [Vercel](https://vercel.com/) and click "Add New Project".
3. Import your GitHub repository.
4. Set the Framework Preset to **Vite**.
5. Add the `VITE_GEMINI_API_KEY` to the **Environment Variables** section.
6. Click **Deploy**.

## 💻 Git Commands to Push to GitHub
```bash
# Initialize git (if not already done)
git init

# Add all files to staging
git add .

# Commit changes
git commit -m "Initial commit: Completed GDG Frontend Task"

# Create a new branch (main)
git branch -M main

# Link your repository (Replace URL with your actual repo link)
git remote add origin https://github.com/your-username/gdg-frontend-task.git

# Push to GitHub
git push -u origin main
```
