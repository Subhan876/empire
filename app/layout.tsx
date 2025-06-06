import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"
import { SplashScreen } from "@/components/splash-screen"
import { Logo } from "@/components/logo"
import { CustomCursor } from "@/components/custom-cursor"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Clothing Store",
  description: "Modern clothing store built with Next.js and TailwindCSS",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen bg-background">
            <SplashScreen />
            <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none">
              <Logo />
            </div>
            {children}
            <footer className="w-full py-8 px-4 bg-dark-800 text-gray-400 border-t border-dark-600">
              <div className="container mx-auto text-center">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-200 mb-2">SDFM 2520</h3>
                  <p className="text-sm">Premium streetwear for the modern lifestyle</p>
                </div>
                <div className="flex justify-center space-x-6 mb-4 text-sm">
                  <a href="#" className="hover:text-white transition-colors">About</a>
                  <a href="#" className="hover:text-white transition-colors">Contact</a>
                  <a href="#" className="hover:text-white transition-colors">Privacy</a>
                  <a href="#" className="hover:text-white transition-colors">Terms</a>
                </div>
                <p className="text-xs">&copy; 2024 SDFM 2520. All rights reserved.</p>
              </div>
            </footer>
            <CustomCursor />
          </main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}