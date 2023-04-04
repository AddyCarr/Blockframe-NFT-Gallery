import React from 'react'

import styles from './ContainerCard.module.css'

type ContainerCardProps = {
    children: React.ReactNode
    className?: string
}

export const ContainerCard: React.FC<ContainerCardProps> = ({
    children,
    className = '',
}) => <div className={`${styles.container} ${className}`}>{children}</div>
