import { Controller } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Controller('auth')
export class UsersController {
  constructor(private usersService: UsersService) {}
}
