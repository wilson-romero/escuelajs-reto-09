const MongoConnect = require('../lib/mongo');

class ProductService {
  constructor() {
    this.collection = 'products';
    this.mongoDB = new MongoConnect();
  }

  async getProducts() {
    const query = {};
    const products = await this.mongoDB.getAll(this.collection, query);
    return products || [];
  }
}

module.exports = ProductService;
