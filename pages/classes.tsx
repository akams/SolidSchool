import { Fragment } from "react";
import Head from "next/head";
import { Box, Container } from "@mui/material";

import { DashboardLayout } from "@Layout/DashboardLayout";
import ClassesOrganism from "@Organisms/Classes";
import ListToolbar from "@Molecules/ListToolbar";

function ClasseRooms(props: any) {
  return (
    <Fragment>
      <Head>
        <title>Gestion des classes</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <ListToolbar
            titleHeaderComponent="Gestion des classes"
            subTextBtnCreate="classe"
            placeholderTextSearchBar="classe"
            urlCreateBtn="/classroom/ajout"
          />
          <Box sx={{ mt: 3 }}>
            <ClassesOrganism />
          </Box>
        </Container>
      </Box>
    </Fragment>
  );
}

ClasseRooms.getLayout = (page: any) => <DashboardLayout>{page}</DashboardLayout>;
export default ClasseRooms;
