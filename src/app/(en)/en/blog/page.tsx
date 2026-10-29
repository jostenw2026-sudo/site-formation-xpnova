import type { Metadata } from 'next';
import { alternatesPour } from '@/lib/alternates';
import { BLOG_DIVISION } from '@/content/blog';
import PageBlog from '@/components/PageBlog';

// Tant que la division n'a publié aucun article : noindex (liens suivis) et hors
// sitemap, comme /references (src/content/blog.ts).
export const metadata: Metadata = {
  alternates: alternatesPour('/blog', 'en'),
  title: "Blog — TRAINING XP-NOVA",
  description: "The blog of TRAINING, an XP-NOVA division: analyses and lessons learned on training engineering for the agrosystem.",
  ...(BLOG_DIVISION.length === 0 ? { robots: { index: false, follow: true } } : {}),
};

export default function Page() {
  return <PageBlog lang="en" />;
}
