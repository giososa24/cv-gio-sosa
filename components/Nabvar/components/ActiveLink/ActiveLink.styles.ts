import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles({
  name: 'ActiveLink',
  uniqId: 'bQJxyG',
})(theme => ({
  link: {
    fontSize: 24,
    color: theme.palette.text.primary,
    fontWeight: 300,
    ':hover': {
      textDecoration: 'underline',
    },
  },
  linkActive: {
    fontSize: 24,
    color: theme.palette.primary.main,
    fontWeight: 500,
    textDecoration: 'underline',
  },
}))

export default useStyles
