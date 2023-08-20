FROM node:lts
LABEL org.opencontainers.image.authors="Ben Kenawell"


RUN apt update
# editor
RUN apt install -y kakoune jq tmux
# global npm packages
RUN npm install --global pnpm

# port for testing
EXPOSE 80

WORKDIR /root
