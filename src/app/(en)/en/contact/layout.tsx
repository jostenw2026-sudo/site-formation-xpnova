import type { Metadata } from 'next';
import { alternatesPour } from '@/lib/alternates';

// La page est un composant client (formulaire) : sa metadata vit ici.
export const metadata: Metadata = {
  alternates: alternatesPour('/contact', 'en'),
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
