import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import { Web3Provider } from '@/providers/Web3'
import { Layout } from '@/components/Layout/Layout'
import '../styles/style.css'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Web3Provider>
            <Layout>
                <>
                    <Component {...pageProps} />
                    <ToastContainer />
                </>
            </Layout>
        </Web3Provider>
    )
}
