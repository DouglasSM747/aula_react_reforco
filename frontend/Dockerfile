FROM node:18.17.0

WORKDIR /usr/src/app/frontend

EXPOSE 3366

# Copie apenas os arquivos necessários para instalar as dependências
COPY package*.json ./ 
COPY vite.config.ts ./
RUN npm install

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]

COPY . . 

CMD ["npm", "run", "dev"]

