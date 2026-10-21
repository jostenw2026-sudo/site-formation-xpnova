import type { Metadata } from 'next';
import PageFaq from '@/components/PageFaq';
import { alternatesPour } from '@/lib/alternates';

export const metadata: Metadata = {
  alternates: alternatesPour('/faq', 'en'),
  title: 'Frequently asked questions — Training Engineering XP-NOVA',
  description: "XP-NOVA's role, competency frameworks, how a design unfolds, audiences and funding, cost of a request, quotes in FCFA, deliverables: the Training Engineering division's answers.",
};

export default function FaqPage() {
  return <PageFaq lang="en" />;
}
