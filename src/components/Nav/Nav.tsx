import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { HambergerMenu } from 'iconsax-react'

import Button from '../Elements/Button/Button'
import { ConnectButton } from '../ConnectButton/ConnectButton'
import styles from './Nav.module.css'

const navConfig = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'mint', label: 'Mint NFTs (Coming Soon)', href: '/mint' },
]

export const Nav: React.FC<{}> = () => {
    const router = useRouter()

    return (
        <nav className={`${styles.nav} flex align-items-center`}>
            <img
                src='logoBig.png'
                height={44}
                alt='Logo'
                className={styles['nav-title']}
            />
            <ul className={`flex align-items-center ${styles['navbar-nav']}`}>
                {navConfig.map(navItem => (
                    <li key={navItem.id} className={`${styles['nav-item']} ${navItem.href === router.route ? styles.active : ''}`}>
                        <Link href={navItem.href} className={styles['nav-link']}>
                            {navItem.label}
                        </Link>
                    </li>
                ))}
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
