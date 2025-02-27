import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import { Toaster } from "react-hot-toast"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Portfolio | Full Stack Developer",
  description: "Personal portfolio website showcasing full stack development projects and skills",
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <Toaster toastOptions={{
            duration: 4000
          }} />
        </ThemeProvider>
      </body>
    </html>
  )
}

