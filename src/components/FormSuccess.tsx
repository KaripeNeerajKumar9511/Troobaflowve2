"use client";

import { useEffect, useRef } from "react";

type FormSuccessProps = {
  title?: string;
  children: React.ReactNode;
};

/** Shared post-submit success panel with animated checkmark. */
export function FormSuccess({
  title = "Request received.",
  children,
}: FormSuccessProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <div
      ref={ref}
      className="panel form-success"
      data-form-done
      tabIndex={-1}
    >
      <div className="form-success__mark" aria-hidden="true">
        <svg className="form-success__svg" viewBox="0 0 52 52">
          <circle className="form-success__circle" cx="26" cy="26" r="24" />
          <path
            className="form-success__check"
            d="M15.5 27.2 L23.2 34.5 L36.8 18.5"
          />
        </svg>
      </div>
      <h2 className="h3">{title}</h2>
      <div className="body u-mt4 form-success__copy">{children}</div>
    </div>
  );
}
