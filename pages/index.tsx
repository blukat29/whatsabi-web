import type { NextPage } from 'next';
import Footer from '../components/Footer';
import HeadMeta from '../components/HeadMeta';

// TODO: Using Next's <Link> component for navigation is not showing loading state
/* eslint-disable @next/next/no-html-link-for-pages */

const Home: NextPage = () => {
  return (
    <div className="container">
      <HeadMeta title="ABI for unverified contracts" description="Guess ABI of any Ethereum contract" />

      <main className="main">
        <h1 className="title">Get ABI for unverified contracts (Klaytn Cypress)</h1>

        <p className="description">
          Guess ABI of any EVM contract, even if it is not verified on KlaytnFinder/KlaytnScope. Works by analyzing the bytecode,
          extracting selectors from PUSH4/JUMPI instructions and comparing them to known ABI signatures.
        </p>

        <form action="/search" method="get">
          <input
            name="address"
            type="search"
            placeholder="0x123...abc"
            required
            autoFocus
            autoCapitalize="none"
            autoCorrect="false"
            spellCheck="false"
            autoComplete="off"
          />
          <button type="submit">→</button>
        </form>
        <p className="description">Or try some examples:</p>
        <p className="description">
          <a href="/cypress/0xcee8faf64bb97a73bb51e115aa89c17ffa8dd167">0xcee8faf64bb97a73bb51e115aa89c17ffa8dd167 (oUSDT)</a>
          <br />
          <a href="/cypress/0x5a7a5ef2a189d4b6fac6bcf9a9b533f9b9ca719e">0x5a7a5ef2a189d4b6fac6bcf9a9b533f9b9ca719e (CnStakingV2)</a>
          <br />
          <a href="/cypress/0xd5ad6d61dd87edabe2332607c328f5cc96aecb95">0xd5ad6d61dd87edabe2332607c328f5cc96aecb95 (TreasuryRebalance)</a>
        </p>

        <Footer />
      </main>
      <style jsx>{`
        .main {
          padding: 2rem;
          max-width: 80ch;
        }
        form {
          display: flex;
        }
        input {
          width: 100%;
          padding: 0.5rem;
          font-size: 1.5rem;
        }
        button {
          width: 50px;
        }
      `}</style>
    </div>
  );
};

export default Home;
