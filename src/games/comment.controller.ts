import { Controller, Get, Param } from '@nestjs/common';

import { commentService } from './comment.service';

@Controller('comments')
export class CommnetController {
    constructor(private readonly CommentService: commentService) {}

    @Get()
    findAll() {
        return this.CommentService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: string) {
        return this.CommentService.findById(+id);
    }
}