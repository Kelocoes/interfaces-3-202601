import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Game } from 'src/games/entities/game.entity';

import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';

@Injectable()
export class gameService {
    constructor(
        @InjectRepository(Game)
        private readonly gameRepository: Repository<Game>,
    ) {}

    findByName(name: string) {
        return this.gameRepository.findOneBy({ name });
    }
    async create(createGameDto: CreateGameDto) {
        const newGame = this.gameRepository.create({
            ...createGameDto,
        });

        return this.gameRepository.save(newGame);
    }
    async update(id: number, updateGameDto: UpdateGameDto) {
        await this.gameRepository.update(id, updateGameDto);
        return this.gameRepository.findOneBy({ id });
    }
    async remove(id: number) {
        const result = await this.gameRepository.delete(id);
        if (result.affected) {
            return { id };
        }
        return null;
    }
    findById(id: number) {
        return this.gameRepository.findOneBy({ id });
    }
    findAll() {
        return this.gameRepository.find();
    }
}