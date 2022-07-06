import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()(theme => ({
  typeWritterContainer: {
    '& div': {
      position: 'absolute',
      zIndex: 100,
      top: 82,
      left: 85,
    },
  },
  typeWritter: {
    fontSize: 14,
    color: theme.palette.text.primary,
    fontStyle: 'italic',
  },
}))

export default useStyles
