import { Product } from '../models/product.model';

export class ProductDAO {
  static async create(data: any) {
    const product = new Product(data);
    return product.save();
  }

  static async findAll() {
    return Product.find();
  }
}
