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

    private jwtService: JwtService
  ) { }

  async findOneByNameandPassword(data: CreateUserDto): Promise<User> {

    const { usuario, password } = data

    const user = await this.userRepository.findOne({
      where: { usuario, password }
    })

    if (!user) {
      throw new NotFoundException(
        `El usuario o la contraseña es incorrecta`,
      );
    }

    return user;
  }

  async Login(data: CreateUserDto, res: Response) {
    const user = await this.findOneByNameandPassword(data);

    const payload = { id: user.id_usuario, usuario: user.usuario };
    const token = await this.jwtService.signAsync(payload);

        res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // en dev desactívalo
      sameSite: 'strict',
      path: '/',
    });

    return res.json({ message: 'Inicio de sesión exitoso' });
  }

}
