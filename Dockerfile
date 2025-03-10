FROM node:lts AS runtime
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install --shamefully-hoist


COPY . .
COPY . .

RUN apt-get update -y
RUN apt-get install -y jpegoptim

RUN wget https://github.com/shssoichiro/oxipng/releases/download/v9.1.3/oxipng_9.1.3-1_amd64.deb
RUN apt-get install -y ./oxipng_9.1.3-1_amd64.deb
RUN rm ./oxipng_9.1.3-1_amd64.deb

RUN pnpm run build

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD node ./dist/server/entry.mjs
