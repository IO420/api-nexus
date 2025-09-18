import { Injectable, NotFoundException } from '@nestjs/common';
import { Response } from 'express';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findOneByNameandPassword(data: CreateUserDto): Promise<User> {
    const { usuario, password } = data;

    const user = await this.userRepository.findOne({
      where: { usuario, password },
    });

    if (!user) {
      throw new NotFoundException(`El usuario ${usuario} no fue encontrado`);
    }

    return user;
  }

  async Login(data: CreateUserDto) {
    const user = await this.findOneByNameandPassword(data);
    return user;
  }
}
