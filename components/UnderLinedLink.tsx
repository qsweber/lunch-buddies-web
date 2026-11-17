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
  // trailingSlash: true means the router may report "/pricing/".
  const isActive = router.pathname.replace(/\/$/, "") === pathName;
  return (
    <Link
      href={pathName}
      style={{
        textDecoration: isActive ? "underline" : "none",
        color: "inherit",
        marginLeft: "20px",
        fontWeight: 600,
      }}
    >
      {title}
    </Link>
  );
};

export default UnderLinedLink;
