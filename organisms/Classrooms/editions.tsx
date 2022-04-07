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

import { useCreationMutationClassrooms } from "@Services/classrooms";

const ClassroomEdit = () => {
  const [name, setName] = useState("test 1");
  const { mutate, isSuccess, error, isLoading } = useCreationMutationClassrooms();
  console.log({ isSuccess, error, isLoading });

  const handleChange = (event: any) => {
    setName(event.target.value);
  };

  function validate() {
    mutate({ label: name });
  }

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
                value={name}
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
          <Button color="primary" variant="contained" onClick={validate}>
            Enregistrer
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default ClassroomEdit;
