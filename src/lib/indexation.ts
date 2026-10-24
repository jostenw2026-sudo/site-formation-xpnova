// Indexation par les moteurs — même doctrine que le portail xp-nova.com
// (src/lib/seo.ts du dépôt portail-xp-nova) : seul l'hôte de production est
// indexable. Un hôte de recette, de préproduction, local ou inconnu ne l'est
// jamais. SITE_ENV, s'il est défini, doit valoir « production » ; une valeur
// explicite comme « recette » interdit l'indexation même sur l'hôte de production.
//
// Motif (18/10/2026) : l'ancienne règle exigeait SITE_ENV=production. La variable
// n'étant pas posée dans Coolify, le site de production était entièrement en
// noindex (robots.txt « Disallow: / » + balise meta robots).

export const HOTE_PRODUCTION = "ingenierie-formation.xp-nova.com";
export const URL_PRODUCTION = `https://${HOTE_PRODUCTION}`;

/**
 * Adresses courtes du site (supports imprimés, cartes de visite) : redirigées en 308
 * vers l'hôte de production, même chemin, même requête. Un seul site pour les moteurs,
 * comme www.xp-nova.com sur le portail (24/10/2026).
 */
export const HOTES_ALIAS = ["ingform.xp-nova.com"] as const;

/** Nettoie un en-tête Host / X-Forwarded-Host : minuscules, sans port, première valeur. */
export function normaliserHote(brut: string | null | undefined): string {
  return (brut ?? "").split(",")[0].trim().toLowerCase().replace(/:\d+$/, "");
}

/** URL de production vers laquelle rediriger un hôte alias, ou null pour tout autre hôte. */
export function redirectionAlias(hote: string | null | undefined, cheminEtRequete: string): string | null {
  if (!(HOTES_ALIAS as readonly string[]).includes(normaliserHote(hote))) return null;
  return `${URL_PRODUCTION}${cheminEtRequete.startsWith("/") ? "" : "/"}${cheminEtRequete}`;
}

export function indexationAutorisee(hote: string | null | undefined): boolean {
  if (normaliserHote(hote) !== HOTE_PRODUCTION) return false;
  const env = process.env.SITE_ENV;
  return !env || env === "production";
}
