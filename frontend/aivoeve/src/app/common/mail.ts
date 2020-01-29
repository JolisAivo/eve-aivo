import { Capsuleer } from './capsuleer';
export class Mail {
    id: number;
    subject: string;
    mailto: Capsuleer[];
    mailfrom: Capsuleer;
    received: Date;
    body: string;
}
