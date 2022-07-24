import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'
import { Box, Typography } from '@mui/material'
import HelloHand from 'assets/images/hello-hand.png'
import MainLayout from 'components/Layouts/MainLayout'
import JsonCard from 'components/JsonCard/JsonCard'

const Home: NextPage = () => {
  return (
    <MainLayout section="Inicio">
      <JsonCard />
      <Box mt="15px" display="flex" gap="10px">
        <Box minWidth="150px">
          <Image src={HelloHand} alt="hello-hand" width="150px" height="150px" />
        </Box>
        <Box>
          <Typography>Hola, soy Giovanni Sosa</Typography>
        </Box>
      </Box>
      <JsonCard />
      <Box mt="15px" display="flex" gap="10px">
        <Box minWidth="150px">
          <Image src={HelloHand} alt="hello-hand" width="150px" height="150px" />
        </Box>
        <Box>
          <Typography>Hola, soy Giovanni Sosa</Typography>
        </Box>
      </Box>
      <JsonCard />
      <Box mt="15px" display="flex" gap="10px">
        <Box minWidth="150px">
          <Image src={HelloHand} alt="hello-hand" width="150px" height="150px" />
        </Box>
        <Box>
          <Typography>Hola, soy Giovanni Sosa</Typography>
        </Box>
      </Box>
      <JsonCard />
      <Box mt="15px" display="flex" gap="10px">
        <Box minWidth="150px">
          <Image src={HelloHand} alt="hello-hand" width="150px" height="150px" />
        </Box>
        <Box>
          <Typography>Hola, soy Giovanni Sosa</Typography>
        </Box>
      </Box>
    </MainLayout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'es', ['common', 'Nabvar', 'index'])),
  },
})

export default Home
