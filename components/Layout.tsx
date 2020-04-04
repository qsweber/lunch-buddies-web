import * as React from "react";
import Head from "next/head";

import UnderLinedLink from "./UnderLinedLink";

type Props = {
  title?: string;
};

const mainStyle = {
  fontSize: "18px",
  fontFamily: "Work Sans",
  fontWeight: 400,
  lineHeight: "24px",
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
        href="https://fonts.googleapis.com/css?family=Work+Sans"
        rel="stylesheet"
      ></link>
    </Head>
    <div style={mainStyle}>
      <header style={{ display: "flex" }}>
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
          <UnderLinedLink pathName="/how_it_works" title="How It Works" /> |{" "}
          <UnderLinedLink pathName="/pricing" title="Pricing" />{" "}
        </nav>
      </header>
      {children}
    </div>
  </div>
);

export default Layout;
