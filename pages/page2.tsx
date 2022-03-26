import {Fragment} from "react";
import Head from "next/head";
import { useRouter } from 'next/router'

import LoginOrganism from '@Organisms/Login'

function Page2(props: any) {
  const router = useRouter()
  return (
    <Fragment>
      <Head>
        <title>Login page 2</title>
      </Head>
      <h1>Login page 2</h1>
      {/* <LoginOrganism /> */}
      <button type="button" onClick={() => router.push('/login')}>page login</button>
      <button type="button" onClick={() => router.push('/page3')}>page 3</button>
    </Fragment>
  );
}

export default Page2;
