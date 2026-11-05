/* Hand-drawn SVG art for the welcome gate: namaste woman, Ayurvedic ingredients, carved door mandala. */

export function Namaste({ className = "" }: { className?: string }) {
  const skin = "#eab48c", skinDark = "#c98d63", hair = "#1d120d", gold = "#f2c14e";
  const back = [-84, -60, -36, -12, 12, 36, 60, 84];
  const front = [-50, -25, 0, 25, 50];
  const petal = "M0 0 C-17 -12 -18 -38 0 -54 C18 -38 17 -12 0 0Z";
  return (
    <svg viewBox="0 0 240 300" className={className} role="img" aria-label="A woman greeting you with Namaste, rising from a lotus">
      <defs>
        <radialGradient id="nm-glow" cx="50%" cy="45%" r="55%"><stop offset="0" stopColor="#ffe6b0" /><stop offset="1" stopColor="#ffe6b0" stopOpacity="0" /></radialGradient>
        <linearGradient id="nm-petal-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ffc2d6" /><stop offset="1" stopColor="#fff1f5" /></linearGradient>
        <linearGradient id="nm-petal-f" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#f2679a" /><stop offset="1" stopColor="#ffd3e1" /></linearGradient>
        <linearGradient id="nm-saree" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#23a08b" /><stop offset="1" stopColor="#176b5d" /></linearGradient>
      </defs>
      <circle cx="120" cy="140" r="132" fill="url(#nm-glow)" />
      {/* sparkles */}
      {[[26, 70, 7], [214, 90, 6], [34, 176, 5], [208, 190, 7], [196, 40, 5]].map(([x, y, r], i) => (
        <path key={i} className="twinkle" style={{ animationDelay: `${i * 0.5}s`, transformOrigin: `${x}px ${y}px` }} d={`M${x} ${y - r}L${x + r / 3} ${y - r / 3}L${x + r} ${y}L${x + r / 3} ${y + r / 3}L${x} ${y + r}L${x - r / 3} ${y + r / 3}L${x - r} ${y}L${x - r / 3} ${y - r / 3}Z`} fill="#f2c14e" />
      ))}
      <g className="namaste-bow" style={{ transformOrigin: "120px 290px" }}>
        {/* long hair behind shoulders, bun, jasmine */}
        <path d="M76 96 C62 150 78 180 98 184 L142 184 C162 180 178 150 164 96Z" fill={hair} />
        <ellipse cx="120" cy="90" rx="50" ry="56" fill={hair} />
        <circle cx="120" cy="32" r="22" fill={hair} />
        {[[98, 44], [108, 29], [122, 24], [136, 29], [146, 44]].map(([x, y], i) => (
          <g key={i}><circle cx={x} cy={y} r="6" fill="#fffaf0" /><circle cx={x} cy={y} r="2" fill={gold} /></g>
        ))}
        {/* neck */}
        <rect x="107" y="124" width="26" height="42" fill="#d9a077" />
        {/* saree */}
        <path d="M76 300 C70 250 62 206 74 190 C82 174 100 164 108 162 L132 162 C140 164 158 174 166 190 C178 206 170 250 164 300Z" fill="url(#nm-saree)" />
        <path d="M76 300 C70 262 66 236 70 214" stroke={gold} strokeWidth="4" fill="none" />
        <path d="M164 300 C170 262 174 236 170 214" stroke={gold} strokeWidth="4" fill="none" />
        {/* blouse */}
        <path d="M70 200 C74 178 98 164 108 162 L132 162 C142 164 166 178 170 200 L162 212 L78 212Z" fill="#c2415a" />
        <path d="M78 212 L162 212" stroke={gold} strokeWidth="2.5" />
        {/* pallu */}
        <path d="M86 178 C108 172 120 186 130 204 L168 262 L164 300 L118 300 L98 222Z" fill="#f0a43a" />
        <path d="M86 178 C108 172 120 186 130 204 L168 262" stroke="#fff3c4" strokeWidth="3" fill="none" />
        <path d="M118 300 L98 222" stroke="#fff3c4" strokeWidth="2" opacity=".7" />
        {/* neckline + necklace */}
        <path d="M104 160 Q120 188 136 160Z" fill={skin} />
        <path d="M105 166 Q120 192 135 166" stroke={gold} strokeWidth="2.4" fill="none" strokeDasharray="1 4" strokeLinecap="round" />
        <circle cx="120" cy="187" r="3.4" fill={gold} /><circle cx="120" cy="187" r="1.4" fill="#c81d3a" />
        {/* arms into namaste */}
        <path d="M80 198 L74 222" stroke="#c2415a" strokeWidth="24" strokeLinecap="round" />
        <path d="M160 198 L166 222" stroke="#c2415a" strokeWidth="24" strokeLinecap="round" />
        <path d="M76 226 L72 244 L112 216" stroke={skin} strokeWidth="17" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M164 226 L168 244 L128 216" stroke={skin} strokeWidth="17" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="79" cy="238" r="7.5" fill="none" stroke={gold} strokeWidth="3" />
        <circle cx="161" cy="238" r="7.5" fill="none" stroke={gold} strokeWidth="3" />
        {/* joined palms */}
        <path d="M120 170 C130 184 132 206 120 228 C108 206 110 184 120 170Z" fill={skin} stroke={skinDark} strokeWidth="2" />
        <path d="M120 175 V224" stroke={skinDark} strokeWidth="1.6" />
        {/* head */}
        <g className="namaste-head" style={{ transformOrigin: "120px 130px" }}>
          <ellipse cx="86" cy="97" rx="5" ry="8" fill={skin} /><ellipse cx="154" cy="97" rx="5" ry="8" fill={skin} />
          <circle cx="86" cy="106" r="2.6" fill={gold} /><circle cx="154" cy="106" r="2.6" fill={gold} />
          <path d="M86 108 l-4.5 9 h9Z" fill={gold} /><path d="M154 108 l-4.5 9 h9Z" fill={gold} />
          <ellipse cx="120" cy="90" rx="34" ry="40" fill={skin} />
          <path d="M84 84 C84 46 156 46 156 84 C142 64 98 64 84 84Z" fill={hair} />
          <path d="M120 52 V62" stroke="#3a2418" strokeWidth="2" />
          <path d="M120 62 l0 0" stroke={gold} />
          <circle cx="120" cy="65" r="2.6" fill={gold} /><circle cx="120" cy="65" r="1" fill="#c81d3a" />
          <path d="M100 82 Q108 76 116 80M124 80 Q132 76 140 82" stroke="#2a1810" strokeWidth="2.6" strokeLinecap="round" fill="none" />
          <path d="M101 93 Q108 99.5 115 93M125 93 Q132 99.5 139 93" stroke="#2a1810" strokeWidth="2.6" strokeLinecap="round" fill="none" />
          <path d="M101 93 l-3 -2M115 93 l2.5 -2.2M125 93 l-2.5 -2.2M139 93 l3 -2" stroke="#2a1810" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M103 88 Q108 85 113 88M127 88 Q132 85 137 88" stroke="#d98a8a" strokeWidth="2" strokeLinecap="round" opacity=".5" fill="none" />
          <path d="M120 94 Q117 104 121 106" stroke={skinDark} strokeWidth="2" strokeLinecap="round" fill="none" />
          <circle cx="114" cy="103" r="1.5" fill={gold} />
          <path d="M107 114 Q114 110.5 120 112.5 Q126 110.5 133 114 Q120 127 107 114Z" fill="#c4445a" />
          <circle cx="120" cy="75" r="3.2" fill="#c81d3a" />
          <circle cx="101" cy="108" r="7" fill="#f08a8a" opacity=".22" /><circle cx="139" cy="108" r="7" fill="#f08a8a" opacity=".22" />
        </g>
      </g>
      {/* lotus she rises from (hides the cut, so nothing looks cropped) */}
      <g transform="translate(120 304)">
        {back.map((a) => <path key={"b" + a} transform={`rotate(${a}) scale(1.15)`} d={petal} fill="url(#nm-petal-b)" stroke="#fff" strokeWidth=".8" />)}
        {front.map((a) => <path key={"f" + a} transform={`rotate(${a}) scale(.95)`} d={petal} fill="url(#nm-petal-f)" stroke="#fff" strokeWidth=".8" />)}
        <ellipse cx="0" cy="-2" rx="16" ry="5" fill="#f6c453" opacity=".9" />
      </g>
    </svg>
  );
}

export function Toran({ className = "" }: { className?: string }) {
  const cols = ["#f08a1c", "#ffb81f", "#f26a1b", "#ffc83d"];
  const strands = 12, W = 1200, step = W / strands;
  const balls: { x: number; y: number; c: string; r: number }[] = [];
  const tassels: { x: number; y: number }[] = [];
  for (let s = 0; s < strands; s++) {
    const x0 = s * step, x1 = x0 + step, sag = 34;
    for (let k = 0; k <= 8; k++) {
      const t = k / 8, x = x0 + (x1 - x0) * t, y = 8 + 4 * sag * t * (1 - t) * 0.5 * 2;
      balls.push({ x, y, c: cols[(s * 3 + k) % 4], r: 6.5 });
    }
    tassels.push({ x: (x0 + x1) / 2, y: 8 + sag });
  }
  return (
    <svg viewBox="0 0 1200 90" preserveAspectRatio="xMidYMin slice" className={className} aria-hidden>
      <rect width="1200" height="9" fill="#4a2a12" />
      {balls.map((b, i) => <circle key={i} cx={b.x} cy={b.y} r={b.r} fill={b.c} stroke="#b5560c" strokeWidth=".8" />)}
      {tassels.map((t, i) => (
        <g key={i}>
          <path d={`M${t.x} ${t.y} V${t.y + 22}`} stroke="#4c7a53" strokeWidth="2" />
          <path d={`M${t.x} ${t.y + 10} q-9 -2 -12 6 q8 4 12 -6 M${t.x} ${t.y + 14} q9 -2 12 6 q-8 4 -12 -6`} fill="#5aa05a" />
          <circle cx={t.x} cy={t.y + 26} r="5.5" fill={cols[i % 4]} stroke="#b5560c" strokeWidth=".8" />
        </g>
      ))}
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
