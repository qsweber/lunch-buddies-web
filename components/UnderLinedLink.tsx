import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  pathName: string;
  title: string;
};

const UnderLinedLink: React.FunctionComponent<Props> = ({
  pathName,
  title,
}) => {
  const router = useRouter();
  return (
    <Link href={pathName}>
      <a
        style={{
          textDecoration: router.pathname === pathName ? "underline" : "none",
          color: "inherit",
          marginLeft: "20px",
          fontWeight: 600,
        }}
      >
        {title}
      </a>
    </Link>
  );
};

export default UnderLinedLink;
