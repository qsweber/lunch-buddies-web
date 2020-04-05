import * as React from "react";
import Head from "next/head";

import UnderLinedLink from "./UnderLinedLink";

type Props = {
  title?: string;
};

const mainStyle = {
  fontSize: "18px",
  fontFamily: "Inter",
  fontWeight: 400,
  maxWidth: "750px",
  width: "100%",
  margin: "0 auto",
  marginTop: "20px",
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
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap"
        rel="stylesheet"
      ></link>
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
        <a href="/">
          <img
            src="/img/logo.png"
            style={{ height: "40px", borderRadius: "5px" }}
          />
        </a>
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
