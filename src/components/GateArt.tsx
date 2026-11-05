/* Hand-drawn SVG art for the welcome gate: namaste woman, Ayurvedic ingredients, carved door mandala. */

export function Namaste({ className = "" }: { className?: string }) {
  const skin = "#ebb78f", skinDark = "#c98d63", hair = "#1f1410";
  return (
    <svg viewBox="0 0 240 300" className={className} role="img" aria-label="A woman greeting you with Namaste">
      <defs>
        <radialGradient id="glow" cx="50%" cy="45%" r="55%"><stop offset="0" stopColor="#ffe6b0" /><stop offset="1" stopColor="#ffe6b0" stopOpacity="0" /></radialGradient>
      </defs>
      <circle cx="120" cy="140" r="130" fill="url(#glow)" />
      <g className="namaste-bow" style={{ transformOrigin: "120px 300px" }}>
        {/* hair back + bun + jasmine */}
        <ellipse cx="120" cy="90" rx="50" ry="56" fill={hair} />
        <circle cx="120" cy="32" r="22" fill={hair} />
        {[[100, 42], [110, 28], [124, 24], [138, 32], [146, 46]].map(([x, y], i) => (
          <g key={i}><circle cx={x} cy={y} r="6" fill="#fffaf0" /><circle cx={x} cy={y} r="2" fill="#f3c969" /></g>
        ))}
        {/* neck */}
        <rect x="107" y="124" width="26" height="40" fill="#d9a077" />
        {/* saree body */}
        <path d="M44 300 C44 212 68 172 108 162 L132 162 C172 172 196 212 196 300Z" fill="#1f8a78" />
        <path d="M44 300 C44 262 50 236 60 216" stroke="#f2c14e" strokeWidth="5" fill="none" />
        <path d="M196 300 C196 262 190 236 180 216" stroke="#f2c14e" strokeWidth="5" fill="none" />
        {/* blouse */}
        <path d="M66 196 C76 172 98 162 108 162 L132 162 C142 162 164 172 174 196 L164 210 L76 210Z" fill="#c2415a" />
        {/* pallu */}
        <path d="M84 176 C108 172 120 186 132 204 L198 282 L198 300 L146 300 L96 214Z" fill="#f0a43a" />
        <path d="M84 176 C108 172 120 186 132 204 L198 282" stroke="#fff3c4" strokeWidth="3" fill="none" />
        {/* neckline */}
        <path d="M104 160 Q120 186 136 160Z" fill={skin} />
        <path d="M108 172 Q120 182 132 172" stroke="#f2c14e" strokeWidth="2.5" fill="none" />
        {/* arms into namaste */}
        <path d="M78 198 L70 224" stroke="#c2415a" strokeWidth="26" strokeLinecap="round" />
        <path d="M162 198 L170 224" stroke="#c2415a" strokeWidth="26" strokeLinecap="round" />
        <path d="M72 228 L66 252 L112 220" stroke={skin} strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M168 228 L174 252 L128 220" stroke={skin} strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        {/* bangles */}
        <circle cx="76" cy="244" r="8" fill="none" stroke="#f2c14e" strokeWidth="3" />
        <circle cx="164" cy="244" r="8" fill="none" stroke="#f2c14e" strokeWidth="3" />
        {/* joined palms */}
        <path d="M120 164 C134 180 137 206 120 232 C103 206 106 180 120 164Z" fill={skin} stroke={skinDark} strokeWidth="2" />
        <path d="M120 170 V228" stroke={skinDark} strokeWidth="1.8" />
        {/* head sways gently */}
        <g className="namaste-head" style={{ transformOrigin: "120px 130px" }}>
          <ellipse cx="86" cy="96" rx="5" ry="8" fill={skin} />
          <ellipse cx="154" cy="96" rx="5" ry="8" fill={skin} />
          <circle cx="86" cy="108" r="3.5" fill="#f2c14e" />
          <circle cx="154" cy="108" r="3.5" fill="#f2c14e" />
          <ellipse cx="120" cy="90" rx="34" ry="40" fill={skin} />
          <path d="M84 84 C84 46 156 46 156 84 C142 64 98 64 84 84Z" fill={hair} />
          <path d="M120 52 V66" stroke="#3a2418" strokeWidth="2" />
          <path d="M100 82 Q108 76 116 80M124 80 Q132 76 140 82" stroke="#2a1810" strokeWidth="2.6" strokeLinecap="round" fill="none" />
          <path d="M101 93 Q108 99 115 93M125 93 Q132 99 139 93" stroke="#2a1810" strokeWidth="2.6" strokeLinecap="round" fill="none" />
          <path d="M120 94 Q117 104 121 106" stroke={skinDark} strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M108 115 Q120 127 132 115" stroke="#b0413e" strokeWidth="3.4" strokeLinecap="round" fill="none" />
          <circle cx="120" cy="72" r="3.2" fill="#c81d3a" />
          <circle cx="102" cy="108" r="7" fill="#f08a8a" opacity=".22" />
          <circle cx="138" cy="108" r="7" fill="#f08a8a" opacity=".22" />
        </g>
      </g>
    </svg>
  );
}

export type Ing = "Tulsi" | "Neem" | "Haldi" | "Padma" | "Amla" | "Dalchini" | "Kesar" | "Deepam";
export const INGREDIENTS: Ing[] = ["Tulsi", "Neem", "Haldi", "Padma", "Amla", "Dalchini", "Kesar", "Deepam"];

export function Ingredient({ name, className = "" }: { name: Ing; className?: string }) {
  const body = {
    Tulsi: (<><path d="M32 5C50 14 55 36 32 60 9 36 14 14 32 5Z" fill="#5aa05a" /><path d="M32 10V58M32 24l10-8M32 36l11-9M32 24l-10-8M32 36l-11-9" stroke="#2f6b3a" strokeWidth="2" fill="none" /></>),
    Neem: (<><path d="M32 60C32 40 34 22 40 6" stroke="#4d7a3a" strokeWidth="3" fill="none" />{[[34, 48, -30], [36, 38, 30], [37, 28, -30], [39, 18, 30], [34, 52, 40], [38, 33, -45]].map(([x, y, r], i) => <ellipse key={i} cx={x + (r > 0 ? 8 : -8)} cy={y} rx="9" ry="3.6" transform={`rotate(${r} ${x} ${y})`} fill={i % 2 ? "#6aa84f" : "#4f8f3d"} />)}</>),
    Haldi: (<><g transform="rotate(-28 32 32)"><rect x="6" y="22" width="48" height="19" rx="9.5" fill="#e8a317" /><path d="M20 22v19M30 22v19M40 22v19" stroke="#b97a0a" strokeWidth="2" /></g><g transform="rotate(20 32 46)"><rect x="14" y="42" width="30" height="13" rx="6.5" fill="#f2b632" /></g></>),
    Padma: (<><ellipse cx="32" cy="56" rx="18" ry="4" fill="#5aa05a" /><path d="M32 8C44 22 44 42 32 54 20 42 20 22 32 8Z" fill="#f6a5c0" /><path d="M32 54C16 50 8 36 10 24 26 28 34 40 32 54Z" fill="#f9c0d3" /><path d="M32 54C48 50 56 36 54 24 38 28 30 40 32 54Z" fill="#f9c0d3" /><circle cx="32" cy="46" r="3" fill="#f6c453" /></>),
    Amla: (<><path d="M30 14C34 8 42 8 46 12" stroke="#4d7a3a" strokeWidth="3" fill="none" /><circle cx="22" cy="40" r="14" fill="#a8c75a" /><circle cx="42" cy="38" r="14" fill="#8fb546" /><circle cx="32" cy="26" r="12" fill="#b9d46a" /><circle cx="18" cy="35" r="4" fill="#fff" opacity=".35" /><ellipse cx="46" cy="12" rx="8" ry="3.5" transform="rotate(-25 46 12)" fill="#5aa05a" /></>),
    Dalchini: (<><g stroke="#8a4f26" strokeWidth="9" strokeLinecap="round"><path d="M14 50L46 14" /><path d="M24 54L54 24" /></g><g stroke="#b9743c" strokeWidth="3" strokeLinecap="round"><path d="M14 50L46 14" /><path d="M24 54L54 24" /></g><circle cx="46" cy="14" r="4.5" fill="#6d3a18" /><circle cx="54" cy="24" r="4.5" fill="#6d3a18" /></>),
    Kesar: (<><path d="M32 52C16 46 12 26 22 14 28 24 32 36 32 52Z" fill="#9b6fd0" /><path d="M32 52C48 46 52 26 42 14 36 24 32 36 32 52Z" fill="#8559c0" /><path d="M32 54C24 40 24 22 32 8 40 22 40 40 32 54Z" fill="#b48ae0" /><path d="M32 40C26 26 22 18 18 12M32 40C32 26 32 18 32 8M32 40C38 26 42 18 46 12" stroke="#d9322b" strokeWidth="2.5" strokeLinecap="round" fill="none" /></>),
    Deepam: (<><path className="flame" style={{ transformOrigin: "32px 40px" }} d="M32 8C42 20 40 32 32 40 24 32 22 20 32 8Z" fill="#ffb02e" /><path d="M32 22C36 28 35 34 32 38 29 34 28 28 32 22Z" fill="#fff3b0" /><path d="M8 42C12 56 22 60 32 60S52 56 56 42Z" fill="#c8602b" /><path d="M8 42H56" stroke="#f2c14e" strokeWidth="3" /></>),
  }[name];
  return <svg viewBox="0 0 64 64" className={className} aria-hidden>{body}</svg>;
}

/** Gold lotus-mandala, drawn centred so half sits on each door. */
export function Mandala({ className = "" }: { className?: string }) {
  const petals = Array.from({ length: 16 }, (_, i) => i * 22.5);
  return (
    <svg viewBox="-100 -100 200 200" className={className} aria-hidden>
      <defs>
        <radialGradient id="brass" cx="35%" cy="30%" r="80%"><stop offset="0" stopColor="#ffe9a8" /><stop offset=".5" stopColor="#d9a93e" /><stop offset="1" stopColor="#8a5f16" /></radialGradient>
      </defs>
      <circle r="96" fill="none" stroke="url(#brass)" strokeWidth="3" />
      <circle r="88" fill="rgba(30,15,5,.35)" stroke="url(#brass)" strokeWidth="1.5" />
      {petals.map((a) => <path key={a} transform={`rotate(${a})`} d="M0 -84C9 -66 9 -50 0 -36 -9 -50 -9 -66 0 -84Z" fill="none" stroke="url(#brass)" strokeWidth="2" />)}
      {petals.map((a) => <path key={"i" + a} transform={`rotate(${a + 11.25})`} d="M0 -60C6 -48 6 -38 0 -28 -6 -38 -6 -48 0 -60Z" fill="url(#brass)" opacity=".85" />)}
      <circle r="24" fill="none" stroke="url(#brass)" strokeWidth="2.5" />
      <circle r="14" fill="url(#brass)" />
      {petals.map((a) => <circle key={"d" + a} transform={`rotate(${a}) translate(0 -92)`} r="2" fill="#ffe9a8" />)}
    </svg>
  );
}
