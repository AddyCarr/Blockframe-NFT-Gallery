import Head from 'next/head'

import { ContainerCard } from '../ContainerCard/ContainerCard'
import { Nav } from '../Nav/Nav'
import styles from './Layout.module.css'

type LayoutProps = {
    children: JSX.Element
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Head>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                 <link rel='icon' href='/favicon.ico' />
            </Head>
            <ContainerCard className={styles.wrapper}>
                <Nav />
            </ContainerCard>
            {children}
        </>
    )
}