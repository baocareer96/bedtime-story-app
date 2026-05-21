import { notFound } from "next/navigation";
import storiesData from "@/data/stories.json";
import { StoryReader } from "@/components/StoryReader";

type StoryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return storiesData.stories.map((story) => ({
    slug: story.slug
  }));
}

export default async function StoryPage({ params }: StoryPageProps) {
  const { slug } = await params;
  const story = storiesData.stories.find((item) => item.slug === slug);

  if (!story) {
    notFound();
  }

  return <StoryReader story={story} />;
}
