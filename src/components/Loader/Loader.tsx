import styles from './Loader.module.css'

type LoaderProps = {
    theme?: 'light' | 'dark'
}

export const Loader: React.FC<LoaderProps> = ({ theme = 'dark' }) => {
    return (
        <img className={styles.loaderImg} src={`loader-${theme}.svg`} />
    )
}