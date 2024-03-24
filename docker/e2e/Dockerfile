FROM cypress/base:20.11.0

WORKDIR /var/www/app

COPY ./e2e /var/www/app

RUN apt-get update && apt-get install -y \
    locales \
    fonts-ipafont-gothic \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

RUN locale-gen ja_JP.UTF-8
ENV LANG=ja_JP.UTF-8

RUN rm -rf /var/www/app/node_modules
RUN npm install
RUN npx cypress verify
