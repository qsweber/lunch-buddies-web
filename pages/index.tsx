import { NextPage } from "next";

import Layout from "../components/Layout";
import HowItWorks from "../components/HowItWorks";

const imgStyle = {
  width: "440px",
};

const Home: NextPage = () => (
  <Layout>
    <h1>Lunch Buddies</h1>
    <p>
      This app helps build relationships between teammates by scheduling
      participants into random groups for lunch. The @lunch_buddies_bot takes
      care of all the logistics.
    </p>
    <h2>Installation</h2>
    <p>Get started using Lunch Buddies with just a few clicks!</p>
    <a href="https://ahlfhssbq3.execute-api.us-west-2.amazonaws.com/production/api/v0/install">
      <img
        alt="Add to Slack"
        height="40"
        width="139"
        src="https://platform.slack-edge.com/img/add_to_slack.png"
        srcSet="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"
      />
    </a>
    <HowItWorks />
    <h2 id="privacy">Privacy policy</h2>
    <p>
      This app will create a channel called "lunch-buddies" and will poll each
      member of that channel whenever the "create" command is run. When the
      "close" command is run, it will start a private group message with each
      group. The only information saved is the answers to the interactive
      question about participating.
    </p>
    <h2 id="support">Support</h2>
    <p>
      If you have any questions or feature requests, please send me an email at{" "}
      <a href="mailto:quinn@lunchbuddiesapp.com">quinn@lunchbuddiesapp.com</a>.
    </p>
  </Layout>
);

export default Home;
