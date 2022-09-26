FROM node
WORKDIR /app
COPY package.json /app
RUN npm install
RUN apt update
RUN apt install -y socat
COPY . /app
CMD npm run dev 
