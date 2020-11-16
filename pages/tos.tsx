import { NextPage } from "next";
import Layout from "../components/Layout";

const TermsOfService: NextPage = () => (
  <Layout>
    <h2>Terms of Service</h2>
    <iframe style={{
        width: '100%',
        height: '1000px',
    }} src="https://www.termsfeed.com/live/e6ed38e2-ca90-4599-9a4a-e3814c1913e6" title="description" />
  </Layout>
);

export default TermsOfService;