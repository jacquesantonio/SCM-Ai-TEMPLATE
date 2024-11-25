import { Sequelize } from 'sequelize';
import { config } from './config.js';

export const sequelize = new Sequelize(config.databaseUrl, {
  dialect: 'sqlite',
  logging: false
});