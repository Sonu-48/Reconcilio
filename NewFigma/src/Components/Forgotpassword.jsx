import {
  Dialog,
  IconButton,
  Box,
  Typography,
  TextField,
  Button,
  styled,
  FormHelperText,
} from "@mui/material";
import React from "react";
import { IoMdClose } from "react-icons/io";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const ForgotWrapper = styled("div")({
  padding: "5px 40px",
  "& h6":{
    color:'#4878bf',
  },
  "& sup":{
    color:'red',
    fontSize:'15px',
  },
  ".reset-btn":{
    textAlign:'center',
    padding:'50px 0px 30px',
  }
});



const ForgotSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required("Email is required."),
  });

function Forgotpassword({ showforgotmodal, setShowforgotmodal }) {

    const handleSubmit=(values,resetForm)=>{
        console.log(values);
        resetForm({value:''})
    }
  return (
    <>
      <Dialog open={showforgotmodal}
       sx={{
        '& .MuiDialog-paper': {width:'600px' },
      }}
      >
        <Box align="end">
          <IconButton
            onClick={() => setShowforgotmodal(false)}
            sx={{
              background: "transparent!important",
              color: "#000!important",
            }}
          >
            <IoMdClose />
          </IconButton>
        </Box>
        <ForgotWrapper>
        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={ForgotSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, handleChange, handleBlur, values }) => (
            <Form>
          <Box>
            <Typography variant="h6">Forgot Your Password</Typography>
          </Box>
          <Typography variant="body2" pt={4} pb={4}>
            Please enter your email address below to receive a password reset
            link.
          </Typography>
          <Box>
            <Typography variant="body1" pb={1}>
              Email <sup>*</sup>
            </Typography>
            <TextField variant="filled" fullWidth name="email" 
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={Boolean(touched.email && errors.email)}
            />
            <FormHelperText error>{touched.email && errors.email}</FormHelperText>
          </Box>
          <Box className="reset-btn">
            <Button variant="contained" color="primary" type="password">
              Reset My Password
            </Button>
          </Box>
          </Form>
          )}
        </Formik>
        </ForgotWrapper>
      </Dialog>
    </>
  );
}
export default Forgotpassword;
