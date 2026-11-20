"use client";

import styled from "@emotion/styled";
import { HowItWorks } from "../components/HowItWorks";

const H1 = styled.h1(() => ({
  fontWeight: 800,
  fontSize: 50,
  marginTop: "5rem",
}));

const Subhead = styled.p(() => ({
  fontSize: 25,
}));

const NewSection = styled.h2(() => ({
  marginTop: "4rem",
}));

const SupportBottom = styled.p(() => ({
  marginBottom: "5rem",
}));

export default function Home() {
  return (
    <>
      <H1>Lunch Buddies 🥙</H1>
      <Subhead>
        A free Slack app that helps build relationships between teammates by
        matching them into random groups for lunch. Lunch Buddies takes care of
        all the logistics.
      </Subhead>
      <NewSection>Installation</NewSection>
      <p>Get started using Lunch Buddies with just a few clicks!</p>
      <a href="https://slack.com/oauth/v2/authorize?client_id=329629657296.305324101060&scope=app_mentions:read,channels:read,chat:write,commands,groups:read">
        <img
          alt="Add to Slack"
          height="40"
          width="139"
          src="https://platform.slack-edge.com/img/add_to_slack.png"
          srcSet="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"
        />
      </a>
      <HowItWorks />
      <NewSection id="privacy">Privacy policy</NewSection>
      <h3>Data Retention Policy</h3>
      <p>
        Data is stored while Lunch Buddies is installed on your workspace. You
        can request the removal of your data at any time by making a request to{" "}
        <a href="mailto:support@lunchbuddiesapp.com">
          support@lunchbuddiesapp.com
        </a>
        {"."}
        We collect and retain the minimum data necessary for the app to
        function.
      </p>
      <h3>Data Archiving and Removal Policy</h3>
      <p>
        If you would like to access your user data, please email{" "}
        <a href="mailto:support@lunchbuddiesapp.com">
          support@lunchbuddiesapp.com
        </a>{" "}
        and request it. We will send a copy of your data within 30 days from the
        date of the request.
      </p>
      <p>
        You can submit a request to have your data deleted at any time after
        removing Lunch Buddies from your workspace. Send your request to{" "}
        <a href="mailto:support@lunchbuddiesapp.com">
          support@lunchbuddiesapp.com
        </a>{" "}
        and your data will be deleted within 30 days.
      </p>
      <h3>Data Storage Policy</h3>
      <p>
        Data is stored securely using AWS DynamoDB. All data is encrypted in
        transit with HTTPS and at rest, and is stored in the US.
      </p>
      <p>
        For each workspace that installs Lunch Buddies, we store the
        workspace&apos;s Slack ID and name, the access token Slack issues to the
        app for that workspace, the Slack user ID of the person who installed
        it, and the permissions it was granted. When the app is uninstalled, its
        access token is deleted.
      </p>
      <p>
        For each poll, we store the ID of the channel it was created in, the
        Slack user IDs of the channel members it was sent to, their answers, and
        the lunch groups formed from them. We don&apos;t store names, email
        addresses or the content of your Slack messages.
      </p>
      <NewSection id="support">Support</NewSection>
      <SupportBottom>
        If you have any questions or feature requests, please send me an email
        at{" "}
        <a href="mailto:quinn@lunchbuddiesapp.com">quinn@lunchbuddiesapp.com</a>
        .
      </SupportBottom>
    </>
  );
}
