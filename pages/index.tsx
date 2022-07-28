import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import MainLayout from 'components/Layouts/MainLayout'
import PresentationCard from 'components/PresentationCard'
import CardContent from 'components/CardContent'
import frontEndItems from 'components/CardContent/frontEndItems'

const Home: NextPage = () => {
  return (
    <MainLayout section="Inicio">
      <PresentationCard />
      <div data-aos="fade">
        <CardContent collection={frontEndItems} />
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
