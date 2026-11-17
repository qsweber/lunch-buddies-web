import * as React from "react";

const imgStyle = {
  width: "100%",
  maxWidth: "440px",
};

const HowItWorks: React.FunctionComponent = () => {
  return (
    <div>
      <h2 className="newSection">Getting Started</h2>
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
        <img
          src="/img/create_1.png"
          alt="Typing the create command"
          style={imgStyle}
        />
        <p>
          You can customize both the times of the poll and the size of the
          groups. Here are a few examples:
        </p>
        <img
          src="/img/create_2.png"
          alt="Create command with custom times"
          style={imgStyle}
        />
        <img
          src="/img/create_3.png"
          alt="Create command with a custom group size"
          style={imgStyle}
        />
        <p>
          It is possible to have multiple polls going at the same time; they are
          uniquely defined by the channel from which they were created. For
          example, you could &quot;create&quot; a poll in the #seattle_office
          channel and also in the #san_francisco_office channel. Members of each
          channel will be independently polled and grouped.
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
          <img
            src="/img/poll.png"
            alt="Poll message from the bot"
            style={imgStyle}
          />
        </p>
        <p>Participants can select their time preference or opt out.</p>
      </div>
      <h3>Step 4: Close the poll</h3>
      <div>
        <p>
          Navigate back to the &quot;#lunch_buddies&quot; channel and type the
          following message:
        </p>
        <p>
          <img
            src="/img/close.png"
            alt="Typing the close command"
            style={imgStyle}
          />
        </p>
        <p>
          The bot will randomly group people and start a group chat between all
          of them.
        </p>
        <p>
          <img
            src="/img/group.png"
            alt="Group chat created by the bot"
            style={imgStyle}
          />
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
