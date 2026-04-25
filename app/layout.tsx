import { Geist_Mono, Roboto } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { NavigationBar } from "@/components/layout/nav-bar"

const roboto = Roboto({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", roboto.variable)}
    >
      <body>
        <ThemeProvider>
          <header className="bg-gray-500">
            <h1>Kyle Grenier</h1>
            <p>Immersive Technology and Game Developer</p>
          </header>
          <NavigationBar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
