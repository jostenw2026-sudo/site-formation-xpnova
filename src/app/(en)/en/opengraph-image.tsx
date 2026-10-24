import { imagePartage } from "@/components/ImagePartage";
import { IMAGE_PARTAGE } from "@/lib/metadonnees";

// Image de partage des pages anglaises (PNG 1200 × 630, générée au build). Next la déclare
// sur ce layout ; metadonneesPage (src/lib/metadonnees.ts) la reporte sur chaque page.
export const alt = IMAGE_PARTAGE.alt.en;
export const size = IMAGE_PARTAGE.taille;
export const contentType = IMAGE_PARTAGE.type;

export default function Image() {
  return imagePartage("en");
}
