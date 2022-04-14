import React from 'react'
import styles from './styles.module.css'

interface IProps {
  onClick(): void
  externalLink: string
  children: string
}

interface IExternalLink {
  externalLink: string
}

const ExternalLink = ({ externalLink }: IExternalLink) => (
  <div className={styles.item}>
    <a className={styles.anchor} href={externalLink} target="_blank">
      Share
    </a>
  </div>
)

const DropDownItem = ({ externalLink, onClick, children }: IProps) => {
  if (externalLink) {
    return <ExternalLink externalLink={externalLink} />
  }

  return (
    <div className={styles.item} onClick={onClick}>
      {children}
    </div>
  )
}

export default DropDownItem
