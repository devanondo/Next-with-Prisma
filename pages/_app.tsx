import Layout from '@/components/Layout';
import LoginModal from '@/components/models/LoginModal';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <LoginModal />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}
