import { useState } from 'react'
import { SearchNormal1, Setting4 } from 'iconsax-react'

import styles from './Search.module.css'
import { Loader } from '../Loader/Loader'

type SearchProps = {
    onSearch: (value: string) => void
    isSearchLoading: boolean
}

export const Search: React.FC<SearchProps> = ({
    onSearch,
    isSearchLoading,
}) => {
    const [inputValue, setInputValue] = useState(
        '0xd8da6bf26964af9d7eed9e03e53415d37aa96045'
    )

    return (
        <div className={`${styles['search-bar']} flex align-items-center`}>
            <SearchNormal1 size='30' color='var(--white-100)' />
            <input
                name='addressInput'
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
                type='text'
                className={styles['search-input']}
                placeholder='Your public ethereum address'
            />
            <button
                type='button'
                onClick={() => onSearch(inputValue)}
                className={`${styles['search-btn']} flex justify-content-center align-items-center`}
                disabled={isSearchLoading}
            >
                {isSearchLoading ? (
                    <div className={styles.loaderWrapper}>
                        <Loader />
                    </div>
                ) : (
                    <Setting4 size='20' color='var(--dark-900)' />
                )}
            </button>
        </div>
    )
}
