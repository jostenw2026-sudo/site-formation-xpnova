import type { Metadata } from "next";
import { UtilityBar } from "@/components/shared/UtilityBar";
import { DivisionBadge } from "@/components/shared/DivisionBadge";
import { SharedNavigation } from "@/components/shared/SharedNavigation";
import Footer from "@/components/Footer";
import "../../globals.css";
import { URL_SITES } from "@/lib/sites";
import BoutonWhatsApp from "@/components/BoutonWhatsApp";
import BandeauRecette from "@/components/BandeauRecette";
import { sourceSans, playfair } from "@/lib/polices";

// Layout racine des pages anglaises (groupe (en), sans effet sur les URL : /en/…).
// <html lang="en"> rendu au serveur (décision DG du 21/10/2026) ; reprend ce que
// l'ancien layout racine unique apportait : polices, bandeau de recette, <body>.

// Indexation : gérée par src/proxy.ts (en-tête X-Robots-Tag hors production).

export const metadata: Metadata = {
  title: "Training Engineering — Educational Programs Design — XP-NOVA",
  description: "Design of frameworks, curricula, content and assessments for agricultural and agro-industrial professional training in Cameroon and Central Africa.",
};

const divisions = [
  {
    key: 'agrovita',
    name: 'AGROVITA',
    url: URL_SITES.agrovita,
    accentColor: '#2E7D32',
  },
  {
    key: 'odt',
    name: 'ODT',
    url: URL_SITES.odt,
    accentColor: '#0E4C5A',
  },
  {
    key: 'technologie',
    name: 'Technology',
    url: URL_SITES.technologie,
    accentColor: '#3D5A73',
  },
  {
    key: 'formation',
    name: 'Training',
    url: URL_SITES.formation,
    accentColor: '#B4470F',
  },
];

const navItems = [
  { label: 'Home', href: '/en' },
  { label: 'Services', href: '/en/services' },
  { label: 'Audiences', href: '/en/publics' },
  { label: 'Approach', href: '/en/approche' },
  { label: 'Delivery', href: '/en/reseau' },
  { label: 'References', href: '/en/references' },
  { label: 'About', href: '/en/a-propos' },
  { label: 'FAQ', href: '/en/faq' },
  { label: 'Contact', href: '/en/contact' },
];

export default function EnglishRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sourceSans.variable} ${playfair.variable}`}>
      <body className="min-h-full flex flex-col">
        {/* Recette locale : bandeau rendu seulement si SITE_ENV=recette */}
        <BandeauRecette />
        {/* Barre du groupe + navigation : un seul bloc collant (demande du DG, 20/10/2026) */}
        <div className="sticky top-0 z-50">
          <UtilityBar
            divisions={divisions}
            siteUrl={URL_SITES.portail}
            currentKey="formation"
            currentLang="en"
          />
          <SharedNavigation
            items={navItems}
            logoSrc="/brand/logo_xpnova_color.png"
            logoAlt="XP-NOVA"
            logoHref="/en"
          />
        </div>
        <DivisionBadge divisionName="Training Engineering" />
        <main className="flex-1">{children}</main>
        <Footer lang="en" />
        <BoutonWhatsApp lang="en" />
      </body>
    </html>
  );
}
