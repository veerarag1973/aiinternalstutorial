import { redirect } from 'next/navigation';
import { getTutorialBySlug, getAllTutorialSlugs } from '@/lib/tutorials';

export async function generateStaticParams() {
  const slugs = getAllTutorialSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function TutorialSlugPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const tutorial = getTutorialBySlug(params.slug);
  
  if (!tutorial) {
    redirect('/tutorials');
  }
  
  // Redirect to the latest version
  redirect(`/tutorials/${params.slug}/${tutorial.meta.latest}`);
}
