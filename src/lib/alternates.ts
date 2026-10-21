import type { Metadata } from "next";
import { PAGES_MIROIR } from "@/lib/pages-miroir";
import { URL_PRODUCTION } from "@/lib/indexation";

// Liens canonical et hreflang (décision DG du 21/10/2026).
// - Page présente dans les deux langues (src/lib/pages-miroir.ts) : canonical sur
//   elle-même + languages { fr, en, x-default = version française }.
// - Page française sans miroir : canonical seul.
// URL absolues sur l'hôte de production (URL_PRODUCTION, src/lib/indexation.ts),
// quel que soit l'hôte servi : la recette reste en noindex (src/proxy.ts).

type Langue = "fr" | "en";

/** URL absolue d'un chemin du site (« / » → racine sans barre finale). */
export function urlAbsolue(chemin: string): string {
  return chemin === "/" ? URL_PRODUCTION : `${URL_PRODUCTION}${chemin}`;
}

/** Chemin français → chemin anglais (« / » → « /en », « /x » → « /en/x »). */
export function cheminAnglais(cheminFr: string): string {
  return cheminFr === "/" ? "/en" : `/en${cheminFr}`;
}

export function estMiroir(cheminFr: string): boolean {
  return (PAGES_MIROIR as readonly string[]).includes(cheminFr);
}

/** Paires hreflang d'une page miroir, ou undefined si la page n'a pas de miroir. */
export function languesPour(cheminFr: string): Record<string, string> | undefined {
  if (!estMiroir(cheminFr)) return undefined;
  const fr = urlAbsolue(cheminFr);
  return { fr, en: urlAbsolue(cheminAnglais(cheminFr)), "x-default": fr };
}

/**
 * Bloc `alternates` d'une page, désignée par son chemin FRANÇAIS
 * (p. ex. alternatesPour("/services", "en") pour /en/services).
 */
export function alternatesPour(cheminFr: string, langue: Langue): NonNullable<Metadata["alternates"]> {
  const langues = languesPour(cheminFr);
  if (langue === "en" && !langues) {
    throw new Error(`Page anglaise sans miroir déclaré dans pages-miroir.ts : ${cheminFr}`);
  }
  const canonical = urlAbsolue(langue === "en" ? cheminAnglais(cheminFr) : cheminFr);
  return langues ? { canonical, languages: langues } : { canonical };
}
