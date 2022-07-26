import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import MainLayout from 'components/Layouts/MainLayout'
import PresentationCard from 'components/PresentationCard'
import CardContent from 'components/CardContent'

const Home: NextPage = () => {
  return (
    <MainLayout section="Inicio">
      <PresentationCard />
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
