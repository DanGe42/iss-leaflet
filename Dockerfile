FROM node:7.7-alpine

# Initial environment setup
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ENV NODE_ENV "production"
COPY . /usr/src/app

# Build
RUN yarn install
RUN npm cache clean

# Prepare dumb-init. CMD after this is prepended with this
ENTRYPOINT ["/usr/src/app/.bin/dumb-init", "--"]

# This app exposes a port
EXPOSE 3000

CMD ["npm", "start"]
