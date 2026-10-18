import type { Metadata } from "next";
import { UtilityBar } from "@/components/shared/UtilityBar";
import { DivisionBadge } from "@/components/shared/DivisionBadge";
import { SharedNavigation } from "@/components/shared/SharedNavigation";
import Footer from "@/components/Footer";
import { ConditionalFrenchLayout } from "@/components/ConditionalFrenchLayout";
import "./globals.css";

// Indexation : gérée par src/proxy.ts (en-tête X-Robots-Tag hors production).

export const metadata: Metadata = {
  title: "Ingénierie de la formation — Conception de dispositifs pédagogiques — XP-NOVA",
  description: "Conception de référentiels, curricula, contenus et évaluations pour la formation professionnelle agricole et agro-industrielle au Cameroun et en Afrique centrale.",
};

const divisions = [
  {
    key: 'agrovita',
    name: 'AGROVITA',
    url: 'https://agrovita.xp-nova.com',
    accentColor: '#22C55E',
  },
  {
    key: 'odt',
    name: 'ODT',
    url: 'https://odt.xp-nova.com',
    accentColor: '#00289A',
  },
  {
    key: 'technologie',
    name: 'Technologie',
    url: 'https://technologie.xp-nova.com',
    accentColor: '#D4A017',
  },
  {
    key: 'formation',
    name: 'Formation',
    url: 'https://ingenierie-formation.xp-nova.com',
    accentColor: '#F97316',
  },
];

const navItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Publics', href: '/publics' },
  { label: 'Approche', href: '/approche' },
  { label: 'Réseau', href: '/reseau' },
  { label: 'Références', href: '/references' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Contact', href: '/contact' },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="min-h-full flex flex-col">
        <ConditionalFrenchLayout>
          {/* Bandeau + navigation collés en haut de l'écran au scroll */}
          <div className="sticky top-0 z-50">
            <UtilityBar divisions={divisions} siteUrl="https://xp-nova.com" currentKey="formation" />
            <SharedNavigation
              items={navItems}
              logoSrc="/brand/logo_xpnova_color.png"
              logoAlt="XP-NOVA"
              logoHref="/"
            />
          </div>
          <DivisionBadge divisionName="Ingénierie de la formation" />
        </ConditionalFrenchLayout>
        <main className="flex-1">{children}</main>
        <ConditionalFrenchLayout>
          <Footer />
        </ConditionalFrenchLayout>
      </body>
    </html>
  );
}
