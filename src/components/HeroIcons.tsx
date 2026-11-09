/* Line icons for the hero (stroke = currentColor so they follow the green brand colour). */
const base = { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true } as const;

export const PhoneIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} strokeWidth="1.9" {...base}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
  </svg>
);

export const WhatsAppIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} strokeWidth="1.8" {...base}>
    <path d="M3 21l1.65-4.95A8.5 8.5 0 1 1 8 19.3L3 21z" />
    <path d="M9 9.2c.4 2.6 2.9 5.1 5.6 5.6l1.3-1.3-1.9-1-.8.7c-.9-.4-1.8-1.3-2.2-2.2l.7-.8-1-1.9L9 9.2z" />
  </svg>
);

export const ArrowIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} strokeWidth="2" {...base}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);

const feat = { viewBox: "0 0 40 40", strokeWidth: "1.7", ...base } as const;
export const LotusLine = ({ className = "h-10 w-10" }: { className?: string }) => (
  <svg className={className} {...feat}>
    <path d="M20 6c6 7 6 17 0 25-6-8-6-18 0-25z" /><path d="M20 31C12 30 6 24 6 15c7 1 12 7 14 16zM20 31c8-1 14-7 14-16-7 1-12 7-14 16z" /><path d="M9 35h22" />
  </svg>
);
export const MortarLine = ({ className = "h-10 w-10" }: { className?: string }) => (
  <svg className={className} {...feat}>
    <path d="M7 21h26c0 8-5 13-13 13S7 29 7 21z" /><path d="M23 19l9-12" /><path d="M13 19c0-6 4-10 9-10 0 6-3 9-9 10z" />
  </svg>
);
export const CareLine = ({ className = "h-10 w-10" }: { className?: string }) => (
  <svg className={className} {...feat}>
    <circle cx="20" cy="11" r="4.5" /><path d="M10 30c0-6 4-10 10-10s10 4 10 10" /><path d="M7 33c4 4 22 4 26 0" />
  </svg>
);
export const LeafLine = ({ className = "h-10 w-10" }: { className?: string }) => (
  <svg className={className} {...feat}>
    <path d="M32 7C15 7 7 17 9 33c15 1 25-8 23-26z" /><path d="M9 33L24 16" />
  </svg>
);
