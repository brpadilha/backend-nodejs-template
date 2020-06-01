import Sequelize from 'sequelize';
// import mongoose from 'mongoose';
import User from '../app/models/User';
import databaseConfig from '../config/database';

const models = [User];

class Database {
  constructor() {
    this.init();
    // this.mongo();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }

  // mongo() {
  //   this.mongoConnection = mongoose.connect('mongodb://localhost:27017/bank', {
  //     useNewUrlParser: true,
  //     useFindAndModify: true,
  //     useUnifiedTopology: true,
  //   });
  // }
}

export default new Database();
