import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: '#EEEEEE',
    diplay: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: {
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '70%',
    margin: 'auto',
    padding: '10px'
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttons: {
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    width: '50%'
  },
  button: {
    marginBottom: 10,
    width: '100%'
  },
  [theme.breakpoints.down("sm")]:{
    form:{
      width: '97%'
    }
  }
}));