import { SessionProvider } from "next-auth/react";

export default function SessionAuthProvider({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
