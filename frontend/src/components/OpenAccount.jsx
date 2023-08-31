import React,{useState} from 'react'
import {MenuItem, Grid,Container, Typography,Box,TextField,FormControlLabel,Checkbox,Button,InputLabel,Select,InputAdornment} from '@mui/material'
import { Link } from 'react-router-dom'
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import QuestionMark from "@mui/icons-material/QuestionMark";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Visibility from "@mui/icons-material/Visibility";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';






const OpenAccount=()=>{
   const [firstName,setFirstName]=useState("")
   const [lastName,setLastName]=useState("")
   const [email,setEmail]=useState("")
   const [gender,setGender]=useState("female")
   const [password,setPassword]=useState("")
   const [confirmPassword,setConfirmPassword]=useState("")
   const [Dob,setDob]=useState("")
   const [address,setAddress]=useState("")
   const [state,setState]=useState("")
   const [city,setCity]=useState("")
   const [account_type,setAccount_type]=useState('Select account type')
   const [uploadImage,setUploadImage]=useState("")
   const [zipcode,setZipcode]=useState("")


    const handleSubmit=()=>{
        alert('Submitted')
    }


    return(
       <Container>
          <Box sx={{margin:'80px auto',textAlign:'center' }}>
                <Grid container>
                    <Grid item sm={12}>
                        <img src="https://hksbsk.com/e-banking/app-assets/img/logo-login.png"
                        width="20%"/>
                        <Typography variant="body1" color="#2012e0" component='div'>Open Account</Typography>
                    </Grid>
                </Grid>
         </Box>
         <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>

              <Grid item xs={12} sm={6}>
                <TextField
                    type="text"
                    autoComplete="given-name"
                    name="firstName"
                    value={firstName}
                    onChange={(e)=>setFirstName(e.target.value)}
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AccountCircle  />
                          </InputAdornment>
                        ),
                      }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                type="text"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  value={lastName}
                  onChange={(e)=>setLastName(e.target.value)}
                  autoComplete="family-name"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle  />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>


              <Grid item xs={12}>
                  <TextField 
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        label="Enter Email"
                        fullWidth
                        id="email" required
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <AlternateEmailOutlinedIcon  />
                              </InputAdornment>
                            ),
                          }}
                    />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField type="password"
                    name="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    label="Password" 
                    id="password"
                    required fullWidth
                    InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Visibility  />
                          </InputAdornment>
                        ),
                      }}
                 />
              </Grid>

              <Grid item xs={12} sm={6}>
                 <TextField type="password"
                    label="Confirm Password"
                    id="confirmPassword"
                    name="confirmPassword" 
                    value={confirmPassword}
                    onChange={(e)=>setConfirmPassword(e.target.value)}
                    fullWidth 
                    required
                    InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Visibility  />
                          </InputAdornment>
                        ),
                      }}
                    />
              </Grid>


              <Grid item sm={12} xs={12}>
                <TextField
                    type="date"
                    name="Dob"
                    value={Dob}
                    onChange={(e)=>setDob(e.target.value)}
                    id="Dob" 
                    required
                    fullWidth
                 />
              </Grid>

             

              <Grid item xs={12} sm={12}>
                   <InputLabel id="demo-select-small-label">Gender</InputLabel>
                    <Select
                       
                        id="gender"
                        value={gender}
                        onChange={(e)=>setGender(e.target.value)}
                        label="Gender"
                        fullWidth
                        required
                        
                    >
                        <MenuItem value="option">
                        <em>-Option-</em>
                        </MenuItem>
                        
                        <MenuItem value="female" onClick={(e)=>setGender('female')}>Female</MenuItem>
                        <MenuItem value="male" onClick={(e)=>setGender('male')}>Male</MenuItem>
                    </Select>
              </Grid>

             
              <Grid item xs={12} sm={12}>
                <TextField
                    placeholder="Address"
                    type="text"
                    value={address}
                    onChange={(e)=>setAddress(e.target.value)}
                    multiline
                    rows={4}
                    fullWidth
                    maxRows={3}/>
              </Grid>

              <Grid item xs={12} sm={6}>
                 <TextField label="State"
                    type="text"
                    name="state"
                    value={state}
                    onChange={(e)=>setState(e.target.value)}
                    variant="outlined"
                   fullWidth
                 />
              </Grid>

              
              <Grid item xs={12} sm={6}>
                 <TextField label="City"
                    type="text"
                    name="city"
                    value={city}
                    onChange={(e)=>setCity(e.target.value)}
                    variant="outlined"
                    fullWidth

                 />
              </Grid>


              <Grid item xs={12} sm={12}>
                 <TextField label="Zipcode"
                    type="number"
                    name="zipcode"
                    value={zipcode}
                    onChange={(e)=>setZipcode(e.target.value)}
                    variant="outlined"
                   fullWidth
                 />
              </Grid>

              
              


          
            <Grid item xs={12} sm={12}>
                <InputLabel id="account_type">Account Type</InputLabel>
                <Select value={account_type} id="account" label="account type" required fullWidth>
                    <MenuItem  value="Select account type">
                        <em>--Select account type--</em>
                    </MenuItem>
                    <MenuItem onClick={(e)=>setAccount_type('fixed')} value="fixed">Fixed</MenuItem>
                    <MenuItem onClick={(e)=>setAccount_type("saving")} value="savings">savings</MenuItem>
                    <MenuItem value="current" onClick={(e)=>setAccount_type("current")}>current</MenuItem>
                    <MenuItem value="checking" onClick={(e)=>setAccount_type("checking")}>checking</MenuItem>
                    <MenuItem value="offshore" onClick={(e)=>setAccount_type("offshore")}>offshore</MenuItem>
                </Select>
            </Grid>
             
            <Grid item xs={12} sm={6}>
                 <TextField 
                    type="file"
                    name="uploadImage"
                    value={uploadImage}
                    onChange={(e)=>setUploadImage(e.target.value)}
                    variant="outlined"
                   

                 />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
       </Container>
    )
}



export default OpenAccount
