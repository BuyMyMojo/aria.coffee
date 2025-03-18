# Wowie what a gay little website for my gay little self

## Setup

You must create a `.env` file with the contents of `.env.example` and set the URL of your repo for the commit footer.

Example URL: `https://github.com/BuyMyMojo/aria.coffee/` - Notice the trailing `/`, this is required

## Deploy steps (Pre-rendered website)

On dev machine:

```sh
pnpm run build && rm -r ./dist-new && mv ./dist ./dist-new && croc send --zip ./dist-new
```

The `--zip` is required as there is some file name somewhere that croc doesn't like so putting in a zip fixes this.

on server:

```sh
CROC_SECRET="XXXX-word-word-word" croc
rm -r ./dist-old/ && mv ./dist ./dist-old && mv ./dist-new ./dist
```
