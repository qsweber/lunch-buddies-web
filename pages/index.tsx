import { NextPage } from "next";

import Layout from "../components/Layout";

const imgStyle = {
  width: "440px"
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
    <a href="https://ahlfhssbq3.execute-api.us-west-2.amazonaws.com/production/api/v0/install">
      <img
        alt="Add to Slack"
        height="40"
        width="139"
        src="https://platform.slack-edge.com/img/add_to_slack.png"
        srcSet="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"
      />
    </a>
    <div>
      <h2>Getting Started</h2>
      <h3>
        Step 1: Invite your teammates to the <code>#lunch_buddies</code> channel
      </h3>
      <div>
        <p>
          The app works by polling the members of a Slack channel to see who is
          interested in participating. When you installed the app, a default{" "}
          <code>#lunch_buddies</code> channel was created. You should invite
          your teammates to this channel.
        </p>
      </div>
      <h3>Step 2: Create the poll</h3>
      <div>
        <p>
          To initiate the process, type the following message in the
          #lunch_buddies channel.
        </p>
        <p>
          <img src="/img/create_1.png" style={imgStyle} />
        </p>
        <p>
          You can customize both the times of the poll and the size of the
          groups. Here are a few examples:
        </p>
        <p>
          <img src="/img/create_2.png" style={imgStyle} />
        </p>
        <p>
          <img src="/img/create_3.png" style={imgStyle} />
        </p>
        <p>
          It is possible to have multiple polls going at the same time; they are
          uniquely defined by the channel from which they were created. For
          example, you could "create" a poll in the #seattle_office channel and
          also in the #san_francisco_office channel. Members of each channel
          will be independently polled and grouped.
        </p>
      </div>
      <h3>Step 3: Respond to the poll</h3>
      <div>
        <p>
          After receiving the <code>create</code> command, the bot will
          individually poll the members of the channel asking about
          participation.
        </p>
        <p>
          <img src="/img/poll.png" style={imgStyle} />
        </p>
        <p>Participants can select their time preference or opt out.</p>
      </div>
      <h3>Step 4: Close the poll</h3>
      <div>
        <p>
          Navigate back to the "#lunch_buddies" channel and type the following
          message:
        </p>
        <p>
          <img src="/img/close.png" style={imgStyle} />
        </p>
        <p>
          The bot will randomly group people and start a group chat between all
          of them.
        </p>
        <p>
          <img src="/img/group.png" style={imgStyle} />
        </p>
      </div>
    </div>
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
