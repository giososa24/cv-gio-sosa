import { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import ActiveLinkProps from './ActiveLink.types'
import styles from './ActiveLink.module.css'

const ActiveLink: FC<ActiveLinkProps> = ({ link, href }) => {
  const { asPath } = useRouter()

  return (
    <Link href={href}>
      <a className={asPath === href ? styles['link-active'] : styles.link}>{link}</a>
    </Link>
  )
}

export default ActiveLink
