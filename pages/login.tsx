import {Fragment} from "react";
import Head from "next/head";

import LoginOrganism from '@Organisms/Login'

function Login(props: any) {
  return (
    <Fragment>
      <Head>
        <title>Login</title>
      </Head>
      <LoginOrganism />
    </Fragment>
  );
}

export default Login;
