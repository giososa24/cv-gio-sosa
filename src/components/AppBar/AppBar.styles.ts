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
    top: 64,
    width: '100vw',
    height: 'calc(100vh - 64px)',
    backgroundColor: theme.palette.background.default,
  },
  iconThemeContainer: {
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 599px)': {
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-end',
    },
  },
  languageContainer: {
    m: 1,
    minWidth: 45,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
}))

export default useStyles