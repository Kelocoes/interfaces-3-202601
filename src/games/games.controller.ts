import { Controller, Get, Param } from '@nestjs/common';

import { gameService } from './games.service';

@Controller('games')
export class GameController {
    constructor(private readonly GameService: gameService) {}

    @Get()
    findAll() {
        return this.GameService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: string) {
        return this.GameService.findById(+id);
    }
}