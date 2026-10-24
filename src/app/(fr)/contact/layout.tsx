import { metadonneesPage } from '@/lib/metadonnees';
import { FilAriane } from '@/components/JsonLd';

// La page est un composant client (formulaire) : sa metadata vit ici.
export const generateMetadata = metadonneesPage('/contact', 'fr', {
  title: 'Contact — Ingénierie de la formation XP-NOVA',
  description: 'Décrivez votre besoin de formation : un ingénieur pédagogique XP-NOVA vous répond sous 48 h. Formulaire, e-mail ou WhatsApp ; le devis, en FCFA, vient après le cadrage du besoin.',
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Fil d'Ariane (JSON-LD) : nom = H1 de page.tsx, composant client */}
      <FilAriane langue="fr" cheminFr="/contact" nom="Contactez-nous" />
      {children}
    </>
  );
}
