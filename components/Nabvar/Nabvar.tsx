import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import styles from './Nabvar.module.css'
import ActiveLink from 'components/ActiveLink'
import image from 'assets/images/gio-sosa-logo.png'

const menuItems = [
  {
    label: 'Inicio',
    href: '/',
  },
  {
    label: 'Sobre mí',
    href: '/about',
  },
  {
    label: 'Contáctame',
    href: '/contact',
  },
]

const Nabvar: FC = () => {
  const { t } = useTranslation('Nabvar')

  return (
    <nav className={styles['menu-container']}>
      <div>
        <Link href="/">
          <a>
            <Image
              width="100%"
              height="40%"
              src={image}
              title="Page not found"
              alt="Page not found"
            />
          </a>
        </Link>
      </div>
      <div>
        {menuItems.map(({ label, href }, i) => (
          <ActiveLink key={`${i}-${href}`} link={t(label)} href={href} />
        ))}
      </div>
    </nav>
  )
}

export default Nabvar
