import React, { KeyboardEvent } from 'react'
import styles from './styles.module.css'

type IProps =
  | {
      onClick(): void
      externalLink?: string
      children: React.ReactNode
    }
  | {
      onClick?(): void
      externalLink: string
      children: string
    }

const DropDownItem: React.FC<IProps> = ({
  externalLink,
  onClick,
  children,
}) => {
  const handleKeyPressDiv = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      onClick && onClick()
    }
  }

  if (externalLink) {
    return (
      <div className={styles.item}>
        <a
          className={styles.anchor}
          href={externalLink}
          target="_blank"
          rel="noreferrer"
        >
          {children}
        </a>
      </div>
    )
  }

  return (
    <div
      className={styles.item}
      onClick={onClick}
      onKeyPress={handleKeyPressDiv}
      tabIndex={0}
    >
      {children}
    </div>
  )
}

export default DropDownItem
