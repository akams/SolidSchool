import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@mui/material";

const states = [
  {
    value: "alabama",
    label: "Alabama",
  },
  {
    value: "new-york",
    label: "New York",
  },
  {
    value: "san-francisco",
    label: "San Francisco",
  },
];

const AccountProfileDetails = (props) => {
  // const [values, setValues] = useState({
  //   firstName: "Katarina",
  //   lastName: "Smith",
  //   email: "demo@devias.io",
  //   phone: "",
  //   state: "Alabama",
  //   country: "USA",
  // });

  const handleChange = (event) => {
    // setValues({
    //   ...values,
    //   [event.target.name]: event.target.value,
    // });
  };

  return (
    <form autoComplete="off" noValidate>
      <Card>
        <CardHeader subheader="The information can be edited" title="Classe" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText="Please specify the last name"
                label="Nom de famille"
                name="lastName"
                onChange={handleChange}
                required
                // value={values.lastName}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText="Please specify the first name"
                label="Prénom"
                name="firstName"
                onChange={handleChange}
                required
                // value={values.firstName}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText="Please specify the birth day"
                label="Date de naissance"
                name="birthDate"
                onChange={handleChange}
                required
                // value={values.firstName}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText="Please specify the address"
                label="Adresse de résidence"
                name="address"
                onChange={handleChange}
                required
                // value={values.firstName}
                variant="outlined"
              />
            </Grid>

            
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Select classroom"
                name="state"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                // value={values.state}
                variant="outlined"
              >
                {states.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Select gender"
                name="state"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                // value={values.state}
                variant="outlined"
              >
                {states.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Select type étudiant"
                name="state"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                // value={values.state}
                variant="outlined"
              >
                {states.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Select time slot"
                name="state"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                // value={values.state}
                variant="outlined"
              >
                {states.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Nom de famille du père"
                name="lastnameFather"
                onChange={handleChange}
                required
                // value={values.lastnameFather}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Numéro de téléphone du père"
                name="phoneNumberFather"
                onChange={handleChange}
                type="tel"
                required
                // value={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Email du père"
                name="emailFather"
                type="email"
                onChange={handleChange}
                // value={values.phone}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Employeur du père"
                name="employerFather"
                onChange={handleChange}
                type="text"
                required
                // value={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Profession du père"
                name="jobFather"
                type="text"
                onChange={handleChange}
                // value={values.phone}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Nom de famille de la mère"
                name="lastnameMother"
                onChange={handleChange}
                type="text"
                required
                // value={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Numéro de téléphone de la mère"
                name="phoneNumberMother"
                type="tel"
                onChange={handleChange}
                // value={values.phone}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Email de la mère"
                name="emailMother"
                onChange={handleChange}
                type="email"
                required
                // value={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Employeur de la mère"
                name="employerMother"
                type="text"
                onChange={handleChange}
                // value={values.phone}
                variant="outlined"
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Profession de la mère"
                name="jobMother"
                onChange={handleChange}
                type="text"
                required
                // value={values.email}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
          }}
        >
          <Button color="primary" variant="contained">
            Enregistrer
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default AccountProfileDetails
