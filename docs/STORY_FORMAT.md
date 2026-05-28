# Story Format

## Source of Truth

All story content is managed as one file per story in `data/stories/`.

## Required Story Shape

```json
{
  "slug": "baby-bear-blanket",
  "title": "Baby Bear's Blanket",
  "subtitle": "A gentle bedtime story",
  "coverImage": "/images/baby-bear/page-01.jpg",
  "ageRange": "3-6",
  "pages": [
    {
      "pageNumber": 1,
      "image": "/images/baby-bear/page-01.jpg",
      "text": "Baby Bear had a soft blue blanket.",
      "audio": "/audio/baby-bear/page-01.mp3"
    }
  ]
}
```

## Add a New Story

1. Create a new folder under `public/images/<story-name>/`.
2. Add one image per page.
3. Optionally create `public/audio/<story-name>/` and add one MP3 per page.
4. Create a new file `data/stories/<story-slug>.json`.
5. Make sure the `slug` is unique.
6. Make sure `coverImage` points at the first page image or a cover image.
7. Keep `pageNumber` values sequential starting from `1`.

## File Naming Guidance

- Images: `page-01.jpg`, `page-02.jpg`, `page-03.jpg`
- Audio: `page-01.mp3`, `page-02.mp3`, `page-03.mp3`

## Audio Notes

- If the referenced MP3 file is available, the app will try to play it.
- If playback fails or the file is missing, the app falls back to browser speech synthesis.

## Recommended Content Style

- Keep each page short and easy to read aloud.
- Use one scene per page.
- Favor calm, reassuring endings for bedtime reading.
