import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h2>Nothing to see here!</h2>
      <p>
        <Link href="/">Go to the home page</Link>
      </p>
    </>
  );
}
