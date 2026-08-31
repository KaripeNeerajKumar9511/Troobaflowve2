import Link from "next/link";
import type { SiteBundle } from "@/lib/cms";

export function SiteFooter({ site }: { site: SiteBundle }) {
  const logo = site.logo_url || "/assets/logo/trooba-flow-light.svg";
  const footer = site.footer || {};
  const columns = footer.columns || [];

  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot__grid">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logo} alt="Trooba Flow" width={311} height={54} />
            <p className="body u-mt6" style={{ maxWidth: "34ch" }}>
              {footer.tagline}
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.heading}>
              <h2>{col.heading}</h2>
              <ul>
                {col.links.map((link) => (
                  <li key={link.href + link.label}>
                    {link.external ? (
                      <a href={link.href}>{link.label}</a>
                    ) : (
                      <Link href={link.href}>{link.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="foot__base">
          <p style={{ whiteSpace: "pre-line" }}>{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
