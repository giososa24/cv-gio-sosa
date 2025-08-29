'use client'
import { ReactNode } from 'react'
import './globals.css'

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => (
  <html lang="es" className="dark">
    <body>
      <main className="h-screen px-4 py-4">{children}</main>
    </body>
  </html>
)

export default RootLayout
