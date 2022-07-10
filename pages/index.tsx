import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Typewriter from 'typewriter-effect'
import MainLayout from 'components/Layouts/MainLayout'

const Home: NextPage = () => {
  return (
    <MainLayout>
      <div>
        <Typewriter
          onInit={(typewriter): void => {
            typewriter.typeString('hola mundo cruel').start()
          }}
          options={{
            autoStart: true,
            loop: true,
            // wrapperClassName: classes.typeWritter,
            // cursorClassName: classes.typeWritter,
          }}
        />
      </div>
    </MainLayout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'es', ['Nabvar'])),
  },
})

export default Home
