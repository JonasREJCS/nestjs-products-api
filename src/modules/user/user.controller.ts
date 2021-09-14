/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Post, UseGuards, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Role } from '../../core/auth/role.decorator';
import { RolesGuard } from '../../core/auth/roles.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { ReturnUserDto } from './dto/return-user.dto';
import { UserRole } from './user-role.enum';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private usersService: UserService) {}

    @Post()
    @Role(UserRole.ADMIN)
    @UseGuards(AuthGuard(), RolesGuard)
    async createAdminUser(
      @Body(ValidationPipe) createUserDto: CreateUserDto,
    ): Promise<ReturnUserDto> {
      const user = await this.usersService.createAdminUser(createUserDto);
      return {
        user,
        message: 'Administrador cadastrado com sucesso',
      };
    }
}
