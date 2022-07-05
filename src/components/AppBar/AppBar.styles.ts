import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()(theme => ({
  navbar: {
    backgroundColor: `${theme.palette.primary.main} !important`,
  },
  icon: {
    color: theme.palette.text.primary,
  },
  homeLinkBtn: {
    textAlign: 'center',
    maxWidth: 'max-content',
    '& a': {
      textDecoration: 'none',
      fontSize: 25,
      fontWeight: 300,
      color: theme.palette.text.primary,
    },
  },
  drawerContainer: {
    textAlign: 'center',
  },
  contentContainer: {
    position: 'relative',
    top: 50,
    width: '100vw',
    height: 'calc(100vh - 50px)',
  },
  iconThemeContainer: {
    '@media (max-width: 599px)': {
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-end',
    },
  },
}))

export default useStyles
