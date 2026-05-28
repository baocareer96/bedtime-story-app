import { cache } from "react";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import type { Story } from "@/lib/types";

const storiesDirectory = path.join(process.cwd(), "data", "stories");

async function readStoryFile(filePath: string): Promise<Story> {
  const fileContents = await readFile(filePath, "utf8");
  return JSON.parse(fileContents) as Story;
}

export const getStories = cache(async (): Promise<Story[]> => {
  const entries = await readdir(storiesDirectory, { withFileTypes: true });
  const storyFiles = entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".json"))
    .map((entry) => path.join(storiesDirectory, entry.name));

  const stories = await Promise.all(storyFiles.map(readStoryFile));

  return stories.sort((left, right) => left.title.localeCompare(right.title));
});

export async function getStoryBySlug(slug: string): Promise<Story | undefined> {
  const stories = await getStories();
  return stories.find((story) => story.slug === slug);
}
