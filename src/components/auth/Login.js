import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useState} from 'react' 
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from '../pages/HomePage';
import { useNavigate } from "react-router-dom";
// import { LoginUser } from '../actions/userActions';

const theme = createTheme();

function notify(text, type) {
    switch (type) {
      case "info":
        return toast.success(`👍${text}`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      case "error":
        return toast.error(`👎${text}`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
  
    }
    }

export default function Login({ props }) {
  const navigate = useNavigate();
  const [email,setEmail]=useState(""); 
  const [passw,setPassw]=useState(""); 
  const handleSubmit = async (event) => {
    event.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "email": email,
        "password": passw
      });
      
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
      let res =await fetch (
        "http://localhost:3000/api/user/login",
        requestOptions
    )
    let data =await res.json();
    console.log(data);

      if(data.msg == "Successfully Logged In"){
        localStorage.setItem("Token", data.token);
        localStorage.setItem("Status", "LoggedIn");
        localStorage.setItem("Name", data.user.name);
        localStorage.setItem("m_id", data.user._id);
      
        let x = localStorage.getItem("Token");
        // console.log(x);
        notify(" Login Successful!!!", "info");
        setTimeout(() => {
            navigate("/HomePage")
      }, 1000);
      }else {
        // console.log(data.msg);
        notify(data.msg, "error");

      }
 
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
    
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={email} onChange={(e)=>setEmail(e.target.value)}
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={passw} onChange={(e)=>setPassw(e.target.value)}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <ToastContainer/>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/SignUp" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        </Container>
    </ThemeProvider>
  );
}
// SignIn.propTypes = {
//     setToken: PropTypes.func.isRequired
//   }