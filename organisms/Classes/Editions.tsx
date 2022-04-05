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


const ClassroomEdit = (props: any) => {
  // const [values, setValues] = useState({
  //   firstName: "Katarina",
  //   lastName: "Smith",
  //   email: "demo@devias.io",
  //   phone: "",
  //   state: "Alabama",
  //   country: "USA",
  // });

  const handleChange = (event: any) => {
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
            <Grid item md={12} xs={12}>
              <TextField
                fullWidth
                helperText="Merci de spécifier le nom de la classe"
                label="Nom"
                name="name"
                onChange={handleChange}
                required
                // value={values.lastName}
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

export default ClassroomEdit
