import './globals.css'
import { Nunito } from 'next/font/google'



const font = Nunito({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '700'],
})


export const metadata = {
  title: 'AI Landing Page',
  description: 'AI Landing Page - Генератор лендингов на основе AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
