import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
@UsePipes(new ValidationPipe()) // Use global validation pipe
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  async findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const productId = parseInt(id, 10);
    return this.productsService.findOne(productId);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    const productId = parseInt(id, 10);
    return this.productsService.update(productId, updateProductDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const productId = parseInt(id, 10);
    return this.productsService.delete(productId);
  }
}