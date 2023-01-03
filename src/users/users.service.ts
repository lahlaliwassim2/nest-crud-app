import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/models/users.models';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private catModel: Model<UserDocument>) {}
  Add() {
    return 'add user';
  }
  FindAll() {
    return 'all users';
  }
  FindOne() {
    return 'One user';
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
