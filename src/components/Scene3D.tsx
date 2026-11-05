"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Lightformer, MeshDistortMaterial, Sparkles } from "@react-three/drei";

/* ---------- DOM labels pinned to 3D points (drei <Html> breaks on React 19) ---------- */
const tags = new Map<string, HTMLElement>();
function Tag({ id, offset = [0, 0, 0] as [number, number, number] }: { id: string; offset?: [number, number, number] }) {
  const g = useRef<THREE.Group>(null);
  const v = useMemo(() => new THREE.Vector3(), []);
  useFrame(({ camera, size }) => {
    const el = tags.get(id);
    if (!el || !g.current) return;
    g.current.getWorldPosition(v).project(camera);
    el.style.transform = `translate(${(v.x * 0.5 + 0.5) * size.width}px,${(-v.y * 0.5 + 0.5) * size.height}px) translate(-50%,-50%)`;
    el.style.opacity = "1";
  });
  return <group ref={g} position={offset} />;
}

/* ---------- shared canvas: pauses rendering when off-screen ---------- */
function Stage({ children, labels = [], camera = [0, 1.6, 7.5] as [number, number, number], className = "" }: { children: React.ReactNode; labels?: { id: string; text: string; cls: string }[]; camera?: [number, number, number]; className?: string }) {
  const box = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(true);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => setOn(e.isIntersecting), { rootMargin: "200px" });
    if (box.current) io.observe(box.current);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={box} className={className}>
      <Canvas dpr={[1, 1.75]} frameloop={on ? "always" : "never"} camera={{ position: camera, fov: 38 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.9} />
        <directionalLight position={[4, 6, 5]} intensity={2.2} color="#fff1da" />
        <directionalLight position={[-5, 2, -3]} intensity={0.8} color="#d9c9ff" />
        <Environment resolution={256}>
          <Lightformer intensity={2} position={[0, 5, -6]} scale={[12, 4, 1]} color="#fff4e0" />
          <Lightformer intensity={1.2} position={[-6, 1, 2]} rotation-y={Math.PI / 2} scale={[8, 4, 1]} color="#ffd6e0" />
          <Lightformer intensity={1.2} position={[6, 1, 2]} rotation-y={-Math.PI / 2} scale={[8, 4, 1]} color="#d6f0d9" />
        </Environment>
        {children}
      </Canvas>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {labels.map((l) => (
          <span key={l.id} ref={(el) => { if (el) tags.set(l.id, el); else tags.delete(l.id); }} className={`absolute left-0 top-0 whitespace-nowrap opacity-0 ${l.cls}`}>{l.text}</span>
        ))}
      </div>
    </div>
  );
}

/* ---------- LOTUS ---------- */
function petalGeometry() {
  const g = new THREE.SphereGeometry(1, 28, 20);
  const p = g.attributes.position;
  const col: number[] = [];
  const base = new THREE.Color("#fffaf4"), tip = new THREE.Color("#f08fb0");
  for (let i = 0; i < p.count; i++) {
    const y = p.getY(i);
    const t = (y + 1) / 2; // 0 base → 1 tip
    p.setX(i, p.getX(i) * (y > 0 ? 1 - 0.62 * y * y : 1)); // pointed tip
    p.setZ(i, p.getZ(i) + 0.55 * t * t); // cup inward
    const c = base.clone().lerp(tip, Math.pow(t, 1.6));
    col.push(c.r, c.g, c.b);
  }
  g.setAttribute("color", new THREE.Float32BufferAttribute(col, 3));
  g.computeVertexNormals();
  return g;
}

const RINGS = [
  { n: 9, len: 1.9, w: 0.62, open: 1.18, closed: 0.12, tint: "#ffffff", off: 0 },
  { n: 8, len: 1.7, w: 0.58, open: 0.82, closed: 0.1, tint: "#ffe9f0", off: 0.35 },
  { n: 6, len: 1.4, w: 0.5, open: 0.5, closed: 0.08, tint: "#ffe0c8", off: 0.2 },
];

function Lotus() {
  const geo = useMemo(petalGeometry, []);
  const root = useRef<THREE.Group>(null);
  const petals = useRef<THREE.Group[]>([]);
  const open = useRef(0);
  const go = useRef(typeof window !== "undefined" && !!(window as unknown as { __doorsOpen?: boolean }).__doorsOpen);
  useEffect(() => {
    const f = () => (go.current = true);
    window.addEventListener("doors-open", f);
    return () => window.removeEventListener("doors-open", f);
  }, []);
  useFrame(({ pointer, clock }, dt) => {
    if (go.current) open.current = THREE.MathUtils.damp(open.current, 1, 1.1, dt); // bloom when the doors open
    const s = typeof window === "undefined" ? 0 : window.scrollY / 900;
    root.current!.rotation.y = clock.elapsedTime * 0.12 + s * 1.4 + pointer.x * 0.5;
    root.current!.rotation.x = THREE.MathUtils.damp(root.current!.rotation.x, 0.28 - pointer.y * 0.18, 4, dt);
    root.current!.position.y = Math.sin(clock.elapsedTime * 0.9) * 0.06;
    let k = 0;
    RINGS.forEach((r) => {
      for (let i = 0; i < r.n; i++) {
        const g = petals.current[k++];
        const breathe = Math.sin(clock.elapsedTime * 0.8 + i) * 0.03;
        g.rotation.x = r.closed + (r.open - r.closed) * open.current + breathe;
      }
    });
  });
  let k = -1;
  return (
    <group ref={root} position={[0, -0.2, 0]} scale={1.05}>
      {RINGS.map((r, ri) =>
        Array.from({ length: r.n }, (_, i) => {
          k++;
          const idx = k;
          return (
            <group key={`${ri}-${i}`} ref={(el) => { if (el) petals.current[idx] = el; }} rotation={[0, (i / r.n) * Math.PI * 2 + r.off, 0]} position={[0, ri * 0.06, 0]} rotation-order="YXZ">
              <mesh geometry={geo} position={[0, r.len / 2, 0]} scale={[r.w, r.len / 2, 0.1]}>
                <meshPhysicalMaterial vertexColors color={r.tint} roughness={0.4} clearcoat={0.7} clearcoatRoughness={0.25} sheen={1} sheenColor="#fff" side={THREE.DoubleSide} />
              </mesh>
            </group>
          );
        })
      )}
      {/* glowing core */}
      <mesh position={[0, 0.55, 0]}>
        <sphereGeometry args={[0.32, 32, 32]} />
        <meshStandardMaterial color="#ffd27a" emissive="#ffb347" emissiveIntensity={1.6} roughness={0.3} />
      </mesh>
      <pointLight position={[0, 1, 0]} intensity={6} color="#ffc66e" distance={5} />
    </group>
  );
}

function Water() {
  const rings = useRef<THREE.Mesh[]>([]);
  useFrame(({ clock }) => {
    rings.current.forEach((m, i) => {
      const t = (clock.elapsedTime * 0.25 + i / 3) % 1;
      m.scale.setScalar(1 + t * 2.2);
      (m.material as THREE.MeshBasicMaterial).opacity = (1 - t) * 0.45;
    });
  });
  return (
    <group position={[0, -1.35, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <mesh>
        <circleGeometry args={[3.6, 64]} />
        <meshPhysicalMaterial color="#cfe6dc" transparent opacity={0.45} roughness={0.05} clearcoat={1} />
      </mesh>
      {[0, 1, 2].map((i) => (
        <mesh key={i} ref={(el) => { if (el) rings.current[i] = el; }}>
          <ringGeometry args={[1.5, 1.54, 64]} />
          <meshBasicMaterial color="#ffffff" transparent />
        </mesh>
      ))}
      {[[2.1, 1.2, 0.5], [-2.3, 0.4, 0.38], [1.0, -2.2, 0.45]].map(([x, y, s], i) => (
        <mesh key={i} position={[x, y, 0.02]} scale={s}>
          <circleGeometry args={[1, 40, 0.3, Math.PI * 2 - 0.5]} />
          <meshStandardMaterial color="#5f9363" roughness={0.6} />
        </mesh>
      ))}
    </group>
  );
}

const CHIPS = ["Mind & Calm", "Diabetes Care", "Garbhsanskar", "Panchakarma"];
function Orbiters() {
  const g = useRef<THREE.Group>(null);
  useFrame((_, dt) => { g.current!.rotation.y += dt * 0.28; });
  return (
    <group ref={g}>
      {CHIPS.map((label, i) => {
        const a = (i / CHIPS.length) * Math.PI * 2;
        const colors = ["#c9bdf2", "#f6b26b", "#f4a6c1", "#8fc79a"];
        return (
          <Float key={label} speed={2} floatIntensity={1.2} rotationIntensity={0.4}>
            <group position={[Math.cos(a) * 2.7, 0.7 + Math.sin(a * 2) * 0.6, Math.sin(a) * 2.7]}>
              <mesh>
                <sphereGeometry args={[0.38, 32, 32]} />
                <meshPhysicalMaterial color={colors[i]} roughness={0.15} clearcoat={1} transmission={0.2} thickness={0.6} />
              </mesh>
              <Tag id={"o-" + label} offset={[0, -0.8, 0]} />
            </group>
          </Float>
        );
      })}
    </group>
  );
}

function Leaves() {
  const leaf = useMemo(() => {
    const g = new THREE.SphereGeometry(1, 16, 10);
    g.scale(0.5, 0.06, 1);
    return g;
  }, []);
  return (
    <>
      {Array.from({ length: 9 }, (_, i) => {
        const a = i * 2.4, r = 2.6 + (i % 3) * 0.7;
        return (
          <Float key={i} speed={1 + (i % 4) * 0.4} floatIntensity={2} rotationIntensity={2}>
            <mesh geometry={leaf} position={[Math.cos(a) * r, 1.8 - (i % 5) * 0.8, Math.sin(a) * r - 1]} rotation={[0.4, a, 0.3]} scale={0.28 + (i % 3) * 0.08}>
              <meshStandardMaterial color={i % 2 ? "#6fa86f" : "#8fc08a"} roughness={0.5} />
            </mesh>
          </Float>
        );
      })}
    </>
  );
}

export function LotusScene({ className = "" }: { className?: string }) {
  return (
    <Stage className={className} camera={[0, 2.6, 9.6]} labels={CHIPS.map((t) => ({ id: "o-" + t, text: t, cls: "chip shadow-md !bg-white/90" }))}>
      <Lotus />
      <Water />
      <Orbiters />
      <Leaves />
      <Sparkles count={70} scale={[7, 5, 7]} size={5} speed={0.35} color="#f5c26b" opacity={0.9} />
    </Stage>
  );
}

/* ---------- THREE DOSHAS ---------- */
export type Dosha = "Vata" | "Pitta" | "Kapha";
const DOSHA_STYLE: Record<Dosha, { color: string; pos: [number, number, number]; speed: number }> = {
  Vata: { color: "#bdb4ee", pos: [-2.0, 0.6, 0], speed: 2.4 },
  Pitta: { color: "#f6a65a", pos: [2.0, 0.3, 0], speed: 1.6 },
  Kapha: { color: "#86bd8c", pos: [0, -1.5, 1], speed: 0.8 },
};

function DoshaOrb({ name, active, onSelect }: { name: Dosha; active: boolean; onSelect: (d: Dosha) => void }) {
  const s = DOSHA_STYLE[name];
  const m = useRef<THREE.Mesh>(null);
  useFrame((_, dt) => {
    m.current!.scale.setScalar(THREE.MathUtils.damp(m.current!.scale.x, active ? 1.35 : 1, 6, dt));
  });
  return (
    <Float speed={s.speed} floatIntensity={1.4}>
      <mesh ref={m} position={s.pos} onClick={() => onSelect(name)} onPointerOver={() => { document.body.style.cursor = "pointer"; onSelect(name); }} onPointerOut={() => (document.body.style.cursor = "")}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial color={s.color} distort={active ? 0.55 : 0.32} speed={active ? 3 : 1.5} roughness={0.12} clearcoat={1} metalness={0.05} />
        <Tag id={"d-" + name} />
      </mesh>
    </Float>
  );
}

export function DoshaScene({ active, onSelect, className = "" }: { active: Dosha; onSelect: (d: Dosha) => void; className?: string }) {
  const core = useRef<THREE.Mesh>(null);
  return (
    <Stage className={className} camera={[0, 0, 11]} labels={(Object.keys(DOSHA_STYLE) as Dosha[]).map((t) => ({ id: "d-" + t, text: t, cls: "display text-xl font-semibold text-ink" }))}>
      <group>
        {(Object.keys(DOSHA_STYLE) as Dosha[]).map((d) => <DoshaOrb key={d} name={d} active={active === d} onSelect={onSelect} />)}
        <Spin target={core}>
          <mesh ref={core} position={[0, -0.1, 0]}>
            <icosahedronGeometry args={[0.45, 1]} />
            <meshStandardMaterial color="#e5b657" metalness={0.9} roughness={0.2} emissive="#c9922a" emissiveIntensity={0.4} />
          </mesh>
        </Spin>
      </group>
      <Sparkles count={40} scale={[9, 6, 4]} size={4} speed={0.3} color="#f5c26b" />
    </Stage>
  );
}
function Spin({ target, children }: { target: React.RefObject<THREE.Mesh | null>; children: React.ReactNode }) {
  useFrame((_, dt) => { if (target.current) { target.current.rotation.y += dt; target.current.rotation.x += dt * 0.5; } });
  return <>{children}</>;
}
