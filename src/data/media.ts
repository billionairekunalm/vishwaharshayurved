// Real clinic media supplied by the client (public/clinic). Captions are descriptive only.
export type Media = { id: string; kind: "img" | "video"; w: number; h: number; caption: string; alt: string };
const img = (id: string, w: number, h: number, caption: string, alt = caption): Media => ({ id, kind: "img", w, h, caption, alt });
const vid = (id: string, w: number, h: number, caption: string, alt = caption): Media => ({ id, kind: "video", w, h, caption, alt });

export const gallery: Media[] = [
  vid("vamana", 480, 864, "Vamana preparation", "Vamana (therapeutic emesis) preparation at Vishwaharsh Ayurved"),
  img("shirodhara", 1204, 1600, "Shirodhara", "Shirodhara — warm medicated oil poured on the forehead"),
  img("leech-back", 964, 1280, "Jalaukavacharana (leech therapy)", "Leech therapy on the back"),
  vid("face-pack", 848, 480, "Mukhalepa — herbal face pack", "Herbal face pack (Mukhalepa) applied to a patient"),
  img("basti-closeup", 1600, 1204, "Kati basti — warm medicated oil", "Kati basti with a dough ring holding warm medicated oil"),
  img("leech-forehead", 960, 1280, "Jalaukavacharana", "Leech therapy on the forehead"),
  vid("head-massage", 464, 848, "Head & Shiro therapy", "Gentle head therapy session"),
  img("therapy-table", 1204, 1600, "Panchakarma therapy table", "Patient on the Panchakarma therapy table"),
  img("instrument-box", 1600, 1204, "Classical therapy instruments", "Classical Ayurvedic therapy instruments in a presentation box"),
  vid("head-therapy", 480, 864, "Therapy session", "Ayurvedic head therapy session"),
  img("leech-leg", 964, 1280, "Jalaukavacharana", "Leech therapy on the leg"),
  img("preparations", 1600, 1204, "Medicated preparations", "Medicated preparations made at the clinic"),
  vid("massage", 464, 848, "Hands-on therapy", "Hands-on Ayurvedic therapy"),
  img("basti-back", 1204, 1600, "Basti therapy", "Basti therapy with a dough ring on the back"),
  img("leech-scalp", 1204, 1600, "Jalaukavacharana", "Leech therapy on the scalp"),
  vid("wound", 480, 864, "Treatment in progress", "Treatment in progress"),
  img("leech-face", 900, 1600, "Jalaukavacharana", "Leech therapy on the face"),
  img("foot-dressing", 1204, 1600, "Care & dressing", "Therapeutic dressing on a foot"),
];

export const results: Media[] = [
  img("before-after-face", 960, 1280, "Before & After", "Patient before and after Ayurvedic treatment"),
  img("scalp-before-after", 1204, 1600, "Before & After — scalp", "Scalp before and after treatment"),
  img("patient-face", 964, 1280, "Patient visit", "Patient at Vishwaharsh Ayurved"),
];
