import React from 'react'
import { ArrowUp3 } from 'iconsax-react'

import Button from '../Button/Button'
import { DropdownItem, DropdownItems } from '@/hooks/useDropdown'
import styles from './Dropdown.module.css'

type DropdownProps = {
    selectedItem: DropdownItem
    onSelect: (id: DropdownItem['id']) => void
    items: DropdownItems
}

export const Dropdown: React.FC<DropdownProps> = ({
    selectedItem,
    onSelect,
    items,
}) => {
    return (
        <div className={styles['dropdown']}>
            <Button theme='transparent' className='flex align-items-center'>
                {selectedItem.label}
                <span className={styles['dropdown-arrow-icon']}>
                    <ArrowUp3 color='var(--green-400)' />
                </span>
            </Button>
            <ul className={styles['dropdown-menu']}>
                {items.map((item) => (
                    <li
                        key={item.id}
                        className={`${styles['dropdown-item-menu']} ${
                            item.id === selectedItem.id && styles.active
                        }`}
                        onClick={() => onSelect(item.id)}
                    >
                        {item.label}
                    </li>
                ))}
            </ul>
        </div>
    )
}
