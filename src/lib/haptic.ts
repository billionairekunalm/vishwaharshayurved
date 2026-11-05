// Phone vibration feedback. Works on Android browsers (Chrome/Firefox/Samsung); iOS Safari and desktops ignore it.
// Browsers only allow vibration after the visitor has touched the page, so we check for that to avoid console noise.
type UA = Navigator & { userActivation?: { hasBeenActive: boolean } };

export function buzz(pattern: number | readonly number[] = 10) {
  try {
    const n = navigator as UA;
    if (!("vibrate" in n)) return;
    if (n.userActivation && !n.userActivation.hasBeenActive) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    n.vibrate(typeof pattern === "number" ? pattern : [...pattern]);
  } catch { /* unsupported: fine */ }
}

let last = 0;
/** Very light tick for passive animations (scroll reveals); throttled so scrolling never feels buzzy. */
export function softTick() {
  const t = Date.now();
  if (t - last < 500) return;
  last = t;
  buzz(6);
}

export const HAPTIC = {
  tap: 10, // links, chips, tabs
  press: 18, // primary buttons
  select: [8, 24, 12], // choosing something (dosha, gallery item)
  success: [20, 40, 30, 40, 50],
  bloom: [10, 40, 14, 40, 18, 40, 24, 40, 32, 40, 44], // swelling pulse as the lotus opens
  doors: [40, 60, 40, 60, 50, 60, 60, 60, 70, 60, 70, 60, 60, 60, 50, 60, 40, 60, 30, 120, 70, 40, 30], // low rumble while the doors swing, then a soft thud
} as const;
