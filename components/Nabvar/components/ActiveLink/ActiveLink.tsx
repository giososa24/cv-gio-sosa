import { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import ActiveLinkProps from './ActiveLink.types'
import useStyles from './ActiveLink.styles'

const ActiveLink: FC<ActiveLinkProps> = ({ link, href }) => {
  const { asPath } = useRouter()
  const { classes } = useStyles()
  const { i18n } = useTranslation()

  return (
    <Link href={href} locale={i18n.language}>
      <a className={asPath === href ? classes.linkActive : classes.link}>{link}</a>
    </Link>
  )
}

export default ActiveLink
