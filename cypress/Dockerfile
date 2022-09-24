FROM cypress/included:10.8.0

WORKDIR /cypress
WORKDIR /app

RUN npm install cypress@10.8.0


COPY ./cypress ./cypress
COPY . /app
# COPY ./e2e/cypress ./e2e/cypress
# COPY ./cypress.config.js ./cypress.config.js

RUN npx cypress run