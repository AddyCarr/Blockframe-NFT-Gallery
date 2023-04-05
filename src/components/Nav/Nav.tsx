import React from 'react'
import { HambergerMenu } from 'iconsax-react'

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
                    <a href='' className={styles['nav-link']}>
                        Home
                    </a>
                </li>
                <li className={styles['nav-item']}>
                    <a href='' className={styles['nav-link']}>
                        Mint NFTs
                    </a>
                </li>
                <li className={styles['nav-item']}>
                    <a href='' className={styles['nav-link']}>
                        NFT Social Graph
                    </a>
                </li>
                <li
                    className={`${styles['nav-item']} ${styles['d-none-1100']}`}
                >
                    <a href='' className={styles['nav-link']}>
                        Explore
                    </a>
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
