"use client";

import { useEffect, useId, useRef, useState } from "react";

export type PortalSelectOption = string | { value: string; label: string };

type PortalSelectProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: readonly PortalSelectOption[];
  error?: string;
  placeholder?: string;
};

function optionValue(opt: PortalSelectOption): string {
  return typeof opt === "string" ? opt : opt.value;
}

function optionLabel(opt: PortalSelectOption): string {
  return typeof opt === "string" ? opt : opt.label;
}

export function PortalSelect({
  id,
  label,
  value,
  onChange,
  options,
  error,
  placeholder = "Select…",
}: PortalSelectProps) {
  const listId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const selected = options.find((o) => optionValue(o) === value);
  const display = selected ? optionLabel(selected) : placeholder;

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const idx = options.findIndex((o) => optionValue(o) === value);
    setActiveIndex(idx >= 0 ? idx : 0);
  }, [open, options, value]);

  const choose = (next: string) => {
    onChange(next);
    setOpen(false);
  };

  const onTriggerKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen(true);
    }
  };

  const onListKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(options.length - 1, Math.max(0, i) + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(0, (i < 0 ? 0 : i) - 1));
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (activeIndex >= 0 && activeIndex < options.length) {
        choose(optionValue(options[activeIndex]));
      }
    } else if (e.key === "Home") {
      e.preventDefault();
      setActiveIndex(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setActiveIndex(options.length - 1);
    }
  };

  return (
    <div className="field" ref={rootRef}>
      <label id={`${id}-label`} htmlFor={id}>
        {label}
      </label>
      <div className={`psel${open ? " is-open" : ""}${error ? " is-invalid" : ""}`}>
        <button
          type="button"
          id={id}
          className="psel__trigger"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={listId}
          aria-labelledby={`${id}-label`}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-err` : undefined}
          onClick={() => setOpen((o) => !o)}
          onKeyDown={onTriggerKeyDown}
        >
          <span className={value ? "psel__value" : "psel__placeholder"}>
            {display}
          </span>
          <span className="psel__chev" aria-hidden="true">
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path
                d="M1.5 1.75 L6 6.25 L10.5 1.75"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>

        {open ? (
          <ul
            id={listId}
            className="psel__list"
            role="listbox"
            aria-labelledby={`${id}-label`}
            tabIndex={-1}
            onKeyDown={onListKeyDown}
          >
            {options.map((opt, index) => {
              const v = optionValue(opt);
              const l = optionLabel(opt);
              const selectedOpt = v === value;
              const active = index === activeIndex;
              return (
                <li
                  key={v}
                  id={`${id}-opt-${index}`}
                  role="option"
                  aria-selected={selectedOpt}
                  className={`psel__option${selectedOpt ? " is-selected" : ""}${active ? " is-active" : ""}`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    choose(v);
                  }}
                >
                  {l}
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>
      {error ? (
        <p className="err" id={`${id}-err`} role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
