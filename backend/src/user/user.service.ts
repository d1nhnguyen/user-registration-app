import * as bcrypt from 'bcrypt';
import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    // ✅ Check for existing email BEFORE creating user
    const existingUser = await this.userRepository.findOne({
      where: { email: createUserDto.email }
    });

    if (existingUser) {
      throw new ConflictException('Email already exists');
    }

    // ✅ Hash password
    const hash = await bcrypt.hash(createUserDto.password, 10);
    
    // ✅ Save user
    const user = await this.userRepository.save({
      email: createUserDto.email, 
      password: hash
    });

    // ✅ Return success response (without password)
    return {
      message: 'User registered successfully',
      user: {
        id: user.id,
        email: user.email,
        createdAt: user.createdAt
      }
    };
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}