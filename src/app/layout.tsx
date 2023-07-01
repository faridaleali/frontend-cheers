import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cheers - The real fried chicken',
  description: 'Matando el bajón desde 2019',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <menu className="menu">
            
          </menu>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
