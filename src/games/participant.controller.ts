import { Controller, Get, Param } from '@nestjs/common';

import { participantService } from './participant.service';

@Controller('participants')
export class ParticipantController {
    constructor(private readonly ParticipantService: participantService) {}

    @Get()
    findAll() {
        return this.ParticipantService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: string) {
        return this.ParticipantService.findById(+id);
    }
}