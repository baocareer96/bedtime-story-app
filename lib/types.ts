export type StoryPage = {
  pageNumber: number;
  image: string;
  text: string;
  audio?: string;
};

export type Story = {
  slug: string;
  title: string;
  subtitle: string;
  coverImage: string;
  ageRange: string;
  pages: StoryPage[];
};

export type StoryData = {
  stories: Story[];
};
