import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Request,
  Res,
  Req,
} from '@nestjs/common';
import type { Response } from 'express';
import { UserService } from './user.service';
import { changePasswordDto, CreateUserDto } from './dto/create-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from './jwt.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  async Login(@Body() data: CreateUserDto, @Res() res: Response) {
    return this.userService.Login(data, res);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/validate-token')
  getProfile(@Req() req) {
    return req.user;
  }

  @UseGuards(JwtAuthGuard)
  @Post('/change-password')
  async changePassword(@Body() data: changePasswordDto, @Req() req) {
    const id_usuario = req.user.id;
    await this.userService.changePassword(data, id_usuario);
    return { message: 'Contraseña actualizada correctamente' };
  }
}
//IO
