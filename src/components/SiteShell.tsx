import { getSite } from "@/lib/cms";
import { IconSprite } from "./IconSprite";
import { SiteBehaviors } from "./SiteBehaviors";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader, type NavCurrent } from "./SiteHeader";

type SiteShellProps = {
  current?: NavCurrent;
  children: React.ReactNode;
};

export async function SiteShell({ current = null, children }: SiteShellProps) {
  const site = await getSite();
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader current={current} site={site} />
      <IconSprite />
      {children}
      <SiteFooter site={site} />
      <SiteBehaviors />
    </>
  );
}
