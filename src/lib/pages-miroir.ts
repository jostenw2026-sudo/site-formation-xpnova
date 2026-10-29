// Pages présentes en français ET en anglais, sous le même slug (« /x » ↔ « /en/x »).
// Lu par le bouton FR/EN de la barre du groupe (src/components/shared/UtilityBar.tsx) :
// une page listée bascule vers son équivalente, toute autre vers l'accueil de l'autre
// langue. À tenir à jour avec src/app/sitemap.ts quand une page est ajoutée.
export const PAGES_MIROIR = [
  '/',
  '/services',
  '/publics',
  '/approche',
  '/reseau',
  '/references',
  '/a-propos',
  '/faq',
  '/blog',
  '/carrieres',
  '/contact',
] as const;

/** Chemin équivalent dans l'autre langue, ou l'accueil de celle-ci à défaut. */
export function pageEquivalente(chemin: string | null | undefined, vers: 'fr' | 'en'): string {
  const brut = (chemin ?? '/').replace(/\/+$/, '') || '/';
  const base = brut === '/en' ? '/' : brut.startsWith('/en/') ? brut.slice(3) : brut;
  const miroir = (PAGES_MIROIR as readonly string[]).includes(base);
  if (vers === 'en') return miroir && base !== '/' ? `/en${base}` : '/en';
  return miroir ? base : '/';
}
