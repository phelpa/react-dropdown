import React, { useState } from 'react'
import styles from './styles.module.css'

interface IProps {
  icon: React.ReactNode | JSX.Element
  align: 'left' | 'right'
  menuSize?: number
  iconSize?: number
  children: React.ReactNode[] | React.ReactNode
}

const DropDown: React.FC<IProps> = ({
  icon,
  align,
  menuSize,
  iconSize,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const increaseMenuSize = { zoom: menuSize ?? 1 }
  const increaseIconSize = { zoom: iconSize ?? 1 }

  const onClick = () => setIsOpen((prev) => !prev)

  const handleKeyPressIcon = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      onClick()
    }
  }

  return (
    <div className={styles.dropdown}>
      <div
        className={styles.icon}
        style={increaseIconSize}
        onClick={onClick}
        onKeyPress={handleKeyPressIcon}
        tabIndex={0}
      >
        {icon}
      </div>
      <div
        className={`${styles.dropdownItems} 
        ${align === 'right' && styles.alignItemsToTheRight}`}
        style={increaseMenuSize}
      >
        {isOpen && <>{children}</>}
      </div>
    </div>
  )
}

export default DropDown
