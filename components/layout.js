import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <title>Cat Info Directory</title>
      </Head>
      <header>
        <nav>
          
        </nav>
      </header>
      <main>
        {children}
      </main>
      {!home && (
        <div className="navigation">
          <Link href="/">
            <a className="btn btn-primary mt-3">Back to Home</a>
          </Link>
        </div>
      )}
      <footer>
        <p>We love our Vet Clinic</p>
        </footer>
    </div>
  );
}