import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot__grid">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/logo/trooba-flow-light.svg"
              alt="Trooba Flow"
              width={311}
              height={54}
            />
            <p className="body u-mt6" style={{ maxWidth: "34ch" }}>
              Factory Flow Intelligence. Software that shows manufacturers how
              work actually moves through their factories.
            </p>
          </div>
          <div>
            <h2>Trooba Flow</h2>
            <ul>
              <li>
                <Link href="/how-it-works">How it works</Link>
              </li>
              <li>
                <Link href="/proof">Proof</Link>
              </li>
              <li>
                <Link href="/flow-analysis">Request a Flow Analysis</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2>Company</h2>
            <ul>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/trooba">LinkedIn</a>
              </li>
              <li>
                <Link href="/privacy">Privacy</Link>
              </li>
              <li>
                <Link href="/terms">Terms</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="foot__base">
          <p>&copy; 2026 Trooba. All Rights Reserved.
Trooba is owned and operated by
Techsprout AI Labs Private Limited.</p>
          
        </div>
      </div>
    </footer>
  );
}
