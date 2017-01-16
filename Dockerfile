FROM node

RUN mkdir /src

RUN npm install forever -g

WORKDIR /src
ADD . /src/
RUN npm install

EXPOSE 3000

CMD forever --minUptime 100 bin/www
