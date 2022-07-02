import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()((theme) => ({
  icon: {
    color: theme.palette.text.primary,
  },
}))

export default useStyles