import { ConnectKitButton } from 'connectkit'

import styles from './ConnectButton.module.css'

export const ConnectButton = () => {
    return (
        <ConnectKitButton.Custom>
            {({ isConnected, show, truncatedAddress, ensName }) => {
                return (
                    <button className={styles.button} onClick={show}>
                        {isConnected ? ensName ?? truncatedAddress : 'Connect'}
                    </button>
                )
            }}
        </ConnectKitButton.Custom>
    )
}
