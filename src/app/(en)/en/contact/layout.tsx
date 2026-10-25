import { metadonneesPage } from '@/lib/metadonnees';
import { FilAriane } from '@/components/JsonLd';

// La page est un composant client (formulaire) : sa metadata vit ici.
export const generateMetadata = metadonneesPage('/contact', 'en', {
  title: 'Contact — Training Engineering XP-NOVA',
  description: 'Describe your training need: an XP-NOVA engineer replies within 48 hours. Form, e-mail or WhatsApp; the quote, in FCFA, follows once the need is framed.',
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Fil d'Ariane (JSON-LD) : nom = H1 de page.tsx, composant client */}
      <FilAriane langue="en" cheminFr="/contact" nom="Contact us" />
      {children}
    </>
  );
}
