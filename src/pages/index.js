import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css';
import utilStyles from './../styles/utils.module.css';

import { getSortedTranxData } from '@/lib/transactions';

const inter = Inter({ subsets: ['latin'] });

export async function getStaticProps() {
  const allTranxData = getSortedTranxData();
  return {
    props: {
      allTranxData,
    },
  };
}

export default function Home({ allTranxData }) {
  return (
    <>
      <Head>
        <title>BAM Financial Dashboard</title>
        <meta name="description" content="Dashboard of BAM Money" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <Link href="/transactions/expenses">Debits</Link>
          <h2>
            <Link href="/transactions/income">Credits</Link>
          </h2>
          <div>
            <a
              href="/dashboard"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign In{' '}
              <Image
                src="/images/sign_in.png"
                alt="Sign In Image"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/images/BAM_dashboard.png"
            alt="BAM Financial Dashboard Image"
            width={180}
            height={37}
            priority
          />
          <div className={utilStyles.borderCircle}>
            <Image
              src="/images/profile.png"
              alt="BAM Profile Image"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <Link
            href="/transactions/azfcu"
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
            $10000 <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
            AZFCU.
            </p>
          </Link>

          <Link
            href="/transactions/greenwood"
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
            $100,000 <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
            GREENWOOD BANK.
            </p>
          </Link>

          <Link
            href="/transactions/onb"
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
            $10,000 <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
            ONE UNITED BANK.
            </p>
          </Link>

          <Link
            href="/transactions/tcu"
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
            $10,000,000 <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
            TEACHER'S CREDIT UNION.
            </p>
          </Link>
        </div>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Accounts</h2>
          <ul className={utilStyles.list}>
            {allTranxData.map(({id, date, balance, title}) => (
              <li className={utilStyles.listItem} key={id}>
                {title}
                <br/>
                {id}
                <br/>
                {date}
                <br/>
                {balance}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  )
}
