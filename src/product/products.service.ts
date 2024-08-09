import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './products.model';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product) private productModel: typeof Product) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    return this.productModel.create(createProductDto);
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.findAll();
  }

  async findOne(id: number): Promise<Product | null> {
    return this.productModel.findByPk(id);
  }

  async update(id: number, updateProductDto: UpdateProductDto): Promise<[number, Product[]]> {
    return this.productModel.update(updateProductDto, { where: { id } });
  }

  async delete(id: number): Promise<void> {
    const product = await this.findOne(id);
    if (product) {
      await product.destroy();
    }
  }
}