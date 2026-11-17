import * as React from "react";
import Head from "next/head";
import Link from "next/link";

import UnderLinedLink from "./UnderLinedLink";

type Props = {
  title?: string;
  children?: React.ReactNode;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "Lunch Buddies",
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="/static/favicons/apple-touch-icon.png"
        rel="apple-touch-icon"
        sizes="180x180"
      />
      <link
        href="/static/favicons/favicon-32x32.png"
        rel="icon"
        sizes="32x32"
        type="image/png"
      />
      <link
        href="/static/favicons/favicon-16x16.png"
        rel="icon"
        sizes="16x16"
        type="image/png"
      />
    </Head>
    <main>
      <header>
        <Link href="/">
          <img
            src="/img/logo.png"
            alt="Lunch Buddies"
            style={{ height: "40px", borderRadius: "5px" }}
          />
        </Link>
        <nav
          style={{
            marginLeft: "auto",
            marginTop: "auto",
            marginBottom: "auto",
          }}
        >
          <UnderLinedLink pathName="/how_it_works" title="How It Works" />
          <UnderLinedLink pathName="/pricing" title="Pricing" />
        </nav>
      </header>
      {children}
    </main>
    <style jsx>{`
      * {
        box-sizing: border-box;
      }

      header {
        display: flex;
        margin-top: 1.5rem;
      }

      main {
        font-size: 18px;
        font-family: Inter;
        font-weight: 400;
        max-width: 750px;
        width: 100%;
        margin: 0px auto;
        padding: 0px 5px;
      }
    `}</style>
  </div>
);

export default Layout;
