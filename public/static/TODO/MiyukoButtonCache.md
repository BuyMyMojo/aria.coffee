
> I use @11ty/eleventy-fetch for downloading the button images

> I have a `buttons_.yml` file in the same directory as this file, the root is an array of arrays so all buttons are split into tiers. plus the files that go into the build directory get a hash sum in their filename

```js
import * as crypto from 'node:crypto'
import * as fs from 'node:fs/promises'
import * as path from 'node:path'
import * as yaml from 'yaml'
import eleventyFetch from '@11ty/eleventy-fetch'
import { getURLHostname } from '../utils'
import buttonsFile from './buttons_.yml?raw'

async function process(buttons) {
  buttons = await Promise.all(buttons.map(async button => {
    let image
    if (button.image.startsWith('./')) {
      image = await fs.readFile(button.image)
    } else {
      image = await eleventyFetch(button.image, {
        duration: '1w',
      })
    }
    let hash = crypto.createHash('sha512')
    hash.update(image)
    let suffix = hash.digest('hex').slice(0, 12)
    let imageURL = `/buttons/${button.ident}-${suffix}`
    let imagePath = `public/${imageURL}`
    await fs.mkdir(path.dirname(imagePath), { recursive: true })
    await fs.writeFile(imagePath, image)

    return {
      width: 88,
      height: 31,
      ...button,
      alt: button.alt,
      image: imageURL,
      originalImage: button.image,
    }
  }))

  buttons = buttons.toSorted((a, b) => {
    if (a.priority !== b.priority) {
      return a.priority - b.priority
    }

    let aHost = getURLHostname(a.url)
    let bHost = getURLHostname(b.url)

    if (aHost < bHost) {
      return -1
    } else if (aHost > bHost) {
      return 1
    } else {
      return 0
    }
  })

  return buttons
}

let tiers = yaml.parse(buttonsFile)

export const buttons = await Promise.all(
  tiers.map(tier => process(tier)),
)

export const buttonsFlattened = buttons.flat()
``