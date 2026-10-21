import type { Metadata } from 'next';
import PageFaq from '@/components/PageFaq';

export const metadata: Metadata = {
  title: 'Questions fréquentes — Ingénierie de la formation XP-NOVA',
  description: "Rôle de XP-NOVA, référentiels de compétences, déroulé d'une conception, publics et financement, coût d'une demande, devis en FCFA, livrables : les réponses de la division Ingénierie de la formation.",
};

export default function FaqPage() {
  return <PageFaq lang="fr" />;
}
