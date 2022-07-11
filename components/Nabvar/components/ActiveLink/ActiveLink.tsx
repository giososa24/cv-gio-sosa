import { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import ActiveLinkProps from './ActiveLink.types'
import useStyles from './ActiveLink.styles'

const ActiveLink: FC<ActiveLinkProps> = ({ link, href }) => {
  const { asPath } = useRouter()
  const { classes } = useStyles()

  return (
    <Link href={href}>
      <a className={asPath === href ? classes.linkActive : classes.link}>{link}</a>
    </Link>
  )
}

export default ActiveLink
