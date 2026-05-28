import { notFound } from "next/navigation";
import { StoryReader } from "@/components/StoryReader";
import { getStories, getStoryBySlug } from "@/lib/stories";

type StoryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const stories = await getStories();

  return stories.map((story) => ({
    slug: story.slug
  }));
}

export default async function StoryPage({ params }: StoryPageProps) {
  const { slug } = await params;
  const story = await getStoryBySlug(slug);

  if (!story) {
    notFound();
  }

  return <StoryReader story={story} />;
}
