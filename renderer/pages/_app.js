//_app.js
import "../styles/global.css";
import { SessionProvider } from "next-auth/react";
import Layout from "../components/Layout";

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
