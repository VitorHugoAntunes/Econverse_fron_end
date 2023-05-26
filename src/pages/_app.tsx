import type { AppProps } from 'next/app'

import '../styles/global.scss'
import styles from '../styles/app.module.scss'
import { ModalProvider } from '@/contexts/ModalContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.wrapper}>
      <ModalProvider>
        <Component {...pageProps} />
      </ModalProvider>
    </div>
  )
}
