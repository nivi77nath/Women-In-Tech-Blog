import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
    clientWidth: '100vw',
    margin: '20px 0px',
    padding: '40px',
    display: 'flex',
    justifyContent: 'space-between'
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
}));