import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Comment } from 'src/games/entities/comment.entity';

import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class commentService {
    constructor(
        @InjectRepository(Comment)
        private readonly commentRepository: Repository<Comment>,
    ) {}
    async create(createCommentDto: CreateCommentDto) {
        const newComment = this.commentRepository.create({
            ...createCommentDto,
        });

        return this.commentRepository.save(newComment);
    }
    async update(id: number, updateCommentDto: UpdateCommentDto) {
        await this.commentRepository.update(id, updateCommentDto);
        return this.commentRepository.findOneBy({ id });
    }
    async remove(id: number) {
        const result = await this.commentRepository.delete(id);
        if (result.affected) {
            return { id };
        }
        return null;
    }
    findById(id: number) {
        return this.commentRepository.findOneBy({ id });
    }
    findAll() {
        return this.commentRepository.find();
    }
}