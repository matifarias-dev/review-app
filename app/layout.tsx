import { Roboto } from 'next/font/google'
const roboto = Roboto({ subsets: ['latin'] })

export const metadata = {
  title: 'Review App',
  description: 'App de reviews para comercios',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
