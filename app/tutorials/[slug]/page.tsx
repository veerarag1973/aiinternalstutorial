import { redirect } from 'next/navigation';
import { getTutorialBySlug, getAllTutorialSlugs } from '@/lib/tutorials';

export async function generateStaticParams() {
  const slugs = getAllTutorialSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default function TutorialSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const tutorial = getTutorialBySlug(params.slug);
  
  if (!tutorial) {
    redirect('/tutorials');
  }
  
  // Redirect to the latest version
  redirect(`/tutorials/${params.slug}/${tutorial.meta.latest}`);
}
