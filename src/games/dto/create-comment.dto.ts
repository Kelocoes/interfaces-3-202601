import { Timestamp } from 'typeorm';

export class CreateCommentDto {
    content: string;
    created_at: Timestamp;
}