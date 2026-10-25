import type { Metadata, ResolvingMetadata } from "next";
import { alternatesPour, cheminAnglais, estMiroir, urlAbsolue } from "@/lib/alternates";

type Langue = "fr" | "en";

/** Nom de la division tel que le site l'affiche (badge des layouts, titres des pages). */
export const NOM_DIVISION = { fr: "Ingénierie de la formation", en: "Training Engineering" } as const;

/**
 * Image de partage (Open Graph), PNG 1200 × 630 générée au build par
 * src/app/(fr)/opengraph-image.tsx et src/app/(en)/en/opengraph-image.tsx.
 * Next en fixe l'adresse : fichier placé dans un groupe de routes, il lui ajoute un
 * suffixe (/opengraph-image-xxxxxx, /en/opengraph-image-xxxxxx) et une empreinte du
 * contenu en paramètre ; l'adresse n'est donc jamais écrite en dur ici.
 */
export const IMAGE_PARTAGE = {
  taille: { width: 1200, height: 630 },
  type: "image/png",
  alt: { fr: `${NOM_DIVISION.fr} — XP-NOVA`, en: `${NOM_DIVISION.en} — XP-NOVA` },
} as const;

const LOCALE = { fr: "fr_FR", en: "en_GB" } as const;

/**
 * generateMetadata d'une page, désignée par son chemin FRANÇAIS : title et
 * description de la page, canonical et hreflang (alternatesPour), et bloc Open Graph
 * repris des mêmes valeurs (url = canonical).
 *
 * L'image vient du fichier opengraph-image du layout, lue dans les métadonnées
 * parentes : le `openGraph` d'une page remplace en bloc celui qu'elle hérite, et Next
 * n'y rajoute l'image d'un fichier opengraph-image que pour la page du même dossier
 * (l'accueil). Avec un `metadata` statique, les pages intérieures perdaient og:image
 * (constaté au build du 24/10/2026).
 */
export function metadonneesPage(
  cheminFr: string,
  langue: Langue,
  { title, description, robots }: { title: string; description: string; robots?: Metadata["robots"] },
) {
  const alternates = alternatesPour(cheminFr, langue);
  const autreLangue: Langue = langue === "en" ? "fr" : "en";
  return async function generateMetadata(_props: unknown, parent: ResolvingMetadata): Promise<Metadata> {
    const images = (await parent).openGraph?.images;
    return {
      alternates,
      title,
      description,
      ...(robots ? { robots } : {}),
      openGraph: {
        type: "website",
        url: urlAbsolue(langue === "en" ? cheminAnglais(cheminFr) : cheminFr),
        title,
        description,
        locale: LOCALE[langue],
        ...(estMiroir(cheminFr) ? { alternateLocale: [LOCALE[autreLangue]] } : {}),
        images,
      },
    };
  };
}
