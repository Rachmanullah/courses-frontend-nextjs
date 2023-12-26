import Footer from '@/component/layouts/footer';
import NavbarComponent from '@/component/layouts/navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Lato } from 'next/font/google'
import Head from 'next/head';
const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      </Head>
      <NavbarComponent />
      <div className={lato.className}>
        <Component {...pageProps} />
      </div>
      <Footer/>
    </>
  )
}
