import Image from "next/image";
import Link from "next/link";
import { BookOpen, MoonStar } from "lucide-react";
import type { Story } from "@/lib/types";

type StoryCardProps = {
  story: Story;
};

export function StoryCard({ story }: StoryCardProps) {
  return (
    <Link
      href={`/stories/${story.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-[2rem] bg-cream-50 text-night-900 shadow-story transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gold-300/80"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={story.coverImage}
          alt={story.title}
          fill
          priority={false}
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-night-800/70">
              Bedtime Story
            </p>
            <h2 className="mt-2 text-3xl font-semibold leading-tight">
              {story.title}
            </h2>
            <p className="mt-2 text-lg text-night-800/80">{story.subtitle}</p>
          </div>
          <MoonStar className="mt-1 h-7 w-7 shrink-0 text-lavender-400" />
        </div>

        <div className="mt-auto flex items-center justify-between rounded-2xl bg-night-900 px-4 py-3 text-cream-50">
          <span className="text-base font-medium">Ages {story.ageRange}</span>
          <span className="inline-flex items-center gap-2 text-base font-semibold">
            <BookOpen className="h-5 w-5" />
            Read story
          </span>
        </div>
      </div>
    </Link>
  );
}
