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
  margin: "0 auto"
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "Lunch Buddies"
}) => (
  <div style={mainStyle}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="https://fonts.googleapis.com/css?family=Work+Sans"
        rel="stylesheet"
      ></link>
      <style jsx global>{`
        html {
          overflow-y: scroll;
        }
      `}</style>
    </Head>
    <header style={{ display: "flex" }}>
      <img
        src="/img/logo.png"
        style={{ height: "40px", borderRadius: "5px" }}
      />
      <nav
        style={{ marginLeft: "auto", marginTop: "auto", marginBottom: "auto" }}
      >
        <UnderLinedLink pathName="/" title="Home" /> |{" "}
        <UnderLinedLink pathName="/registration" title="Registration" />{" "}
      </nav>
    </header>
    {children}
  </div>
);

export default Layout;
