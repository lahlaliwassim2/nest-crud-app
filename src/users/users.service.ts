import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto } from 'src/dto/users.dto';
import { User, UserDocument } from 'src/models/users.models';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  Add(body : UserDto) {
    return this.userModel.create(body);
  }
  FindAll() {
    return this.userModel.find();
  }
  FindOne(id) {
    return this.userModel.findById(id);
  }
  Update() {
    return 'Update user';
  }
  Delete() {
    return 'Delete user';
  }
  Search() {
    return 'Scearch user';
  }
}
