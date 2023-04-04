// import styles this component
import styles from './HeaderBox.module.css'
import React from 'react'

// HeaderBox component
type HeaderBoxProps = {
    number: number
    title: string
    border_right?: boolean
}

const HeaderBox: React.FC<HeaderBoxProps> = ({
    number,
    title,
    border_right = true,
}) => (
    <div
        className={`${styles['header-box']} ${
            border_right && styles['active-border-right']
        } flex flex-column`}
    >
        <h1>{`${number}k+`}</h1>
        <h3>{title}</h3>
    </div>
)

export default HeaderBox
