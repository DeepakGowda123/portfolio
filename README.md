# 💻 Deepak A S – Backend Developer Portfolio  
> A minimalist, terminal-themed portfolio reflecting my system design mindset and backend engineering principles.

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-Fast%20Builds-yellow?logo=vite)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)
![License: MIT](https://img.shields.io/badge/License-MIT-green)

---

### 🔗 **Live Site**
👉 [https://deepak-a-s.vercel.app/](https://deepak-a-s.vercel.app/)

---

## 🎯 About This Project

This portfolio represents my approach to building systems — clean, functional, and thoughtfully designed.  
Built with a developer-first aesthetic featuring terminal-style interfaces and system monitoring themes that reflect my backend engineering mindset.

---

## ✨ Features

- **Terminal-Inspired Hero Section** with typing animations  
- **System Architecture Visualizations** for projects  
- **Interactive Skill Components** with hover effects and animations  
- **Timeline-Based Experience Section** for professional journey  
- **API Response-Style Contact Section** with real-time status indicators  
- **Fully Responsive Design** optimized for all devices  
- **Dark Mode Theme** with cyan/blue accent colors  

---

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 + TypeScript  
- **Build Tool**: Vite  
- **Styling**: Tailwind CSS  
- **UI Components**: shadcn/ui  
- **Icons**: Lucide React  
- **Deployment**: Vercel  
- **Version Control**: Git & GitHub  

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)  
- npm or yarn  

### Installation

```bash
# 1️⃣ Clone the repository
git clone https://github.com/DeepakGowda123/portfolio.git

# 2️⃣ Navigate to project directory
cd portfolio

# 3️⃣ Install dependencies
npm install

# 4️⃣ Run the development server
npm run dev
Then open http://localhost:5173 in your browser 🚀

📁 Project Structure
php
Copy code
portfolio/
├── src/
│   ├── components/
│   │   ├── Hero.tsx           # Landing section with terminal animation
│   │   ├── About.tsx          # Professional background
│   │   ├── Skills.tsx         # Technical skills showcase
│   │   ├── Experience.tsx     # Work experience timeline
│   │   ├── Projects.tsx       # Featured projects
│   │   └── Contact.tsx        # Contact information
│   ├── pages/
│   │   └── Index.tsx          # Main page layout
│   ├── App.tsx                # Root component
│   └── index.css              # Global styles & theme
├── public/                    # Static assets
└── README.md
🎨 Customization
🧩 Add New Projects
Edit src/components/Projects.tsx and update the projects array:

typescript
Copy code
{
  id: "project-id",
  title: "Project Name",
  tagline: "Brief description",
  emoji: "🚀",
  description: "Detailed description...",
  tech: ["Tech1", "Tech2"],
  highlights: ["Achievement 1", "Achievement 2"],
  architecture: ["Component1", "Component2"],
  icon: YourIcon,
  gradient: "from-blue-500 to-cyan-500",
  status: "Production",
  github: "github-url",
  demo: "demo-url"
}
💼 Add Experience
Edit src/components/Experience.tsx and update the experiences array:

typescript
Copy code
{
  id: "experience-id",
  role: "Job Title",
  company: "Company Name",
  location: "Location",
  duration: "Start – End",
  isActive: false,
  achievements: [...],
  technologies: [...],
  gradient: "from-purple-500 to-pink-500"
}
📦 Build for Production
bash
Copy code
npm run build
The optimized build output will be in the dist directory.

🌐 Deployment
This project is automatically deployed to Vercel whenever you push to the main branch.
✅ Vercel builds → deploys → updates your live site within minutes.

🧠 Design Philosophy
This portfolio embodies my approach as a backend engineer:

Terminal Aesthetics — reflects my comfort with command-line environments

System Thinking — architecture diagrams mirror backend structures

Clean Code — minimal, maintainable component structure

Performance First — optimized animations and quick load times

📫 Contact
📧 Email: deepak.gowda1215@gmail.com

💼 LinkedIn: Deepak A S

💻 GitHub: DeepakGowda123

🌐 Portfolio: https://deepak-a-s.vercel.app

📄 License
MIT License — free to use, modify, and share with credit.

Built with ❤️ by Deepak A S
Backend Engineer | MCA Graduate from PES University

“Give me a system, and I'll figure it out.”