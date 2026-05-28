import { StoryCard } from "@/components/StoryCard";
import { getStories } from "@/lib/stories";

export default async function HomePage() {
  const stories = await getStories();

  return (
    <main className="safe-top safe-bottom min-h-screen px-4 py-6 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <section className="rounded-[2rem] bg-white/8 p-6 shadow-story backdrop-blur sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold-300">
            Sleepy Story Shelf
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight text-cream-50 sm:text-6xl">
            Gentle bedtime stories built for quiet iPad reading.
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-cream-100/85 sm:text-xl">
            Choose a story, turn pages one scene at a time, and use narration or
            read together before sleep.
          </p>
        </section>

        <section className="mt-6 grid gap-6 md:grid-cols-2">
          {stories.map((story) => (
            <StoryCard key={story.slug} story={story} />
          ))}
        </section>
      </div>
    </main>
  );
}
