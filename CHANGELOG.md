## v0.2.0 (2025-05-30)

### Feat

- **Aria-Board**: add 4 new imaged to the mood board of motoko kusanagi

### Refactor

- **old/**: remove old unused version of website

## v0.1.0 (2025-05-27)

### Feat

- **.cz.toml**: add commitizen config
- **FriendLink**: add high variant
- **<FriendLink>**: add two lower quality version of FriendLink
- Add a portfolio to the website
- **friends.astro**: Add tess' buttons
- **other buttons.astro**: Add button for eightyeightthirty.one
- **other buttons.astro**: Add two additional buttons
- **Docker Image**: Add a docker image that uses bun for the server for testing later

### Fix

- **Docker Image**: output SSR site when in docker
- **Docker Image**: output SSR site when in docker
- **GH actions**: fix docker build context
- **GH actions**: remove cosine from docker action

### Perf

- **NavHeader**: reduce background quality a smidge
- **index**: move all FriendLinks over to high variant
- **index**: try 0x5066's button with FriendLinkLow
- **index**: move 0x5066's button to FriendLinkMid for further file size improvements
- **index**: Swap 0x5066's button to v2 for smaller file size

## v0.0.1 (2024-12-20)

### Feat

- **Gh actions**: Auto build and push docker builds to GH registry
- :zap: Setup preconnect and dns-prefetch for transing.neocities.org
- :sparkles: Move from FontAwesome to astro-icons + iconify
- **NavHeader.astro**: use image-set to supply multiple file types for heder background
- **NavHeader**: Supply client with avif, webp, jpeg and png options for profile picture
- Add SteamReplay backups repo as submodule
- **other buttons.astro**: add increment counter
- trans the internet a little more

### Fix

- **aria.css**: :ambulance: Fix comic mono never being served from website
- **aria.css**: :ambulance: Fix comic mono never being served from website
- **friends.astro**: :bug: move my own button to using `<img />` again over Astro's `<Image />`
- **NavHeader.astro**: I had 33x31 instead of 88x31...
- repair miyuko's button being stretched for some reason
- manually install sharp so the pipeline doesn't get mad
- **astro.yml**: specify pnpm in

### Refactor

- **aria.css**: dont serve Comic Shanns font file
- **NavHeader.astro**: :recycle: Increase quality of header images
- **NavHeader.astro**: :zap: Optimise size and scale of pfp in header
- **NavHeader.astro**: :zap: Optimise the header background image size and resolution
- **FriendLink.astro**: Move from <img /> to <Image /> for buttons
