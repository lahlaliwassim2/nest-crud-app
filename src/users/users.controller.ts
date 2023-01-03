import {
  Controller,
  Delete,
  Query,
  Get,
  Post,
  Put,
  Param,
  Body,
} from '@nestjs/common';
import { UserDto } from 'src/dto/users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @Post()
  Add(@Body() body: UserDto) {
    return this.service.Add(body);
  }
  @Get()
  FindAll() {
    return this.service.FindAll();
  }
  @Get('/:id')
  FindOne(@Param('id') id: string) {
    return this.service.FindOne(id);
  }
  @Put('/:id')
  Update(@Param('id') id: string, @Body() body: UserDto) {
    return this.service.Update(id,body);
  }
  @Delete('/:id')
  Delete(@Param('id') id: string) {
    return this.service.Delete(id);
  }
  @Post('/search')
  Search(@Query('Key') Key) {
    return this.service.Search();
  }
}
