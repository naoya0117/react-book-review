FROM cypress/base:20.11.0

WORKDIR /var/www/app

COPY ./e2e /var/www/app

RUN npm install
RUN npx cypress verify
