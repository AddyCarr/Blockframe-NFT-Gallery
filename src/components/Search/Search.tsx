import { useState } from 'react'

import styles from './Search.module.css'

type SearchProps = {
    onSearch: (value: string) => void
}

export const Search: React.FC<SearchProps> = ({ onSearch }) => {
    const [inputValue, setInputValue] = useState('0xd8da6bf26964af9d7eed9e03e53415d37aa96045');

    return (
        <div className={styles.wrapper}>
            <form>
                <input 
                    name="addressInput" 
                    onChange={e => setInputValue(e.target.value)} 
                    value={inputValue}
                />
                <button type='button' onClick={() => onSearch(inputValue)}>
                    Search
                </button>
            </form>
        </div>
    )
}