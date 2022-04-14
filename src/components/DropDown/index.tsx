import React, { useState } from 'react'
import { MoreIcon } from '../MoreIcon'
import styles from './styles.module.css'

interface IProps {
  align: 'left' | 'right'
  size?: number
}

const DropDown = ({ align, size }: IProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const increaseSize = { zoom: size ?? 1 }

  const onClick = () => {
    console.log('clicou')
    setIsOpen((prev) => !prev)
  }

  return (
    <div className={styles.dropdown} style={increaseSize}>
      <div id="icon" className={styles.icon} onClick={onClick}>
        <MoreIcon />
      </div>
      <div
        className={`${styles.dropdownItems} 
        ${align === 'right' && styles.alignItemsToTheRight}`}
      >
        {isOpen && (
          <>
            <div className={styles.item}>Rename</div>
            <div className={styles.item}>Share</div>
          </>
        )}
      </div>
    </div>
  )
}

export default DropDown
