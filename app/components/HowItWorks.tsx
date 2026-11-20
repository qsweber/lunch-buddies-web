"use client";

import styled from "@emotion/styled";

const NewSection = styled.h2(() => ({
  marginTop: "5rem",
}));

const H3 = styled.h3(() => ({
  marginTop: "2.5rem",
  fontWeight: 600,
}));

const Img = styled.img(() => ({
  width: "100%",
  maxWidth: 440,
}));

export function HowItWorks() {
  return (
    <div>
      <NewSection>Getting Started</NewSection>
      <H3>Step 1: Invite Lunch Buddies to a channel</H3>
      <div>
        <p>
          Lunch Buddies polls the members of a Slack channel to see who wants to
          join lunch. After you add it to your workspace, invite it to a channel
          with the teammates you&apos;d like to have lunch with, for example by
          typing <code>/invite @Lunch Buddies</code> in that channel. Any
          channel works; <code>#lunch_buddies</code> is a good name for a
          dedicated one.
        </p>
      </div>
      <H3>Step 2: Create the poll</H3>
      <div>
        <p>To start a poll, type the following message in the channel:</p>
        <Img src="/img/create_1.png" alt="Typing the create command" />
        <p>
          You can choose the lunch times and the group size (2 to 6 people; 6 by
          default). Here are a few examples:
        </p>
        <Img src="/img/create_2.png" alt="Create command with custom times" />
        <Img
          src="/img/create_3.png"
          alt="Create command with a custom group size"
        />
        <p>
          Each channel can have its own poll, so several teams can run polls at
          the same time. For example, you could create a poll in{" "}
          <code>#seattle_office</code> and another in{" "}
          <code>#san_francisco_office</code>; the members of each channel are
          polled and grouped independently.
        </p>
      </div>
      <H3>Step 3: Respond to the poll</H3>
      <div>
        <p>
          Lunch Buddies sends each member of the channel a direct message asking
          if they can make it to lunch today.
        </p>
        <p>
          <Img src="/img/poll.png" alt="Poll message from the bot" />
        </p>
        <p>Everyone picks the time that suits them, or opts out.</p>
      </div>
      <H3>Step 4: Close the poll</H3>
      <div>
        <p>
          Once everyone has answered, go back to the channel where you created
          the poll and type:
        </p>
        <p>
          <Img src="/img/close.png" alt="Typing the close command" />
        </p>
        <p>
          Lunch Buddies randomly groups everyone who said yes, by the time they
          picked, announces each group in the channel, and chooses one person in
          each group to pick where to eat.
        </p>
        <p>
          <Img
            src="/img/group.png"
            alt="Lunch group announced in the channel"
          />
        </p>
      </div>
    </div>
  );
}
