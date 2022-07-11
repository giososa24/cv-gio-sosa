import Head from 'next/head'
import { FC } from 'react'
import MainLayoutProps from './MainLayout.types'
import useStyles from './MainLayout.styles'
import Nabvar from 'components/Nabvar'

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const { classes } = useStyles()

  return (
    <div>
      <Head>
        <title>Gio Sosa - Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nabvar />

      <main className={classes.container}>{children}</main>
    </div>
  )
}

export default MainLayout
