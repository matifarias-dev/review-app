import { Roboto } from 'next/font/google'
const roboto = Roboto({ subsets: ['latin'] })

export const metadata = {
  title: 'Review App',
  description: 'App de reviews para comercios',
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
