import { IconSprite } from "./IconSprite";
import { SiteBehaviors } from "./SiteBehaviors";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader, type NavCurrent } from "./SiteHeader";

type SiteShellProps = {
  current?: NavCurrent;
  children: React.ReactNode;
};

export function SiteShell({ current = null, children }: SiteShellProps) {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader current={current} />
      <IconSprite />
      {children}
      <SiteFooter />
      <SiteBehaviors />
    </>
  );
}
