import { Sequelize } from 'sequelize-typescript';

const connection = new Sequelize({
  dialect: 'mysql',
  port: 3306,
  host: 'db',
  username: 'root',
  password: '123456',
  database: 'lojavirtual',
  logging: false,
});

export default connection;