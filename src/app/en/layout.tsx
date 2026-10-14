import type { Metadata } from "next";
import { UtilityBar } from "@/components/shared/UtilityBar";
import { DivisionBadge } from "@/components/shared/DivisionBadge";
import { SharedNavigation } from "@/components/shared/SharedNavigation";
import Footer from "@/components/Footer";
import "../globals.css";

const isProd = process.env.SITE_ENV === "production";

export const metadata: Metadata = {
  title: "Training Engineering — Educational Programs Design — XP-NOVA",
  description: "Design of frameworks, curricula, content and assessments for agricultural and agro-industrial professional training in Cameroon and Central Africa.",
  ...(!isProd && { robots: { index: false, follow: false } }),
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
    name: 'Technology',
    url: 'https://technologie.xp-nova.com',
    accentColor: '#D4A017',
  },
  {
    key: 'formation',
    name: 'Training',
    url: 'https://ingenierie-formation.xp-nova.com',
    accentColor: '#F97316',
  },
];

const navItems = [
  { label: 'Home', href: '/en', active: true },
  { label: 'Services', href: '/en/services', active: false },
  { label: 'Audiences', href: '/en/publics', active: false },
  { label: 'Approach', href: '/en/approche', active: false },
  { label: 'Network', href: '/en/reseau', active: false },
  { label: 'References', href: '/en/references', active: false },
  { label: 'About', href: '/en/a-propos', active: false },
  { label: 'Contact', href: '/en/contact', active: false },
];

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        {/* Bandeau + navigation collés en haut de l'écran au scroll */}
        <div className="sticky top-0 z-50">
          <UtilityBar
            divisions={divisions}
            siteUrl="https://xp-nova.com"
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
        <Footer />
      </body>
    </html>
  );
}
