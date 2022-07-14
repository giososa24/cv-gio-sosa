import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles({
  name: 'MainLayout',
  uniqId: 'wFrUh9',
})(theme => ({
  container: {
    maxWidth: 1200,
    margin: 'auto',
    minHeight: '100vh',
    padding: '4rem 0 0',
    backgroundColor: theme.palette.background.default,
  },
}))

export default useStyles
