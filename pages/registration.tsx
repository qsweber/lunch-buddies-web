import { NextPage } from "next";
import Layout from "../components/Layout";

const Registration: NextPage = () => (
  <Layout>
    <h2>Registration Complete!</h2>
    <p>You have successfully registered the Lunch Buddies app!</p>
    <p>
      If you have any questions/comments/concerns/etc, please send an email to{" "}
      <a href="mailto:support@lunchbuddiesapp.com">
        support@lunchbuddiesapp.com
      </a>
      .
    </p>
  </Layout>
);

export default Registration;
