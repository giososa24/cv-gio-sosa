import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles<{ width: number }>({
  name: 'Navbar',
  uniqId: 'QVAzgo',
})((theme, { width }) => ({
  container: {
    position: 'fixed',
    width: '100vw',
    display: 'flex',
    gap: 25,
    padding: 10,
    backgroundColor: theme.palette.background.default,
    '& div > a': {
      marginRight: 10,
    },
    borderBottom: `2px solid ${theme.palette.primary.main}`,
    boxShadow: '0px 1px 10px 0px rgba(0,0,0,0.55);',
  },
  logoContainer: {
    flex: width > 675 ? 0 : 1,
    textAlign: 'center',
  },
  itemsContainer: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },
  actionsContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  languageContainer: {
    m: 1,
    width: 70,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  icon: {
    color: theme.palette.text.primary,
  },
  logo: {
    paddingLeft: 10,
    '& svg': {
      width: 83,
      height: '100%',
      fill: theme.palette.primary.main,
    },
  },
}))

export default useStyles
