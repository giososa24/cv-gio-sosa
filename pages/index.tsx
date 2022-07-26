import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'
import { Box, Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'
import HelloHand from 'assets/images/hello-hand.png'
import MainLayout from 'components/Layouts/MainLayout'
import JsonCard from 'components/JsonCard/JsonCard'
import classes from 'styles/index.module.css'
import CardContent from 'components/CardContent'

const Home: NextPage = () => {
  const { t } = useTranslation('index')

  return (
    <MainLayout section="Inicio">
      <JsonCard />
      <Box className={classes['greeting-container']}>
        <Box className={classes['hand-container']}>
          <Image
            src={HelloHand}
            className={classes.handImage}
            alt="hello-hand"
            width="150px"
            height="150px"
          />
        </Box>
        <Box>
          <Typography component="h1" className={classes.title}>
            {t('Hola, soy Gio Sosa')}
          </Typography>
          <Typography className={classes.info}>
            {t(
              'La programación más que un trabajo es mi hobby, me especializo desarrollando frontend en React pero también cuento con conocimientos de backend y otras tecnologías'
            )}
          </Typography>
        </Box>
      </Box>
      <CardContent />
    </MainLayout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'es', ['common', 'Nabvar', 'index'])),
  },
})

export default Home
