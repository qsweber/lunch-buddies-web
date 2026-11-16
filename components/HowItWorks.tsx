import * as React from "react";

const imgStyle = {
  width: "100%",
  maxWidth: "440px",
};

const HowItWorks: React.FunctionComponent = () => {
  return (
    <div>
      <h2 className="newSection">Getting Started</h2>
      <h3>Step 1: Invite Lunch Buddies to a channel</h3>
      <div>
        <p>
          Lunch Buddies polls the members of a Slack channel to see who wants to
          join lunch. After you add it to your workspace, invite it to a channel
          with the teammates you'd like to have lunch with, for example by
          typing <code>/invite @Lunch Buddies</code> in that channel. Any channel
          works; <code>#lunch_buddies</code> is a good name for a dedicated one.
        </p>
      </div>
      <h3>Step 2: Create the poll</h3>
      <div>
        <p>To start a poll, type the following message in the channel:</p>
        <img src="/img/create_1.png" style={imgStyle} />
        <p>
          You can choose the lunch times and the group size (2 to 6 people; 6
          by default). Here are a few examples:
        </p>
        <img src="/img/create_2.png" style={imgStyle} />
        <img src="/img/create_3.png" style={imgStyle} />
        <p>
          Each channel can have its own poll, so several teams can run polls at
          the same time. For example, you could create a poll in{" "}
          <code>#seattle_office</code> and another in{" "}
          <code>#san_francisco_office</code>; the members of each channel are
          polled and grouped independently.
        </p>
      </div>
      <h3>Step 3: Respond to the poll</h3>
      <div>
        <p>
          Lunch Buddies sends each member of the channel a direct message asking
          if they can make it to lunch today.
        </p>
        <p>
          <img src="/img/poll.png" style={imgStyle} />
        </p>
        <p>Everyone picks the time that suits them, or opts out.</p>
      </div>
      <h3>Step 4: Close the poll</h3>
      <div>
        <p>
          Once everyone has answered, go back to the channel where you created
          the poll and type:
        </p>
        <p>
          <img src="/img/close.png" style={imgStyle} />
        </p>
        <p>
          Lunch Buddies randomly groups everyone who said yes, by the time they
          picked, announces each group in the channel, and chooses one person in
          each group to pick where to eat.
        </p>
        <p>
          <img src="/img/group.png" style={imgStyle} />
        </p>
      </div>
      <style jsx>{`
        .newSection {
          margin-top: 5rem;
        }

        h3 {
          margin-top: 2.5rem;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
};

export default HowItWorks;
