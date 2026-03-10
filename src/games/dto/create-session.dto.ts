import { Timestamp } from 'typeorm';

import { SessionLocation, SessionStatus } from '../entities/session.entity';

export class CreateSessionDto {
    notes: string;
    date_time: Timestamp;
    status: SessionStatus;
    location: SessionLocation;
}