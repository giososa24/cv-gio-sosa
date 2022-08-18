import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import MainLayout from 'components/Layouts/MainLayout'
import PresentationCard from 'components/PresentationCard'
import CardContent from 'components/CardContent'
import frontEndItems from 'components/CardContent/frontEndItems'
import backEndItems from 'components/CardContent/backEndItems'
import connectionProtocolsItems from 'components/CardContent/connectionProtocolsItems'
import deploymentItems from 'components/CardContent/deploymentItems'
import databasesItems from 'components/CardContent/databaseItems'

const Home: NextPage = () => {
  return (
    <MainLayout section="Inicio">
      <PresentationCard />
      <div data-aos="fade-left">
        <CardContent collection={frontEndItems} />
      </div>
      <div data-aos="fade-right">
        <CardContent collection={backEndItems} />
      </div>
      <div data-aos="fade-right">
        <CardContent collection={databasesItems} />
      </div>
      <div data-aos="fade-left">
        <CardContent collection={connectionProtocolsItems} />
      </div>
      <div data-aos="fade-right">
        <CardContent collection={deploymentItems} />
      </div>
    </MainLayout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'es', ['common', 'Nabvar', 'index'])),
  },
})

export default Home
