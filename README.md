# Wowie what a gay little website for my gay little self

## Deploy steps (Pre-rendered website)

On dev machine:

```sh
pnpm run build && mv ./dist ./dist-new && croc send ./dist-new
```

on server:

```sh
CROC_SECRET="XXXX-word-word-word" croc
rm -r ./dist-old/ && mv ./dist ./dist-old && mv ./dist-new ./dist
```