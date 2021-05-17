import { makeStyles } from '@material-ui/core/styles';
import theme from '../gatsby-theme-material-ui-top-layout/theme';

const useStyles = makeStyles(({
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  link: {
    padding: '1rem',
    backgroundColor: theme.palette.primary.main,
    color: "white"
  }
}));

export default useStyles;