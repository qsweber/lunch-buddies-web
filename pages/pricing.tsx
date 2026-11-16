import { NextPage } from "next";
import Layout from "../components/Layout";

const Pricing: NextPage = () => (
  <Layout>
    <h2>Lunch Buddies is free</h2>
    <p>
      There's no trial period and no per-user charge. Add Lunch Buddies to your
      workspace and use it as often as you like.
    </p>
    <p>
      If you have any questions, please reach out to us at{" "}
      <a href="mailto:support@lunchbuddiesapp.com">
        support@lunchbuddiesapp.com
      </a>
      .
    </p>
  </Layout>
);

export default Pricing;
