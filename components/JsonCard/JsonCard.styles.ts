import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()(theme => ({
  bullets: {
    width: 13,
    height: 13,
    borderRadius: 100,
  },
  typeWritterContainer: {
    width: 300,
    height: 130,
    borderRadius: 10,
    padding: '10px 30px',
    backgroundColor: theme.palette.background.paper,
    boxShadow: '8px 8px 8px -4px rgba(0,0,0,0.29);',
  },
  typeWritter: {
    fontSize: 14,
    color: theme.palette.text.primary,
    fontStyle: 'italic',
  },
}))

export default useStyles
