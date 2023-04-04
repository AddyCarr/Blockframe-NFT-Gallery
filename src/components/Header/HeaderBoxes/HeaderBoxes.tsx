import React from 'react'

import HeaderBox from '../HeaderBox/HeaderBox'
import styles from './HeaderBoxes.module.css'

type HeaderBoxesProps = {
    titles_numbers: {
        id: number
        title: string
        number: number
    }[]
}

export const HeaderBoxes: React.FC<HeaderBoxesProps> = ({ titles_numbers }) => (
    <div className={`${styles['header-wrap-boxes']} flex`}>
        {titles_numbers.map((title_number, idx) => (
            <HeaderBox
                key={title_number.id}
                title={title_number.title}
                number={title_number.number}
                border_right={idx === titles_numbers.length - 1 ? false : true}
            />
        ))}
    </div>
)
