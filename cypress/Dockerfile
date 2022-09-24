FROM cypress/included:10.8.0

WORKDIR /cypress
WORKDIR /app

COPY ./cypress ./cypress
# COPY ./e2e/cypress ./e2e/cypress
# COPY ./cypress.config.js ./cypress.config.js

RUN npx cypress run