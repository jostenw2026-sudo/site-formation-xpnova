import type { Metadata } from 'next';
import { alternatesPour } from '@/lib/alternates';
import { BLOG_DIVISION } from '@/content/blog';
import PageBlog from '@/components/PageBlog';

// Tant que la division n'a publié aucun article : noindex (liens suivis) et hors
// sitemap, comme /references (src/content/blog.ts).
export const metadata: Metadata = {
  alternates: alternatesPour('/blog', 'fr'),
  title: "Blog — FORMATION XP-NOVA",
  description: "Le blog de FORMATION, division d’XP-NOVA : analyses et retours d’expérience sur l’ingénierie de la formation au service de l’agrosystème.",
  ...(BLOG_DIVISION.length === 0 ? { robots: { index: false, follow: true } } : {}),
};

export default function Page() {
  return <PageBlog lang="fr" />;
}
