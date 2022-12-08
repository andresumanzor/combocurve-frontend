import { parseDurationToMinutes } from '@shared/helpers/numbers';
import { convertMinutesToHour } from '@shared/helpers/strings';

export type MovieForm = {
    name: string;
    ratings: number;
    durationInHours: string;
};

export class Movie {
    id: number;
    name: string;
    ratings: number;
    durationInMinutes: number;
    durationInHours: string;
    createdAt?: Date;

    constructor(data: any) {
        this.id = data.id;
        this.name = data.name;
        this.ratings = data.ratings || 0;
        this.durationInMinutes = parseDurationToMinutes(data.durationInHours || '0m') || 0;
        this.durationInHours = convertMinutesToHour(data.durationInMinutes || 0) || '';
        this.createdAt = data.createdAt || new Date();
    }

    serialize(): Record<string, any> {
        return {
            id: this.id,
            name: this.name,
            ratings: this.ratings,
            durationInMinutes: this.durationInMinutes || parseDurationToMinutes(this.durationInHours),
            createdAt: this.createdAt,
        };
    }
}
