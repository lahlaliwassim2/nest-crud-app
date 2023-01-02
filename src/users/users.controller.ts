import {
  Controller,
  Delete,
  Query,
  Get,
  Post,
  Put,
  Param,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @Post()
  Add() {
    return this.service.Add();
  }
  @Get()
  FindAll() {
    return this.service.FindAll();
  }
  @Get('/:id')
  FindOne(@Param('id') id: string) {
    return this.service.FindOne();
  }
  @Put('/:id')
  Update(@Param('id') id: string) {
    return this.service.Update();
  }
  @Delete('/:id')
  Delete(@Param('id') id: string) {
    return this.service.Delete();
  }
  @Post('search')
  Search(@Query('Key') Key) {
    return this.service.Search();
  }
}
