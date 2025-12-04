import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Response } from 'express';
import { changePasswordDto, CreateUserDto, Login } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Perfil, User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,

    @InjectRepository(Perfil)
    private perfilRepository: Repository<Perfil>,
    private jwtService: JwtService,
  ) {}

  async findOneByNameandPassword(data: Login): Promise<User> {
    const { usuario, password } = data;

    const user = await this.userRepository.findOne({
      where: { usuario, password },
    });

    if (!user) {
      throw new NotFoundException(`El usuario o la contraseña es incorrecta`);
    }

    return user;
  }

  async Login(data: Login, res: Response) {
    const user = await this.findOneByNameandPassword(data);

    const payload = { id: user.id_usuario, usuario: user.usuario, role:user.perfil.perfil};
    const token = await this.jwtService.signAsync(payload);

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // en dev desactívalo
      sameSite: 'strict',
      path: '/',
    });

    return res.json({
      message: 'Inicio de sesión exitoso',
      access_token: token,
    });
  }

  async findOne(id_usuario: number): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { id_usuario },
    });
    if (!user) {
      throw new NotFoundException(`Student not found`);
    }
    return user;
  }

  async findbyUser(usuario: string) {
    const user = await this.userRepository.findOne({
      where: { usuario },
    });
    return user;
  }

  async create(data: CreateUserDto) {
    const { id_perfil, ...rest } = data;

    const user = await this.findbyUser(data.usuario);

    if (user) {
      throw new BadRequestException('User found, change the user ');
    }

    const perfil = await this.perfilRepository.findOne({
      where: { id_perfil },
    });

    if (!perfil) {
      throw new NotFoundException('Perfil not found');
    }

    const datauser = { ...rest, perfil };

    const usercreate = this.userRepository.create(datauser);
    return this.userRepository.save(usercreate);
  }

  async changePassword(data: changePasswordDto, id_usuario: number) {
    const user = await this.findOneByNameandPassword({
      usuario: (await this.findOne(id_usuario)).usuario,
      password: data.password,
    });

    user.password = data.newPassword;
    return this.userRepository.save(user);
  }
}
//IO
