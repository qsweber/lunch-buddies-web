import { NextPage } from "next";
import Layout from "../components/Layout";

const Pricing: NextPage = () => (
  <Layout>
    <h2>Try Lunch Buddies free for 30 Days!</h2>
    <p>After that, it's just $1 per user per month.</p>
    <p>
      On the first day of each month, you'll recieve an invoice for the previous
      month. For each user that participated in a Lunch Buddies group, you'll be
      charged $1.
    </p>
    <p>
      If you have any questions about this, or if you don't think your team has
      it in the budget, please reach out to us at{" "}
      <a href="mailto:pricing@lunchbuddiesapp.com">
        pricing@lunchbuddiesapp.com
      </a>
      .
    </p>
  </Layout>
);

export default Pricing;
