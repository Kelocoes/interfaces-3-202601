import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Session } from 'src/games/entities/session.entity';

import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';

@Injectable()
export class sessionService {
    constructor(
        @InjectRepository(Session)
        private readonly sessionRepository: Repository<Session>,
    ) {}

    findByName(id: number) {
        return this.sessionRepository.findOneBy({ id });
    }
    async create(createSessionDto: CreateSessionDto) {
        const newSession = this.sessionRepository.create({
            ...createSessionDto,
        });

        return this.sessionRepository.save(newSession);
    }
    async update(id: number, updateSessionDto: UpdateSessionDto) {
        await this.sessionRepository.update(id, updateSessionDto);
        return this.sessionRepository.findOneBy({ id });
    }
    async remove(id: number) {
        const result = await this.sessionRepository.delete(id);
        if (result.affected) {
            return { id };
        }
        return null;
    }
    findById(id: number) {
        return this.sessionRepository.findOneBy({ id });
    }
    findAll() {
        return this.sessionRepository.find();
    }
}