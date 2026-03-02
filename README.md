# 🚀 Reimagined CV - Giovanni Sosa

A premium, high-performance personal CV built with modern web technologies, featuring a dark/light mode, internationalization (ES/EN), and a sleek design inspired by modern development tools.

## ✨ Features

- 🌓 **Dynamic Theming**: Smooth transition between Dark and Light modes.
- 🌍 **Internationalization**: Full support for Spanish and English using `i18next`.
- 📱 **Fully Responsive**: Optimized for all devices from mobile to large desktops.
- ⚡ **Performance**: Built with Next.js (App Router) for ultimate speed.
- 🎨 **Modern Aesthetics**: Glassmorphism effects, custom scrollbars, and fluid animations.
- 🐳 **Dockerized**: Ready for containerized deployment.
- 🤖 **CI/CD**: Automated deployment to CapRover via GitHub Actions.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Localization**: [i18next](https://www.i18next.com/)
- **Icons/Visuals**: Custom CSS & Lucide patterns.
- **Infrastructure**: Docker, GitHub Actions, CapRover.

## 📦 Architecture Patterns

The project follows clean code principles and modern architectural patterns:

- **Layered Arch**: Separation of data (services), types, and presentation.
- **Dynamic Data**: Localized data files for easy maintenance.
- **Component-Based**: Reusable and atomic UI components.

## 🚀 Getting Started

### Local Development

1. **Clone the repository**:

   ```bash
   git clone https://github.com/giososa24/cv-reimagined.git
   ```

2. **Install dependencies**:

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

### Docker

You can run the project using Docker:

```bash
docker build -t giososa-cv .
docker run -p 3000:3000 giososa-cv
```

## 🚢 Deployment

This project is configured to be deployed automatically to a **CapRover** instance.

1. Updates are pushed to the `main` branch.
2. **GitHub Actions** triggers the build.
3. A Docker image is built and pushed to **ghcr.io**.
4. The image is automatically deployed to the CapRover cluster.

---

Built with ❤️ by [Giovanni Sosa](https://github.com/giososa24)
