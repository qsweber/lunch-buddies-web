import type { Metadata } from "next";
import Link from "next/link";

// Reachable only by direct URL: not linked from the nav, and kept out of search results.
export const metadata: Metadata = {
  title: "Lunch Buddies: Testing instructions",
  robots: { index: false, follow: false },
};

const INSTALL_URL =
  "https://slack.com/oauth/v2/authorize?client_id=329629657296.305324101060&scope=app_mentions:read,channels:read,chat:write,commands,groups:read";

export default function Testing() {
  return (
    <>
      <h2>Testing instructions</h2>
      <p>
        These steps walk through every feature of Lunch Buddies so you can
        review the app end to end. They take about 10 minutes. Each step lists
        what you should see.
      </p>

      <h3>Before you start</h3>
      <ul>
        <li>
          Use a Slack workspace where you can install apps. Polls are sent to
          every member of a channel, so a channel with{" "}
          <strong>three or more people</strong> shows grouping best. One person
          is enough to see every message.
        </li>
        <li>
          Lunch Buddies doesn&apos;t need any configuration, accounts or
          payment. It&apos;s free.
        </li>
      </ul>

      <h3>1. Install the app</h3>
      <ol>
        <li>
          Open the <a href={INSTALL_URL}>Add to Slack link</a> (also on the{" "}
          <Link href="/">home page</Link>) and approve the install.
        </li>
        <li>
          <strong>Expected:</strong> you&apos;re sent to a &quot;Registration
          Complete!&quot; page, and Lunch Buddies sends you a direct message:
          &quot;Thanks for installing Lunch Buddies! To get started, invite me
          to any channel and say <code>@Lunch Buddies create</code>.&quot;
        </li>
      </ol>

      <h3>2. Add the app to a channel and ask for help</h3>
      <ol>
        <li>
          Create a channel (for example <code>#lunch_buddies</code>) and add a
          few teammates.
        </li>
        <li>
          In that channel, type <code>/invite @Lunch Buddies</code>.
        </li>
        <li>
          Send <code>@Lunch Buddies help</code>.
        </li>
        <li>
          <strong>Expected:</strong> Lunch Buddies replies in the channel with
          instructions for starting and closing a poll.
        </li>
      </ol>

      <h3>3. Start a poll</h3>
      <ol>
        <li>
          In the same channel, send <code>@Lunch Buddies create</code>.
        </li>
        <li>
          <strong>Expected:</strong> Lunch Buddies replies <code>ok!</code> in
          the channel. Within a few seconds, every member of the channel gets a
          direct message from Lunch Buddies: &quot;Are you able to participate
          in Lunch Buddies today?&quot; with the buttons{" "}
          <strong>Yes (12:00)</strong> and <strong>No</strong>.
        </li>
      </ol>

      <h3>4. Answer the poll</h3>
      <ol>
        <li>
          In the direct message, click <strong>Yes (12:00)</strong>. Ask the
          other channel members to answer too, or answer from a second account.
        </li>
        <li>
          <strong>Expected:</strong> the message updates to show &quot;✅ Your
          answer of <code>Yes (12:00)</code> was received!&quot; Clicking again
          changes your answer.
        </li>
      </ol>

      <h3>5. Close the poll and see the groups</h3>
      <ol>
        <li>
          Back in the channel, send <code>@Lunch Buddies close</code>.
        </li>
        <li>
          <strong>Expected:</strong> Lunch Buddies replies <code>ok!</code>,
          then posts a message for each lunch group, mentioning everyone who
          said yes: &quot;Hey @…! This is your group for today. You all should
          meet somewhere at <code>12:00</code>.&quot; A threaded reply names one
          person to pick the location: &quot;@… should pick the location.&quot;
        </li>
        <li>
          If nobody answered, the person who closed the poll gets a direct
          message instead: &quot;No poll responses found&quot;.
        </li>
      </ol>

      <h3>6. Custom times and group sizes</h3>
      <ol>
        <li>
          Send <code>@Lunch Buddies create 1145, 1230 size=2</code>.
        </li>
        <li>
          <strong>Expected:</strong> the direct message offers{" "}
          <strong>Yes (11:45)</strong>, <strong>Yes (12:30)</strong> and{" "}
          <strong>No</strong>.
        </li>
        <li>
          Have three or more people answer, choosing different times, then send{" "}
          <code>@Lunch Buddies close</code>.
        </li>
        <li>
          <strong>Expected:</strong> people are grouped separately for each
          time, into groups of about 2. Group sizes can be 2 to 6 (6 is the
          default).
        </li>
      </ol>

      <h3>7. Error handling</h3>
      <ul>
        <li>
          <strong>Invalid time:</strong> <code>@Lunch Buddies create noon</code>{" "}
          → Lunch Buddies replies{" "}
          <code>
            Failed: Option could not be parsed into a time: &quot;noon&quot;
          </code>
          .
        </li>
        <li>
          <strong>Invalid group size:</strong>{" "}
          <code>@Lunch Buddies create 1200 size=9</code> → replies{" "}
          <code>
            Failed: Size must be between 2 and 6. Received: &quot;9&quot;
          </code>
          .
        </li>
        <li>
          <strong>Two polls in one channel:</strong> send{" "}
          <code>@Lunch Buddies create</code> twice in the same channel without
          closing → the second time, you get a direct message: &quot;There is
          already an active poll&quot;. Each channel can have one open poll at a
          time.
        </li>
        <li>
          <strong>Closing with no open poll:</strong> send{" "}
          <code>@Lunch Buddies close</code> in a channel with no open poll →
          replies &quot;No poll found&quot;.
        </li>
      </ul>

      <h3>8. Slash commands (optional)</h3>
      <p>
        <code>/lunch_buddies_create</code> and <code>/lunch_buddies_close</code>{" "}
        work like <code>@Lunch Buddies create</code> / <code>close</code>, but
        always poll the channel named <code>#lunch_buddies</code>. They can be
        used from anywhere.
      </p>
      <ol>
        <li>
          Make sure a <code>#lunch_buddies</code> channel exists, you&apos;re a
          member, and Lunch Buddies has been invited to it.
        </li>
        <li>
          Run <code>/lunch_buddies_create</code>, answer the direct message,
          then run <code>/lunch_buddies_close</code>.
        </li>
        <li>
          <strong>Expected:</strong> the same poll and group messages as steps 3
          to 5, in <code>#lunch_buddies</code>. Without a{" "}
          <code>#lunch_buddies</code> channel, Lunch Buddies sends you a direct
          message explaining how to create one.
        </li>
      </ol>

      <h3>9. Uninstall</h3>
      <p>
        Remove Lunch Buddies from the workspace (
        <strong>Settings &amp; administration → Manage apps</strong>). Its
        access token for the workspace is deleted immediately. See the{" "}
        <Link href="/#privacy">privacy policy</Link> for what is stored and how
        to request deletion.
      </p>

      <h3>Permissions used</h3>
      <ul>
        <li>
          <code>app_mentions:read</code>: receive{" "}
          <code>@Lunch Buddies create</code>, <code>close</code> and{" "}
          <code>help</code>.
        </li>
        <li>
          <code>channels:read</code>: list the members of a public channel to
          poll, and find <code>#lunch_buddies</code> for the slash commands.
        </li>
        <li>
          <code>groups:read</code>: list the members of a private channel the
          app has been invited to.
        </li>
        <li>
          <code>chat:write</code>: send poll direct messages, replies and group
          announcements.
        </li>
        <li>
          <code>commands</code>: the <code>/lunch_buddies_create</code> and{" "}
          <code>/lunch_buddies_close</code> slash commands.
        </li>
      </ul>

      <h3>Questions</h3>
      <p>
        If anything doesn&apos;t work as described, please email{" "}
        <a href="mailto:support@lunchbuddiesapp.com">
          support@lunchbuddiesapp.com
        </a>
        .
      </p>
    </>
  );
}
