import { Sequelize } from 'sequelize-typescript';

const connection = new Sequelize({
  dialect: 'mysql',
  host: 'db',
  username: '',
  password: '',
  database: '',
  logging: false,
});

export default connection;
