import Head from 'next/head'
import { FC } from 'react'
import { Box } from '@mui/material'
import { useTranslation } from 'next-i18next'
import MainLayoutProps from './MainLayout.types'
import useStyles from './MainLayout.styles'
import Nabvar from 'components/Nabvar'

const MainLayout: FC<MainLayoutProps> = ({ children, section }) => {
  const { classes } = useStyles()
  const { t } = useTranslation('Nabvar')

  return (
    <div>
      <Head>
        <title>{`Gio Sosa - ${t(section)}`}</title>
        <meta name="description" content="Portafolio personal de Gio Sosa" />
        <meta
          name="keywords"
          content="Giovanni Sosa, Gio Sosa, Portafolio de Gio Sosa, Gio, Sosa, CV de Gio Sosa"
        />
        <meta name="author" content="Giovanni Abraham Sosa de la Cruz" />
        <meta name="copyright" content="Giovanni Abraham Sosa de la Cruz" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />

        {/* Facebook metatags */}
        <meta property="og:title" content="Gio Sosa - Home" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/ddp9kx9ec/image/upload/v1657773094/69700020_2439957779384101_6064492451857432576_n_pbx3hd.jpg"
        />
        <meta property="og:url" content="https://gio-sosa.com" />
        <meta property="og:description" content="Portafolio personal de Gio Sosa" />
      </Head>

      <Nabvar />

      <main className={classes.container}>
        <Box padding="15px">{children}</Box>
      </main>
    </div>
  )
}

export default MainLayout
