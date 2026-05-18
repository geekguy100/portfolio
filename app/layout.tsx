import { Geist_Mono, Roboto } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { SiteHeader } from "./_layout/site-header"
import { TooltipProvider } from "@/components/ui/tooltip"

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
      <body className="m-6">
        <TooltipProvider>
          <ThemeProvider>
            <SiteHeader />
            <main>{children}</main>
          </ThemeProvider>
        </TooltipProvider>
      </body>
    </html>
  )
}
