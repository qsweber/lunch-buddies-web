import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  title: string;
  children: any;
}

const Layout: React.FunctionComponent<Props> = (props: Props) => {
  const links = [
    {
      href: '/',
      text: 'Home',
    },
    {
      href: '/start',
      text: 'Start',
    },
  ];

  return (
    <div>
      <Head>
        <title>{props.title} | Lunch Buddies</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav>
          {
            links.map(l => (
              <Link href={l.href}>
                <a>{l.text} </a>
              </Link>
            ))
          }
        </nav>
      </header>
      {props.children}
    </div>
  );
}

export default Layout
