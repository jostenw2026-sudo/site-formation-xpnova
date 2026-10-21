import type { Metadata } from 'next';
import { alternatesPour } from '@/lib/alternates';

// La page est un composant client (formulaire) : sa metadata vit ici.
export const metadata: Metadata = {
  alternates: alternatesPour('/contact', 'en'),
  title: 'Contact — Training Engineering XP-NOVA',
  description: 'Describe your training need: an XP-NOVA training engineer replies within 48 hours. Form, e-mail or WhatsApp; the quote, in FCFA, follows once the need is framed.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
