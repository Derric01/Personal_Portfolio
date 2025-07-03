# Derric Samson Portfolio

A modern, responsive portfolio website built with Vue.js 3, shadcn/vue, and Tailwind CSS v4. Features dynamic GitHub repository integration and showcases my work as a full-stack developer.

## 🌟 Features

- **Modern Design**: Clean, professional interface with dark/light mode support
- **Dynamic GitHub Integration**: Automatically fetches and displays all public repositories from GitHub
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Subtle animations and transitions for enhanced user experience
- **Fast Performance**: Built with Vite for optimal loading speeds
- **SEO Optimized**: Meta tags and semantic HTML for better search engine visibility
- **Accessible**: WCAG compliant design with proper ARIA labels

## 🚀 Live Demo

Visit the live portfolio: [https://derric-samson.vercel.app/](https://derric-samson.vercel.app/)

## 🛠️ Tech Stack

- **Frontend**: Vue.js 3 with Composition API
- **Styling**: Tailwind CSS v4 with OKLCH colors
- **UI Components**: shadcn/vue
- **Build Tool**: Vite
- **Icons**: Lucide Vue Next
- **Routing**: Vue Router
- **TypeScript**: Full TypeScript support

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/          # Reusable components
│   │   ├── ui/             # shadcn/vue components
│   │   ├── Navbar.vue      # Navigation component
│   │   └── ProjectCard.vue # Repository card component
│   ├── views/              # Page components
│   │   ├── Home.vue        # Landing page
│   │   ├── About.vue       # About page
│   │   ├── Projects.vue    # Projects showcase
│   │   └── Contact.vue     # Contact form
│   ├── lib/                # Utility functions
│   │   ├── utils.ts        # General utilities
│   │   └── github.ts       # GitHub API integration
│   ├── styles/             # Styles
│   │   └── index.css       # Global styles with Tailwind
│   ├── App.vue             # Root component
│   └── main.ts             # Application entry point
├── public/                 # Static assets
├── components.json         # shadcn/vue configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.ts          # Vite configuration
└── package.json            # Dependencies and scripts
```

## 🔧 Installation & Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/Derric01/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 🔌 GitHub API Integration

The portfolio automatically fetches repositories from the GitHub API without requiring authentication for public repositories.

### Features

- **Automatic Fetching**: Retrieves all public repositories from github.com/Derric01
- **Pagination Support**: Handles multiple pages of repositories (up to 300 repos)
- **Filtering & Sorting**: Filter by language and sort by stars, name, or last updated
- **Rate Limiting**: Graceful handling of API rate limits
- **Caching**: Efficient caching to minimize API calls

### Optional: Personal Access Token

For enhanced functionality (accessing private repositories where you're a collaborator), you can add a GitHub Personal Access Token:

1. **Create a Personal Access Token**
   - Go to GitHub Settings > Developer settings > Personal access tokens
   - Generate a new token with `repo` scope

2. **Add to Environment Variables**
   Create a `.env.local` file:
   ```env
   VITE_GITHUB_TOKEN=your_personal_access_token_here
   ```

3. **Update GitHub API calls**
   The application will automatically use the token if available.

### API Endpoints Used

- `GET /users/Derric01/repos` - Fetch public repositories
- Repository data includes: name, description, language, stars, forks, topics, and more

## 🎨 Customization

### Theming

The portfolio uses Tailwind CSS v4 with custom OKLCH colors:

- **Primary**: OKLCH equivalent of RGB(0, 79, 144)
- **Accent**: Vibrant teal (OKLCH(0.6 0.15 180))
- **Typography**: Source Sans Pro

### Adding New Sections

1. Create a new Vue component in `src/views/`
2. Add the route in `src/main.ts`
3. Update the navigation in `src/components/Navbar.vue`

### Modifying GitHub Integration

Edit `src/lib/github.ts` to:
- Change the GitHub username
- Modify filtering logic
- Add new repository metadata
- Adjust pagination settings

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository to Vercel**
2. **Configure build settings:**
   - Build Command: `npm run build`
   - Output Directory: `dist`

### GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add deployment script to package.json**
   ```json
   {
     "scripts": {
       "deploy": "npm run build && gh-pages -d dist"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

### Netlify

1. **Connect your repository to Netlify**
2. **Configure build settings:**
   - Build Command: `npm run build`
   - Publish Directory: `dist`

## 🔧 Environment Variables

Create a `.env.local` file for environment-specific configurations:

```env
# Optional: GitHub Personal Access Token
VITE_GITHUB_TOKEN=your_token_here

# API Configuration
VITE_GITHUB_USERNAME=Derric01
VITE_MAX_REPOS_PAGES=3
```

## 📱 Browser Support

- Chrome 111+
- Firefox 128+
- Safari 16.4+
- Edge 111+

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Derric Samson**
- Email: derricsamson17@gmail.com
- GitHub: [@Derric01](https://github.com/Derric01)
- LinkedIn: [derric-samson](https://linkedin.com/in/derric-samson)

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide](https://lucide.dev/) for the icon set
- [Vue.js](https://vuejs.org/) for the progressive framework
- [Vite](https://vitejs.dev/) for the fast build tool

---

⭐ If you found this portfolio helpful, please consider giving it a star on GitHub!
