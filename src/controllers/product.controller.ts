import { Request, Response } from 'express';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { CreateProductDto } from '../dtos/product.dto';
import { ProductService } from '../services/product.service';

export class ProductController {
  static async create(req: Request, res: Response) {
    const dto = plainToInstance(CreateProductDto, req.body);
    const errors = await validate(dto);
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    const product = await ProductService.create(dto);
    res.status(201).json(product);
  }

  static async getAll(req: Request, res: Response) {
    const products = await ProductService.findAll();
    res.json(products);
  }
}
