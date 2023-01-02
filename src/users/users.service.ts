import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
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
