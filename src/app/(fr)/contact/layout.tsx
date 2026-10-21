import type { Metadata } from 'next';
import { alternatesPour } from '@/lib/alternates';

// La page est un composant client (formulaire) : sa metadata vit ici.
export const metadata: Metadata = {
  alternates: alternatesPour('/contact', 'fr'),
  title: 'Contact — Ingénierie de la formation XP-NOVA',
  description: 'Décrivez votre besoin de formation : un ingénieur pédagogique XP-NOVA vous répond sous 48 h. Formulaire, e-mail ou WhatsApp ; le devis, en FCFA, vient après le cadrage du besoin.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
