import {Fragment} from "react";
import Head from "next/head";
import { useRouter } from 'next/router'

import LoginOrganism from '@Organisms/Login'

function Page3(props: any) {
  const router = useRouter()
  return (
    <Fragment>
      <Head>
        <title>Gestion des étudiants</title>
      </Head>
      <h1>Gestion des étudiants</h1>
      <button type="button" onClick={() => router.push('/page2')}>page 2</button>
      <button type="button" onClick={() => router.push('/login')}>login</button>
      {/* <LoginOrganism /> */}
    </Fragment>
  );
}

export default Page3;
