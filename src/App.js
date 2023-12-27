// import axios from 'axios'
// import { useState } from 'react'
// import Button from '@mui/material/Button';
// import './App.css';

// function App() {

//   const [userName, setUserName] = useState("")
//   const [password, setPassword] = useState("")

//   const userCredentials = {
//     username: userName,
//     password: password
//   }
//   const handleLogin = async (event) => {
//     event.preventDefault();

//     const loginUrl = 'https://dummyjson.com/auth/login'
//      const data = new FormData(event.target)
//      const userCredentials = {
//             username: data.get('username'),
//             password: data.get('password')
//           }
          // console.log(data.get('username'))
    // try {
    //   const response = await axios.post(loginUrl,
    //     userCredentials, { headers: { token: "Barer hjkdagdkjga" } })
    //     console.log(response.data)
    // } catch (error) {
    //   console.log(error)
    // }
//  await axios.get(userCredentials).then(resp => console.log(resp)).catch(e => console.log(e.message))
  

//   }


//   const userDetails = (event) => {
//     setUserName(event.target.value)
//   }

//   const userPassword = (event) => {
//     setPassword(event.target.value)
//   }

//   return (
//     <>
//      <form onSubmit={handleLogin}>
//       <input type="text" name='username'/>
//       <input type="text" name='password'/>
//       <Button  variant='contained' color='success' type='submit'>Login</Button>
//       </form>
//     </>
//   )

// }

//  export default App;
// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// // TODO remove, this demo shouldn't need to reset the theme.

// const defaultTheme = createTheme();

// function App() {
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
    

//     const userCredentials = {
//       username: data.get('username'),
//       password: data.get('password')
//     }

//     const loginUrl = 'https://dummyjson.com/auth/login'

//     // try {
//     //   const response = await axios.post(loginUrl,
//     //     userCredentials, { headers: { token: "Barer hjkdagdkjga" } })
//     //   console.log(response.data)
//     // } catch (error) {
//     //   console.log(error)
//     // }
//   };

//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign in
//           </Typography>
//           <Box component="form" onSubmit={handleSubmit}  sx={{ mt: 1 }}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="username"
//               label="username Address"
//               name="username"
//               autoComplete="username"
//               autoFocus
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//             />
//             <FormControlLabel
//               control={<Checkbox value="remember" color="primary" />}
//               label="Remember me"
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign In
//             </Button>
//             <Grid container>
//               <Grid item xs>
//                 <Link href="#" variant="body2">
//                   Forgot password?
//                 </Link>
//               </Grid>
//               <Grid item>
//                 <Link href="#" variant="body2">
//                   {"Don't have an account? Sign Up"}
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//         <Copyright sx={{ mt: 8, mb: 4 }} />
//       </Container>
//     </ThemeProvider>
//   );
// }

// export default App;
// axiosInstance.js


// YourComponent.js
// import instance from './components/Auth';
// import Profile from './components/Profile'
// import axios from 'axios'
// import Cookies from 'js-cookie'
import React, { useState } from 'react';
import YourComponent from './components/YourComponent'
import Profile from './components/Profile'

const App = () => {

  const [count, setcount] = useState(0)
  const getData = () => {
    setcount(count + 1)
  }

  return(
  <>
  <YourComponent/>
  <Profile />
  {/* <h1>{count}</h1>
  <button onClick={getData}>Home</button> */}
  </>
)}

export default App;
