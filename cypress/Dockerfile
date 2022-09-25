# FROM cypress/included:10.8.0

# WORKDIR /cypress


# RUN npm install cypress@10.8.0
# # COPY cypress.config.js ./cypress.config.js
# COPY ./cypress ./cypress
# # COPY . /app
# # COPY ./e2e/cypress ./e2e/cypress


# RUN npx cypress run

# pull official Cypress image
FROM cypress/included:10.8.0

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# copy our test application
COPY package.json /usr/src/app/package.json
COPY package-lock.json /usr/src/app/package-lock.json

# install NPM dependencies and Cypress binary
RUN npm ci

# copy all files into the container
COPY . /usr/src/app
COPY cypress.config.js /usr/src/app/cypress.config.js

# check if the binary was installed successfully
RUN $(npm bin)/cypress verify

# run tests
CMD ["./node_modules/.bin/cypress", "run"]
