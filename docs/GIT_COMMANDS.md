# Git Commands

## Quick Push

Run these commands from the project root:

```bash
git status --short
git add .
git commit -m "your commit message"
git push origin main
```

## Recommended Commit Messages

```bash
git commit -m "Add new bedtime story content"
git commit -m "Update story reader behavior"
git commit -m "Fix story data structure"
git commit -m "Add images and narration assets"
```

## Safer Flow

Check what changed before pushing:

```bash
git status
git diff --stat
git add .
git commit -m "describe your change"
git push origin main
```

## If You Only Changed Story Data

```bash
git add data/stories public/images public/audio
git commit -m "Add new story files"
git push origin main
```

## Notes

- Current branch is `main`.
- Remote name is `origin`.
- If PowerShell has trouble with paths like `app/stories/[slug]`, use `git add .`.
- If `git commit` says nothing is staged, run `git add .` first.
