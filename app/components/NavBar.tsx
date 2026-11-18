"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "@emotion/styled";

const Header = styled.header(() => ({
  display: "flex",
  marginTop: "1.5rem",
}));

const Logo = styled.img(() => ({
  height: 40,
  borderRadius: 5,
}));

const Nav = styled.nav(() => ({
  marginLeft: "auto",
  marginTop: "auto",
  marginBottom: "auto",
}));

const NavLink = styled(Link, {
  shouldForwardProp: (prop) => prop !== "$isActive",
})<{ $isActive: boolean }>(({ $isActive }) => ({
  textDecoration: $isActive ? "underline" : "none",
  color: "inherit",
  marginLeft: 20,
  fontWeight: 600,
}));

const links = [
  { href: "/how_it_works", title: "How It Works" },
  { href: "/pricing", title: "Pricing" },
];

export function NavBar() {
  const rawPathname = usePathname();
  // trailingSlash: true means the path may or may not end in "/".
  const pathname =
    rawPathname && rawPathname !== "/" && rawPathname.endsWith("/")
      ? rawPathname.slice(0, -1)
      : rawPathname;

  return (
    <Header>
      <Link href="/">
        <Logo src="/img/logo.png" alt="Lunch Buddies" />
      </Link>
      <Nav>
        {links.map(({ href, title }) => (
          <NavLink key={href} href={href} $isActive={pathname === href}>
            {title}
          </NavLink>
        ))}
      </Nav>
    </Header>
  );
}
