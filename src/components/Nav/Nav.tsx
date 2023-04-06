import React from 'react'
import { HambergerMenu } from 'iconsax-react'
import Link from 'next/link'

import Button from '../Elements/Button/Button'
import { ConnectButton } from '../ConnectButton/ConnectButton'
import styles from './Nav.module.css'

export const Nav: React.FC<{}> = () => {
    return (
        <nav className={`${styles.nav} flex align-items-center`}>
            <img
                src='logoBig.png'
                height={44}
                alt='Logo'
                className={styles['nav-title']}
            />
            <ul className={`flex align-items-center ${styles['navbar-nav']}`}>
                <li className={`${styles['nav-item']} ${styles.active}`}>
                    <Link href='/' className={styles['nav-link']}>
                        Home
                    </Link>
                </li>
                <li className={styles['nav-item']}>
                    <Link href='/mint' className={styles['nav-link']}>
                        Mint NFTs (Coming Soon)
                    </Link>
                </li>
            </ul>
            <div className={`flex ${styles['navbar-buttons']}`}>
                <ConnectButton />
            </div>
            <div className={styles['navbar-responsive-menu']}>
                <Button theme='transparent'>
                    <HambergerMenu size='32' color='var(--white-100)' />
                </Button>
            </div>
        </nav>
    )
}
