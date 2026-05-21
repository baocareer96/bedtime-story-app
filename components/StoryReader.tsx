"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, Home, MoonStar } from "lucide-react";
import { useEffect, useState } from "react";
import type { Story } from "@/lib/types";
import { AudioButton } from "@/components/AudioButton";
import { ProgressBar } from "@/components/ProgressBar";

type StoryReaderProps = {
  story: Story;
};

const swipeThreshold = 50;

export function StoryReader({ story }: StoryReaderProps) {
  const [pageIndex, setPageIndex] = useState(0);
  const totalPages = story.pages.length;
  const currentPage = story.pages[pageIndex];

  const canGoBack = pageIndex > 0;
  const canGoNext = pageIndex < totalPages - 1;

  const goNext = () => {
    setPageIndex((current) => Math.min(current + 1, totalPages - 1));
  };

  const goBack = () => {
    setPageIndex((current) => Math.max(current - 1, 0));
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        goNext();
      }

      if (event.key === "ArrowLeft") {
        goBack();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [totalPages]);

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x <= -swipeThreshold) {
      goNext();
    }

    if (info.offset.x >= swipeThreshold) {
      goBack();
    }
  };

  return (
    <main className="safe-top safe-bottom min-h-screen px-4 py-6 sm:px-6">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-4xl flex-col gap-5">
        <header className="flex items-center justify-between gap-3">
          <Link
            href="/"
            className="inline-flex min-h-12 items-center gap-2 rounded-full bg-white/10 px-4 py-3 text-base font-semibold text-cream-50 backdrop-blur focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gold-300/80"
          >
            <Home className="h-5 w-5" />
            Home
          </Link>

          <div className="rounded-full bg-white/10 px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-cream-100/80">
            {pageIndex + 1} of {totalPages}
          </div>
        </header>

        <section className="rounded-[2rem] bg-white/8 p-4 shadow-story backdrop-blur-sm sm:p-5">
          <div className="mb-4 flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-300">
                Story Time
              </p>
              <h1 className="mt-2 text-3xl font-semibold text-cream-50 sm:text-4xl">
                {story.title}
              </h1>
              <p className="mt-2 text-lg text-cream-100/85">{story.subtitle}</p>
            </div>
            <MoonStar className="mt-1 hidden h-8 w-8 text-lavender-300 sm:block" />
          </div>

          <ProgressBar current={pageIndex + 1} total={totalPages} />

          <AnimatePresence mode="wait">
            <motion.article
              key={currentPage.pageNumber}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.08}
              onDragEnd={handleDragEnd}
              className="mt-5 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-night-900">
                <Image
                  src={currentPage.image}
                  alt={`${story.title} illustration for page ${currentPage.pageNumber}`}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
              </div>

              <div className="flex flex-col rounded-[1.75rem] bg-cream-50 p-6 text-night-900 shadow-story sm:p-8">
                <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-night-800/60">
                  Page {currentPage.pageNumber}
                </div>
                <p className="text-2xl leading-relaxed sm:text-[2rem] sm:leading-relaxed">
                  {currentPage.text}
                </p>

                <div className="mt-auto pt-8">
                  <AudioButton text={currentPage.text} audio={currentPage.audio} />
                </div>
              </div>
            </motion.article>
          </AnimatePresence>

          <nav className="mt-5 grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={goBack}
              disabled={!canGoBack}
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-white/10 px-5 py-4 text-lg font-semibold text-cream-50 transition disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronLeft className="h-5 w-5" />
              Back
            </button>
            <button
              type="button"
              onClick={goNext}
              disabled={!canGoNext}
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-gold-300 px-5 py-4 text-lg font-semibold text-night-950 transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next
              <ChevronRight className="h-5 w-5" />
            </button>
          </nav>
        </section>
      </div>
    </main>
  );
}
