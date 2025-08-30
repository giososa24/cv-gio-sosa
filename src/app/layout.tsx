'use client'
import { ReactNode } from 'react'
import './globals.css'
import ThemeSwitcher from './ThemeSwitcher'

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => (
  <html lang="es" className="dark">
    <head>
      <script
        dangerouslySetInnerHTML={{
          __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (theme === 'dark' || (!theme && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch(e) {}
              })();
            `,
        }}
      />
    </head>
    <body>
      <main className="h-screen px-4 py-4">
        <ThemeSwitcher />
        {children}
      </main>
    </body>
  </html>
)

export default RootLayout
