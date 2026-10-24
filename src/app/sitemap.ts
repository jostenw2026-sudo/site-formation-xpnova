import type { MetadataRoute } from "next";
import { URL_PRODUCTION } from "@/lib/indexation";
import { languesPour } from "@/lib/alternates";

// Plan du site — référencé par robots.txt (il répondait 404 jusqu'ici).
// Liste à tenir à jour quand une page est ajoutée ou retirée.
// Les pages présentes dans les deux langues (src/lib/pages-miroir.ts) portent leurs
// liens hreflang fr / en / x-default (décision DG du 21/10/2026), comme leur <head>.
const ROUTES = [
    "/",
    "/a-propos",
    "/approche",
    "/contact",
    "/faq",
    "/publics",
    "/references",
    "/reseau",
    "/services",
    "/en",
    "/en/a-propos",
    "/en/approche",
    "/en/contact",
    "/en/faq",
    "/en/publics",
    "/en/references",
    "/en/reseau",
    "/en/services",
];

// Date de dernière révision du contenu (<lastmod>) : fixe, à avancer quand les pages
// changent. Une date de build (new Date()) changerait à chaque déploiement sans que
// le contenu change, et les moteurs cesseraient d'en tenir compte.
const DATE_REVISION = "2026-10-24";

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => {
    const cheminFr = route === "/en" ? "/" : route.startsWith("/en/") ? route.slice(3) : route;
    const langues = languesPour(cheminFr);
    return {
      url: `${URL_PRODUCTION}${route === "/" ? "" : route}`,
      lastModified: DATE_REVISION,
      changeFrequency: "monthly",
      priority: route === "/" ? 1 : route === "/en" ? 0.8 : 0.6,
      ...(langues ? { alternates: { languages: langues } } : {}),
    };
  });
}
