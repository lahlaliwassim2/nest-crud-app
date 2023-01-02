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
    return 'add actions';
  }
  @Get()
  FindAll() {
    return 'all users';
  }
  @Get('/:id')
  FindOne(@Param('id') id: string) {
    return id;
  }
  @Put('/:id')
  Update(@Param('id') id: string) {
    return id;
  }
  @Delete('/:id')
  Delete(@Param('id') id: string) {
    return id;
  }
  @Post('search')
  Search(@Query('Key') Key) {
    return Key;
  }
}
