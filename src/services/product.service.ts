// import { Product } from '../models/product.model';

// export class ProductService {
//   static async create(data: any) {
//     const product = new Product(data);
//     return product.save();
//   }

//   static async findAll() {
//     return Product.find();
//   }
// }


import { ProductDAO } from '../daos/product.dao';

export class ProductService {
  static async create(data: any) {
    return await ProductDAO.create(data);
  }

  static async findAll() {
    return await ProductDAO.findAll();
  }
}
