import type { ReactNode } from 'react'
import Header from './Header'

type Props = {
  children: ReactNode | ReactNode[]
}

export default function Layout({ children }: Props) {
  return (
    <>
      <script src="https://telegram.org/js/telegram-web-app.js"></script>
      <Header />
      <main>{children}</main>
    </>
  )
}
