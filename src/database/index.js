import Sequelize from 'sequelize';
import mongoose from 'mongoose';
import Client from '../app/models/Client';
import databaseConfig from '../config/database';

const models = [Client];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }

  mongo() {
    this.mongoConnection = mongoose.connect('mongodb://localhost:27017/bank', {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    });
  }
}

export default new Database();
