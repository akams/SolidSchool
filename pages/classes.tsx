import { Fragment } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Box, Container } from "@mui/material";

import { useClassrooms } from '@Services/classrooms'

import { DashboardLayout } from "@Layout/DashboardLayout";
import ClassesOrganism from "@Organisms/Classes";
import ListToolbar from "@Molecules/ListToolbar";
import Spinner from "@Atoms/Spinner";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function Classes(props: any) {
  const router = useRouter();
  const { isLoading, error, data } = useClassrooms()
  console.log({ isLoading, error, data })
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
            {isLoading ? <Spinner /> : <ClassesOrganism classrooms={data} />}
          </Box>
        </Container>
      </Box>
    </Fragment>
  );
}

Classes.getLayout = (page: any) => <DashboardLayout>{page}</DashboardLayout>;
export default Classes;
