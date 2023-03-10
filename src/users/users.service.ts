import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto } from 'src/dto/users.dto';
import { User, UserDocument } from 'src/models/users.models';
import { faker } from '@faker-js/faker';
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
  Update(id: string,body : UserDto) {
    return this.userModel.findByIdAndUpdate(
      {_id : id},
      {$set: body},
      {new : true}
    );
  }
  Delete(id) {
    return this.userModel.remove({_id : id});
  }
  Search(Key: string) {
    const keyword = Key
    ? {
      $or: [
        { fullname: { $regex: Key, $options: 'i' } },
        { email:  { $regex: Key, $options: 'i' }},
      ],
    }
    : {};
    return this.userModel.find(keyword);
  }
  Faker() {
     for(let i = 0;i<30;i++){
        const fakeUser = {
          fullname: faker.name.fullName(),
          email: faker.internet.email(),
          age: 30,
          contry: faker.address.city()
        };
        this.userModel.create(fakeUser)
    }; 
    return 'fake Users adding'
  }
}
