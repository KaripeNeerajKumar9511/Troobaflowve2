import { IconSprite } from "./IconSprite";
import { SiteBehaviors } from "./SiteBehaviors";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

type SiteShellProps = {
  current?: "how-it-works" | "proof" | "about" | null;
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
