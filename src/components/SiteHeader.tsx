import Link from "next/link";
import type { NavItem, SiteBundle } from "@/lib/cms";

export type NavCurrent =
  | "how-it-works"
  | "proof"
  | "about"
  | "solutions"
  | "ai-capabilities"
  | null;

type SiteHeaderProps = {
  current?: NavCurrent;
  site: SiteBundle;
};

export function SiteHeader({ current = null, site }: SiteHeaderProps) {
  const logo = site.logo_url || "/assets/logo/trooba-flow-light.svg";
  const nav = site.nav || [];
  const cta = site.footer?.cta || {
    label: "Request a Flow Analysis",
    href: "/flow-analysis",
  };

  return (
    <header className="nav" data-nav>
      <div className="wrap">
        <div className="nav__inner">
          <Link className="nav__logo" href="/" aria-label="Trooba Flow — home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logo} alt="Trooba Flow" width={311} height={54} />
          </Link>
          <nav className="nav__links" aria-label="Primary">
            {nav.map((item) => (
              <NavLink key={item.href} item={item} current={current} />
            ))}
          </nav>
          <div className="nav__right">
            <Link className="btn btn--primary nav__cta" href={cta.href}>
              {cta.label}
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
            {nav.map((item) => (
              <NavLink
                key={`m-${item.href}`}
                item={item}
                current={current}
                mobile
              />
            ))}
          </nav>
          <Link className="btn btn--primary btn--lg" href={cta.href}>
            {cta.label}
          </Link>
        </div>
      </div>
    </header>
  );
}

function NavLink({
  item,
  current,
  mobile,
}: {
  item: NavItem;
  current: NavCurrent;
  mobile?: boolean;
}) {
  const active = current && item.current === current;
  return (
    <Link
      href={item.href}
      {...(active ? { "aria-current": "page" as const } : {})}
    >
      {mobile ? item.mobileLabel || item.label : item.label}
    </Link>
  );
}
