import { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import MainLayout from 'components/Layouts/MainLayout'

const Contact: NextPage = () => {
  return (
    <MainLayout section="Contáctame">
      <div>contact</div>
    </MainLayout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'es', ['common', 'Nabvar'])),
  },
})

export default Contact
