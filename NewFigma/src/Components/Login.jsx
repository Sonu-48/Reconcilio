import React, { useState } from "react";
import {
  Box,
  Container,
  TextField,
  styled,
  Grid,
  Button,
  Divider,
  Typography,
  InputAdornment,
  IconButton,
  FormHelperText,
} from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { MdOutlineVisibilityOff, MdOutlineVisibility } from "react-icons/md";
import Forgotpassword from "./Forgotpassword";
import { toast } from "react-toastify";

const LoginWrapper = styled("div")({
  ".forgot-password": {
    color: "#4878bf",
    fontWeight: 600,
    fontSize: "16px",
    "&:hover":{
      background:'#fff!important',
      color: "#4878bf!important",
    }
  },
  "& input": {
    "&::placeholder": {
      color: "#000",
      opacity: "1",
    },
  },
});

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required."),
  password: Yup.string()
    .min(5, "Too Short!")
    .max(20, "Too Long!")
    .required("Password is required."),
});

function Login({setLoginmodal}) {
  const [showpassword, setShowpassword] = useState(false);
  const [showforgotmodal,setShowforgotmodal]= useState(false);
  // const navigate=useNavigate();
  const handleTogglePassword = () => {
    setShowpassword((prevShowPassword) => !prevShowPassword);
  };
  const userValueString = localStorage.getItem('values');
  const userValue = userValueString ? JSON.parse(userValueString) : null;
  console.log(userValue);

  const handleSubmit=(values)=>{
   
    if(values.email=== uservalue.email && values.password === uservalue.password){
      toast.success("Login Successfully");
      setLoginmodal(false);
    }
    else{
      toast.error("Bad Credentials")
    }
    //  localStorage.setItem('values',JSON.stringify(values));
    //  toast.success("Login Successfully");
    //  setLoginmodal(false);
    //  navigate('/about')
  }

  // handleForgot modal function
  const handleForgot=()=>{
    setShowforgotmodal(true)
  }
  return (
    <LoginWrapper>
      <Container>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, handleChange, handleBlur, values }) => (
            <Form>
              <Grid container spacing={3}>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <Grid item lg={12}>
                    <Box>
                      <TextField
                        variant="filled"
                        placeholder="Email"
                        fullWidth
                        name="email"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={Boolean(touched.email && errors.email)}
                      />
                    </Box>
                    <FormHelperText error>{touched.email && errors.email}</FormHelperText>
                  </Grid>
                  <Grid item lg={12} mt={3}>
                    <Box>
                      <TextField
                        variant="filled"
                        placeholder="Password"
                        fullWidth
                        name="password"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={Boolean(touched.password && errors.password)}
                        type={showpassword ? "text" : "password"}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={handleTogglePassword}
                                edge="end"
                                sx={{
                                  background: "transparent!important",
                                  color: "#000!important",
                                }}
                              >
                                {showpassword ? (
                                  <MdOutlineVisibility />
                                ) : (
                                  <MdOutlineVisibilityOff />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Box>
                    <FormHelperText error>{touched.password && errors.password}</FormHelperText>
                  </Grid>
                      {/* Forgot password section */}
                  <Box align="end" pt={2} pb={2}>
                    <IconButton className="forgot-password" sx={{background:'transparent!important'}}  onClick={handleForgot}>Forgot Your Password</IconButton>
                  </Box>
                  <Box mt={2}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      size="small"
                      type="submit"
                    >
                      Sign In
                    </Button>
                  </Box>
                </Grid>
                <Grid item lg={1} md={6} sm={12} xs={12}>
                  <Divider
                    sx={{
                     height:{lg:'100%',m:'100%',sm:'2px',xs:'2px'},
                     width:{lg:'2px',md:'2px',sm:'100%',xs:'100%'},
                      background: "rgba(0, 0, 0, 0.12)",
                     
                    }}
                  >
                    or
                  </Divider>
                </Grid>
                <Grid
                  item
                  lg={5}
                  md={6}
                  sm={12}
                  xs={12}
                  sx={{ display: "flex", alignItems: "center",justifyContent:'center' }}
                >
                  <Box>
                    <Typography variant="body2">
                      Login with Your Social Profile
                    </Typography>
                    <Box pt={3}>
                      <GoogleOAuthProvider clientId="273673123266-hcd4ovuv8kie52j3ae18mat7rtul110j.apps.googleusercontent.com">
                        <GoogleLogin
                          onSuccess={(credentialResponse) => {
                            console.log(credentialResponse);
                            console.log(errors)
                          }}
                          onError={() => {
                            console.log("Login Failed");
                          }}
                        />
                      </GoogleOAuthProvider>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Container>
      {/* Forgot modal component */}
      <Forgotpassword showforgotmodal={showforgotmodal} setShowforgotmodal={setShowforgotmodal}/>
    </LoginWrapper>
  );
}
export default Login;
