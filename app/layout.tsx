import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ease the Error',
  description: 'Created by Fodse',
  generator: 'FODSE',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
       <link rel="icon" href="/logo.png" type="image/png" />
      <body>{children}</body>
    </html>
  )
}
