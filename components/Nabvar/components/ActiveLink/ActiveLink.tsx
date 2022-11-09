import { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import ActiveLinkProps from './ActiveLink.types'
import classes from './ActiveLink.module.css'

const ActiveLink: FC<ActiveLinkProps> = ({ link, href }) => {
  const { asPath } = useRouter()
  const { i18n } = useTranslation()

  return (
    <Link
      href={href}
      className={asPath === href ? classes['link-active'] : classes.link}
      locale={i18n.language}
    >
      {link}
    </Link>
  )
}

export default ActiveLink
