# Clauso

AI-powered contract management for freelancers and small teams. Generate, sign, and archive NDAs, client contracts, and mission letters from lawyer-validated templates — no legal team required.

## ✨ Features

- **Smart Contract Generation** — Create NDAs, client contracts, and mission letters from vetted templates in under 2 minutes
- **E-signature Integration** — Sign and collect signatures digitally without leaving the app
- **Secure Archive** — All contracts stored and searchable forever
- **Template Library** — Lawyer-validated templates for common freelance use cases
- **Multi-profile Support** — Tailored workflows for solo freelancers, studios, and agencies
- **Real-time Collaboration** — Share and track contract status with clients

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Database & Auth:** Supabase
- **Deployment:** Vercel

## 🚀 Quick Start

### Prerequisites

- **Node.js 18+** — [Download here](https://nodejs.org/)
- **A code editor** — We recommend [VS Code](https://code.visualstudio.com/) with the Tailwind CSS IntelliSense extension
- **Git** — [Install guide](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- **A Supabase account** — [Sign up free](https://supabase.com/)

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/clauso.git
cd clauso
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a file named `.env.local` in the **root folder** of the project (same level as `package.json`). This file stores secrets that your app needs to connect to external services.

> 💡 **What is a .env.local file?** It's a configuration file where you store sensitive information (like API keys and passwords) that shouldn't be committed to Git. Think of it as a notepad your app reads on startup to know how to connect to databases and services.

Create `.env.local` and paste this template:

```env
# Supabase Configuration
# Find these in: Supabase Dashboard > Project Settings > API
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

#### Where to find your Supabase credentials:

1. Go to [supabase.com](https://supabase.com) and sign in
2. Select your project (or create a new one)
3. Click **Project Settings** (gear icon in the sidebar)
4. Click **API** in the top tabs
5. Copy the **Project URL** and paste it as `NEXT_PUBLIC_SUPABASE_URL`
6. Copy the **anon/public** key and paste it as `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### 4. Run the development server

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

> 💡 **VS Code tip:** Open the integrated terminal with `Ctrl+`` (Windows/Linux) or `Cmd+`` (Mac) — then type `npm run dev` and press Enter.

## 🔑 Environment Variables

| Variable | Required | Where to find it | Description |
|----------|----------|------------------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Yes | Supabase Dashboard > Project Settings > API > Project URL | Your Supabase project endpoint |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Yes | Supabase Dashboard > Project Settings > API > anon/public key | Public API key for client-side queries |

## 📁 Project Structure

```
clauso/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Landing page
│   │   ├── layout.tsx         # Root layout
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── ui/                # Reusable UI components (Navbar, Cards, etc.)
│   │   └── sections/          # Page sections (Hero, Pricing, FAQ, etc.)
│   └── lib/
│       ├── utils.ts           # Utility functions (cn helper)
│       ├── data.ts            # Static data (testimonials, features)
│       └── supabase/          # Supabase client and server utilities
├── public/                     # Static assets
├── tailwind.config.ts         # Tailwind configuration
├── next.config.mjs            # Next.js configuration
└── package.json              # Dependencies and scripts
```

## 🚀 Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Step by step:

1. **Push your code to GitHub** (if you haven't already):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/clauso.git
   git push -u origin main
   ```

2. **Import to Vercel:**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click **Import Git Repository**
   - Select your GitHub repo (`clauso`)

3. **Add environment variables in Vercel:**
   - In the Vercel dashboard, go to **Settings > Environment Variables**
   - Add `NEXT_PUBLIC_SUPABASE_URL` with your Supabase Project URL
   - Add `NEXT_PUBLIC_SUPABASE_ANON_KEY` with your Supabase anon key
   - Make sure **Production**, **Preview**, and **Development** are all checked

4. **Deploy:**
   - Click **Deploy** — Vercel will automatically detect Next.js and deploy
   - Your site will be live at `https://your-project.vercel.app`

> ⚠️ **Important:** Add ALL environment variables from the `.env.local` file to Vercel before deploying, otherwise the app will crash.

## 📝 License

MIT License — feel free to use, modify, and distribute for personal or commercial projects.