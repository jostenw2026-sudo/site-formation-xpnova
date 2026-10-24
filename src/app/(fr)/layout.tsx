import type { Metadata } from "next";
import { UtilityBar } from "@/components/shared/UtilityBar";
import { DivisionBadge } from "@/components/shared/DivisionBadge";
import { SharedNavigation } from "@/components/shared/SharedNavigation";
import Footer from "@/components/Footer";
import "../globals.css";
import { URL_SITES } from "@/lib/sites";
import BandeauRecette from "@/components/BandeauRecette";
import { Analytics } from "@/components/Analytics";
import BoutonWhatsApp from "@/components/BoutonWhatsApp";
import { sourceSans, playfair } from "@/lib/polices";
import { URL_PRODUCTION } from "@/lib/indexation";
import { JsonLd, organisationLd } from "@/components/JsonLd";

// Layout racine des pages françaises (groupe (fr), sans effet sur les URL).
// Les pages anglaises ont le leur : src/app/(en)/en/layout.tsx, <html lang="en">
// (décision DG du 21/10/2026 — deux layouts racine, lang correct au rendu serveur).

// Indexation : gérée par src/proxy.ts (en-tête X-Robots-Tag hors production).

export const metadata: Metadata = {
  // Base des URL relatives (images de partage) : l'hôte de production, comme les canonical.
  metadataBase: new URL(URL_PRODUCTION),
  title: "Ingénierie de la formation — Conception de dispositifs pédagogiques — XP-NOVA",
  description: "Conception de référentiels, curricula, contenus et évaluations pour la formation professionnelle agricole et agro-industrielle au Cameroun et en Afrique centrale.",
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
    name: 'Technologie',
    url: URL_SITES.technologie,
    accentColor: '#3D5A73',
  },
  {
    key: 'formation',
    name: 'Formation',
    url: URL_SITES.formation,
    accentColor: '#B4470F',
  },
];

const navItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Publics', href: '/publics' },
  { label: 'Approche', href: '/approche' },
  { label: 'Mise en œuvre', href: '/reseau' },
  { label: 'Références', href: '/references' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export default function FrenchRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${sourceSans.variable} ${playfair.variable}`}>
      <body className="min-h-full flex flex-col">
        {/* Données structurées : la division, rattachée à l'organisation du groupe (src/components/JsonLd.tsx) */}
        <JsonLd data={organisationLd("fr", String(metadata.description))} />
        {/* Recette locale : bandeau rendu seulement si SITE_ENV=recette */}
        <BandeauRecette />
        {/* Barre du groupe + navigation : un seul bloc collant (demande du DG, 20/10/2026) */}
        <div className="sticky top-0 z-50">
          <UtilityBar divisions={divisions} siteUrl={URL_SITES.portail} currentKey="formation" />
          <SharedNavigation
            items={navItems}
            logoSrc="/brand/logo_xpnova_color.png"
            logoAlt="XP-NOVA"
            logoHref="/"
          />
        </div>
        <DivisionBadge divisionName="Ingénierie de la formation" />
        <main className="flex-1">{children}</main>
        <Footer />
        <BoutonWhatsApp lang="fr" />
        {/* Mesure d'audience GA4 : inactive sans NEXT_PUBLIC_GA_MEASUREMENT_ID, hors production. */}
        <Analytics />
      </body>
    </html>
  );
}
