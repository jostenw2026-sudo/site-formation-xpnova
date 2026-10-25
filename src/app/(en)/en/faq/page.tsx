import PageFaq from '@/components/PageFaq';
import { metadonneesPage } from '@/lib/metadonnees';

export const generateMetadata = metadonneesPage('/faq', 'en', {
  title: 'Frequently asked questions — Training Engineering XP-NOVA',
  description: "XP-NOVA's role, competency frameworks, how a design unfolds, audiences and funding, cost of a request, quotes in FCFA, deliverables: the division's answers.",
});

export default function FaqPage() {
  return <PageFaq lang="en" />;
}
