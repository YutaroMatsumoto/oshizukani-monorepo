import React from 'react'
// import { Footer } from "src/components/organisms/Footer";
import { Header } from 'src/components/organisms/Header'
import styles from 'src/styles/Home.module.css'
import Image from 'next/image'

type Props = {
  test?: string
}

export const BaseTemplate = ({ children }: React.PropsWithChildren<Props>) => {
  return (
    <div className="h-full bg-gray10">
      <Header />
      <div className="pt-16 h-full">{children}</div>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
