import Link from "next/link";

type SiteHeaderProps = {
  current?: "how-it-works" | "proof" | "about" | null;
};

export function SiteHeader({ current = null }: SiteHeaderProps) {
  return (
    <header className="nav" data-nav>
      <div className="wrap">
        <div className="nav__inner">
          <Link className="nav__logo" href="/" aria-label="Trooba Flow — home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/logo/trooba-flow-light.svg"
              alt="Trooba Flow"
              width={311}
              height={54}
            />
          </Link>
          <nav className="nav__links" aria-label="Primary">
            <Link
              href="/how-it-works"
              {...(current === "how-it-works" ? { "aria-current": "page" as const } : {})}
            >
              How It Works
            </Link>
            <Link
              href="/proof"
              {...(current === "proof" ? { "aria-current": "page" as const } : {})}
            >
              Case Studies
            </Link>
            <Link
              href="/about"
              {...(current === "about" ? { "aria-current": "page" as const } : {})}
            >
              About
            </Link>
          </nav>
          <div className="nav__right">
            {/* <a className="nav__login" href="https://app.trooba.com">
              Log in
            </a> */}
            <Link className="btn btn--primary nav__cta" href="/flow-analysis">
              Request a Flow Analysis
            </Link>
          </div>
          <button
            className="nav__toggle"
            data-nav-toggle
            aria-expanded="false"
            aria-controls="nav-drawer"
            aria-label="Open menu"
            type="button"
          >
            <svg width="20" height="14" viewBox="0 0 20 14" aria-hidden="true">
              <rect y="0" width="20" height="1.5" />
              <rect y="6.25" width="20" height="1.5" />
              <rect y="12.5" width="20" height="1.5" />
            </svg>
          </button>
        </div>
      </div>
      <div className="nav__drawer" id="nav-drawer" data-nav-drawer>
        <div className="wrap">
          <nav aria-label="Primary, mobile">
            <Link
              href="/how-it-works"
              {...(current === "how-it-works" ? { "aria-current": "page" as const } : {})}
            >
              How It Works
            </Link>
            <Link
              href="/proof"
              {...(current === "proof" ? { "aria-current": "page" as const } : {})}
            >
              Proof
            </Link>
            <Link
              href="/about"
              {...(current === "about" ? { "aria-current": "page" as const } : {})}
            >
              About
            </Link>
            {/* <a href="https://app.trooba.com">Log in</a> */}
          </nav>
          <Link className="btn btn--primary btn--lg" href="/flow-analysis">
            Request a Flow Analysis
          </Link>
        </div>
      </div>
    </header>
  );
}
