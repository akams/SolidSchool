import { useState } from 'react';
import {
  Grid,
  CircularProgress,
  Typography,
  Button,
  TextField,
  InputAdornment,
  Fade,
} from '@mui/material';

// import { signIn } from '@Services/login';
// import { useGlobalState } from '@Context/UserContext'

// styles
import useStyles from './styles';

function Login(props: any) {
  const classes = useStyles(props);
  // console.log('classes', classes)
  // const [, dispatch] = useGlobalState()
  // const navigate = useNavigate();

  // local
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [structKey, setkeyStruct] = useState('ADMIN');
  const [username, setUsername] = useState('akams');
  const [password, setPassword] = useState('azerty1');

  const handleSubmitWrapper = async (formData: any) => {
    // const [user] = await signIn(formData)
    // dispatch({type: 'user-loaded', payload: user})
    // navigate('/first');
  };

  return (
    <Grid container className={classes.container}>
      <div className={classes.logotypeContainer}>
        <img src='/logo.svg' alt="logo" className={classes.logotypeImage} />
        <Typography className={classes.logotypeText}>Solid School</Typography>
      </div>
      <div className={classes.formContainer}>
        <div className={classes.form}>
          <>
            <Typography variant="h1" className={classes.greeting}>
              Good Morning,
            </Typography>
            <div className={classes.formDividerContainer}>
              <div className={classes.formDivider} />
            </div>
            {/* <Fade in={error}>
                <Typography color="secondary" className={classes.errorMessage}>
                  Something is wrong with your login or password :(
                </Typography>
              </Fade> */}
            <TextField
              label="Clés profil"
              id="outlined-start-adornment"
              sx={{ m: 1, width: '25ch' }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">KEY | </InputAdornment>
                ),
              }}
              value={structKey}
              onChange={(e) => setkeyStruct(e.target.value)}
              margin="normal"
              type="text"
              fullWidth
            />
            <TextField
              id="username"
              InputProps={{
                classes: {
                  underline: classes.textFieldUnderline,
                  input: classes.textField,
                },
              }}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              margin="normal"
              placeholder="Username"
              type="text"
              fullWidth
            />
            <TextField
              id="password"
              InputProps={{
                classes: {
                  underline: classes.textFieldUnderline,
                  input: classes.textField,
                },
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              placeholder="Password"
              type="password"
              fullWidth
            />
            <div className={classes.formButtons}>
              {isLoading ? (
                <CircularProgress size={26} className={classes.loginLoader} />
              ) : (
                <Button
                  disabled={username.length === 0 || password.length === 0}
                  onClick={() => {
                    handleSubmitWrapper({
                      username,
                      password,
                      structKey
                    })
                  }}
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  Login
                </Button>
              )}
            </div>
          </>
        </div>
        <Typography color="primary" className={classes.copyright}>
          © Copyright {new Date().getFullYear()}{' '}
        </Typography>
      </div>
    </Grid>
  );
}

export default Login;
