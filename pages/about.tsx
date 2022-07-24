import { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import MainLayout from 'components/Layouts/MainLayout'

const About: NextPage = () => {
  return (
    <MainLayout section="Sobre mí">
      <div className="text-th-primary">about</div>
    </MainLayout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'es', ['common', 'Nabvar'])),
  },
})

export default About
