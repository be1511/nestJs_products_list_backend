import {
  Body,
  Controller,
  Get,
  Post,
  Delete,
  Param,
  ParseIntPipe,
  UsePipes,
  ValidationPipe,
  Patch,
  Put,
} from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from './dto/index';
import { Product } from './product.entity';
import { ProductsService } from './products.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  async GetAll(): Promise<Product[] | any> {
    try {
      const data= await this.productsService.getAll();
      return ( {
        mgs_id : 1,
        msg : 'sucessfully fetch data',
        data: data
      }
      )
    } catch(error) {
      return ( {
        mgs_id : -1,
        msg : 'error on fetch data'
      }
      )
    }
    
  }

  @Get(':id')
  async GetOne(@Param('id', ParseIntPipe) id: number): Promise<Product> {
    return this.productsService.getOneById(id);
  }

  @Post()
  async create(@Body() product: CreateProductDto): Promise<Product> {
    return this.productsService.create(product);
  }

  @Put(':id')
  @UsePipes(ValidationPipe)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() product: UpdateProductDto,
  ): Promise<Product> {
    return this.productsService.update(id, product);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<number> {
    return this.productsService.delete(id);
  }
}
