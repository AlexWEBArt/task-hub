import { SITE_NAME } from "@/constants"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Providers } from "./Providers"
import "./globals.css"

const font = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  icons: {
    icon: '/taskList.svg',
    shortcut: '/taskList.svg'
  },
  title: {
    absolute: SITE_NAME,
    template: `%s | ${SITE_NAME}`
  },
  description: "Сomplete tasks and live freely",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${font.variable} antialiased`}
      >
        <Providers>
          {
            children
          }
        </Providers>
      </body>
    </html>
  )
}
