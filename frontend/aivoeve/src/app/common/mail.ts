import { Capsuleer } from './capsuleer';
export class Mail {
    id: number;
    subject: string;
    from: Capsuleer;
    received: Date;
    body: string;
}
