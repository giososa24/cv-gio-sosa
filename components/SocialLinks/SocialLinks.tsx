import { GitHub, LinkedIn } from '@mui/icons-material'
import Link from 'next/link'
import React, { FC } from 'react'
import classes from './SocialLinks.module.css'

const items = [
  {
    href: 'https://www.linkedin.com/in/giososa24',
    icon: <LinkedIn style={{ fill: '#0a66c2 !important' }} />,
  },
  {
    href: 'https://github.com/giososa24',
    icon: <GitHub />,
  },
]

const SocialLinks: FC = () => {
  return (
    <div className={classes.container}>
      {items.map(({ href, icon }, i) => (
        <Link key={`${href}-${i}`} href={href}>
          <a target="_blank">{icon}</a>
        </Link>
      ))}
    </div>
  )
}

export default SocialLinks
