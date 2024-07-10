FROM node:22-bullseye

WORKDIR /usr/src/app

COPY package.json .

RUN apt-get update && \
    apt-get install -y wget netcat-traditional && \
    wget -q -O /usr/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for && \
    chmod +x /usr/bin/wait-for

COPY . .

RUN chmod 744 ./start.sh

EXPOSE 3000

ENTRYPOINT wait-for db:3306 -t 40 -- ./start.sh