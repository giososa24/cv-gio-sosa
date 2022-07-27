import Head from 'next/head'
import { FC } from 'react'
import { Box } from '@mui/material'
import { useTranslation } from 'next-i18next'
import MainLayoutProps from './MainLayout.types'
import classes from './MainLayout.module.css'
import Nabvar from 'components/Nabvar'
import ScrollToTop from 'components/ScrollToTop'

const MainLayout: FC<MainLayoutProps> = ({ children, section }) => {
  const { t } = useTranslation('Nabvar')
  const urlImage =
    'https://res.cloudinary.com/ddp9kx9ec/image/upload/v1657773094/69700020_2439957779384101_6064492451857432576_n_pbx3hd.jpg'

  return (
    <div>
      <Head>
        <title>{`Gio Sosa - ${t(section)}`}</title>
        <meta name="description" content="Portafolio personal de Gio Sosa" />
        <meta
          name="keywords"
          content="Giovanni Sosa, Gio Sosa, Portafolio de Gio Sosa, Gio, Sosa, CV de Gio Sosa, gio-sosa"
        />
        <meta name="author" content="Giovanni Abraham Sosa de la Cruz" />
        <meta name="copyright" content="Giovanni Abraham Sosa de la Cruz" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="thumbnail" content={urlImage} />

        {/* <!-- MS Tile - for Microsoft apps--> */}
        <meta name="msapplication-TileImage" content={urlImage} />

        {/* <!-- fb & Whatsapp --> */}

        {/* <!-- Site Name, Title, and Description to be displayed --> */}
        <meta property="og:site_name" content="Gio Sosa" />
        <meta property="og:title" content="Gio Sosa - Inicio" />
        <meta property="og:description" content="Portafolio personal de Gio Sosa" />

        {/* <!-- Image to display --> */}
        <meta property="og:image" content={urlImage} />

        {/* <!-- No need to change anything here --> */}
        <meta property="og:type" content="website" />
        <meta property="og:image:type" content="image/jpeg" />

        {/* <!-- Size of image. Any size up to 300. Anything above 300px will not work in WhatsApp --> */}
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />

        {/* <!-- Website to visit when clicked in fb or WhatsApp--> */}
        <meta property="og:url" content="https://gio-sosa.com" />
      </Head>

      <Nabvar />

      <main className={classes.container}>
        <Box className={classes['children-container']}>{children}</Box>
        <ScrollToTop />
      </main>
    </div>
  )
}

export default MainLayout
