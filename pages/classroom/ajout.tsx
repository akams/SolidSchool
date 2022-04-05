import { Fragment } from "react";
import Head from "next/head";
import { Box, Container } from "@mui/material";
import { useRouter } from "next/router";
import { DashboardLayout } from "@Layout/DashboardLayout";
import { AccountProfileDetails } from "@Organisms/Classes";

function Edit(props: any) {
  const router = useRouter();
  return (
    <Fragment>
      <Head>
        <title>Edition d'une classe</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <Box>
            <AccountProfileDetails />
          </Box>
        </Container>
      </Box>
    </Fragment>
  );
}

Edit.getLayout = (page: any) => <DashboardLayout>{page}</DashboardLayout>;
export default Edit;
