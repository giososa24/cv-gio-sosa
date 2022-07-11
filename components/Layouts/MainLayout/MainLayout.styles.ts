import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()(theme => ({
  container: {
    minHeight: '100vh',
    padding: '4rem 0 0',
    backgroundColor: theme.palette.background.default,
  },
}))

export default useStyles
