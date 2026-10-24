import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { indexationAutorisee, redirectionAlias } from "@/lib/indexation";

// Protection contre l'indexation hors production (voir src/lib/indexation.ts).
// - Hôte de production : rien ne change, les pages restent statiques.
// - Tout autre hôte (recette, préproduction, localhost) : en-tête
//   « X-Robots-Tag: noindex, nofollow » sur chaque réponse, et robots.txt
//   remplacé par une interdiction totale.
export function proxy(request: NextRequest) {
  const hote = request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  // Adresse courte (ingform.xp-nova.com) : 308 vers l'hôte de production.
  const { pathname, search } = request.nextUrl;
  const alias = redirectionAlias(hote, pathname + search);
  if (alias) return NextResponse.redirect(alias, 308);
  if (indexationAutorisee(hote)) return NextResponse.next();

  if (request.nextUrl.pathname === "/robots.txt") {
    return new NextResponse("User-Agent: *\nDisallow: /\n", {
      headers: { "Content-Type": "text/plain; charset=utf-8", "X-Robots-Tag": "noindex, nofollow" },
    });
  }
  const reponse = NextResponse.next();
  reponse.headers.set("X-Robots-Tag", "noindex, nofollow");
  return reponse;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|brand/).*)",
    // Adresse courte : toutes les requêtes sont redirigées, fichiers statiques compris.
    { source: "/:path*", has: [{ type: "host", value: "ingform\\.xp-nova\\.com" }] },
  ],
};
