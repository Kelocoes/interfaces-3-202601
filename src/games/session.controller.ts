import { Controller, Get, Param } from '@nestjs/common';

import { sessionService } from './session.service';

@Controller('sessions')
export class SessionsController {
    constructor(private readonly SessionService: sessionService) {}

    @Get()
    findAll() {
        return this.SessionService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: string) {
        return this.SessionService.findById(+id);
    }
}