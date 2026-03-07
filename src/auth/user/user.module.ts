import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from '../entities/user.entity';
import { RoleModule } from '../role/role.module';

import { UserService } from './user.service';

@Module({
    providers: [UserService],
    imports: [RoleModule, TypeOrmModule.forFeature([User])],
    exports: [UserService],
})
export class UserModule {}
