import styles from './CopyButton.module.css'

export const CopyButton = () => {
    return (
        <>
            {({ isConnected, show, truncatedAddress, ensName }) => {
                return (
                    <button className={styles.button} onClick={show}>
                        {isConnected
                            ? ensName ?? truncatedAddress
                            : 'Connect Wallet'}
                    </button>
                )
            }}
        </>
    )
}
