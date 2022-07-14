import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import MainLayout from 'components/Layouts/MainLayout'
import JsonCard from 'components/JsonCard/JsonCard'

const Home: NextPage = () => {
  return (
    <MainLayout>
      <JsonCard />
    </MainLayout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'es', ['Nabvar', 'index'])),
  },
})

export default Home
