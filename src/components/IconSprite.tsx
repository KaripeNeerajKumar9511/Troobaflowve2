/** Shared pictogram sprite from the original static site. */
export function IconSprite() {
  return (
    <svg
      className="vh"
      aria-hidden="true"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <symbol id="pg-bottleneck" viewBox="0 0 32 32">
          <path d="M2 6h9M2 16h9M2 26h9" />
          <path d="M11 6c4 0 4 8 7 10M11 16h7M11 26c4 0 4-8 7-10" />
          <rect className="on" x="18.5" y="12" width="5" height="8" />
          <path className="on" d="M23.5 16H30" />
        </symbol>

        <symbol id="pg-queue" viewBox="0 0 32 32">
          <rect x="22" y="9" width="8" height="14" />
          <path d="M2 16h1.5" />
          <rect x="5" y="13" width="5" height="6" />
          <rect x="11.5" y="13" width="5" height="6" />
          <rect className="on" x="18" y="13" width="2.5" height="6" />
        </symbol>

        <symbol id="pg-variability" viewBox="0 0 32 32">
          <path d="M2 22h28" />
          <path d="M4 22v-6M7.5 22v-11M15 22v-8M17.5 22v-14M25 22v-9" />
          <path className="on" d="M29 22V8" />
        </symbol>

        <symbol id="pg-capacity" viewBox="0 0 32 32">
          <rect className="on" x="2" y="4" width="28" height="5" />
          <rect className="on" x="2" y="12" width="17" height="5" />
          <rect className="ctx" x="2" y="20" width="9" height="5" />
          <path className="ctx" d="M2 28h28" />
        </symbol>

        <symbol id="pg-leadtime" viewBox="0 0 32 32">
          <path d="M2 8v16M30 8v16" />
          <path d="M2 16h28" />
          <rect x="6" y="12" width="4" height="8" className="fillnode" />
          <rect x="19" y="12" width="3" height="8" className="fillnode" />
          <path className="on" d="M10 26h9M10 24v4M19 24v4" />
        </symbol>

        <symbol id="pg-scenario" viewBox="0 0 32 32">
          <rect x="20" y="3" width="10" height="9" />
          <rect x="2" y="5.5" width="4" height="4" />
          <rect x="7.5" y="5.5" width="4" height="4" />
          <rect x="13" y="5.5" width="4" height="4" />
          <rect className="on" x="20" y="20" width="10" height="9" />
          <rect x="13" y="22.5" width="4" height="4" />
          <path className="on" d="M2 24.5h9" />
        </symbol>

        <symbol id="pg-routing" viewBox="0 0 32 32">
          <rect x="2" y="3" width="8" height="7" />
          <rect x="22" y="3" width="8" height="7" />
          <rect x="2" y="22" width="8" height="7" />
          <rect x="22" y="22" width="8" height="7" />
          <path className="on" d="M10 6.5h12M26 10v12M22 25.5H10" />
        </symbol>

        <symbol id="pg-wip" viewBox="0 0 32 32">
          <path d="M2 27h28" />
          <rect x="4" y="21" width="6" height="6" />
          <rect x="4" y="15" width="6" height="6" />
          <rect x="13" y="21" width="6" height="6" />
          <rect className="on" x="22" y="21" width="6" height="6" />
          <rect className="on" x="22" y="15" width="6" height="6" />
          <rect className="on" x="22" y="9" width="6" height="6" />
        </symbol>
      </defs>
    </svg>
  );
}
